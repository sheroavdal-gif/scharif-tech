"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Dark, metallic 3x3 cube rendered with three.js for the hero.
 * - three.js is loaded lazily (dynamic import) so it never blocks first paint.
 * - Slow idle spin, gentle tilt toward the pointer, and a layer twist every few seconds.
 * - Pauses when scrolled out of view; renders one still frame for prefers-reduced-motion.
 */
export default function HeroCube({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      const { RoundedBoxGeometry } = await import("three/examples/jsm/geometries/RoundedBoxGeometry.js");
      const { RoomEnvironment } = await import("three/examples/jsm/environments/RoomEnvironment.js");
      if (disposed) return;

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      } catch {
        return; // No WebGL: the hero simply shows without the cube.
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.0;
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";
      mount.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      scene.environment = envTex;
      scene.environmentIntensity = 0.32;

      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
      camera.position.set(0, 0, 10.5);

      // Lights: cool white key from top-left, warm orange rim from behind-right (brand accent).
      const key = new THREE.DirectionalLight(0xffffff, 2.2);
      key.position.set(-4, 6, 5);
      scene.add(key);
      const rim = new THREE.DirectionalLight(0xff6a00, 3.2);
      rim.position.set(5, 1.5, -4);
      scene.add(rim);
      const fill = new THREE.DirectionalLight(0x9fb4ff, 0.5);
      fill.position.set(3, -4, 4);
      scene.add(fill);

      // --- Procedural surface textures (drawn on canvases, no image downloads) ---
      const makeTexture = (draw: (ctx: CanvasRenderingContext2D, s: number) => void) => {
        const s = 256;
        const canvas = document.createElement("canvas");
        canvas.width = canvas.height = s;
        const ctx = canvas.getContext("2d")!;
        draw(ctx, s);
        const tex = new THREE.CanvasTexture(canvas);
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        return tex;
      };
      let seed = 7;
      const rand = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const grille = makeTexture((ctx, s) => {
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, s, s);
        ctx.fillStyle = "#000";
        const step = s / 24;
        for (let y = 0; y < 24; y++)
          for (let x = 0; x < 24; x++) {
            ctx.beginPath();
            ctx.arc(x * step + step / 2 + (y % 2 ? step / 2 : 0), y * step + step / 2, step * 0.28, 0, Math.PI * 2);
            ctx.fill();
          }
      });
      const grain = makeTexture((ctx, s) => {
        const img = ctx.createImageData(s, s);
        for (let i = 0; i < img.data.length; i += 4) {
          const v = 90 + rand() * 165;
          img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
          img.data[i + 3] = 255;
        }
        ctx.putImageData(img, 0, 0);
      });
      const brushed = makeTexture((ctx, s) => {
        ctx.fillStyle = "#808080";
        ctx.fillRect(0, 0, s, s);
        for (let i = 0; i < 900; i++) {
          const g = Math.floor(rand() * 255);
          ctx.strokeStyle = `rgba(${g},${g},${g},0.35)`;
          ctx.lineWidth = rand() * 1.5;
          const y = rand() * s;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(s, y + (rand() - 0.5) * 4);
          ctx.stroke();
        }
      });

      const base = { color: 0x0c0c0e, envMapIntensity: 1 };
      const materials = [
        new THREE.MeshPhysicalMaterial({ ...base, metalness: 0.7, roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.15 }),
        new THREE.MeshPhysicalMaterial({ ...base, metalness: 0.4, roughness: 0.75, bumpMap: grain, bumpScale: 1.2, roughnessMap: grain }),
        new THREE.MeshPhysicalMaterial({ ...base, color: 0x111114, metalness: 0.5, roughness: 0.55, bumpMap: grille, bumpScale: 2.5 }),
        new THREE.MeshPhysicalMaterial({ ...base, color: 0x16161a, metalness: 0.85, roughness: 0.4, bumpMap: brushed, bumpScale: 0.8, roughnessMap: brushed }),
        new THREE.MeshPhysicalMaterial({ ...base, color: 0x050506, metalness: 0.2, roughness: 0.9 }),
      ];
      const geometry = new RoundedBoxGeometry(0.95, 0.95, 0.95, 5, 0.09);

      const cube = new THREE.Group();
      const cubies: InstanceType<typeof THREE.Mesh>[] = [];
      for (let x = -1; x <= 1; x++)
        for (let y = -1; y <= 1; y++)
          for (let z = -1; z <= 1; z++) {
            const mesh = new THREE.Mesh(geometry, materials[Math.floor(rand() * materials.length)]);
            mesh.position.set(x, y, z);
            cube.add(mesh);
            cubies.push(mesh);
          }
      const holder = new THREE.Group(); // holder = pointer tilt + idle spin; cube = layer twists
      holder.add(cube);
      holder.rotation.set(0.5, -0.65, 0);
      scene.add(holder);

      // --- Layer twist (Rubik-style), using a temporary pivot group ---
      const pivot = new THREE.Group();
      cube.add(pivot);
      type Twist = { axis: "x" | "y" | "z"; dir: number; start: number; members: InstanceType<typeof THREE.Mesh>[] };
      let twist: Twist | null = null;
      let nextTwistAt = performance.now() + 900;
      const TWIST_MS = 950;
      const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
      const axes = ["x", "y", "z"] as const;
      const startTwist = (now: number) => {
        const axis = axes[Math.floor(Math.random() * 3)];
        const layer = Math.floor(Math.random() * 3) - 1;
        const members = cubies.filter((c) => Math.round(c.position[axis]) === layer);
        pivot.rotation.set(0, 0, 0);
        members.forEach((m) => pivot.attach(m));
        twist = { axis, dir: Math.random() < 0.5 ? 1 : -1, start: now, members };
      };
      const finishTwist = (t: Twist) => {
        pivot.rotation[t.axis] = (t.dir * Math.PI) / 2;
        pivot.updateMatrixWorld(true);
        t.members.forEach((m) => {
          cube.attach(m);
          m.position.set(Math.round(m.position.x), Math.round(m.position.y), Math.round(m.position.z));
          // Snap rotation to exact quarter turns so tiny float errors never build up.
          const e = new THREE.Euler().setFromQuaternion(m.quaternion);
          const snap = (v: number) => Math.round(v / (Math.PI / 2)) * (Math.PI / 2);
          m.rotation.set(snap(e.x), snap(e.y), snap(e.z));
        });
        pivot.rotation.set(0, 0, 0);
      };

      // --- Pointer tilt ---
      const pointer = { x: 0, y: 0 };
      const onPointer = (e: PointerEvent) => {
        pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
      };
      window.addEventListener("pointermove", onPointer, { passive: true });

      const resize = () => {
        const w = mount.clientWidth;
        const h = mount.clientHeight;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      const ro = new ResizeObserver(resize);
      ro.observe(mount);
      resize();

      let visible = true;
      const io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !reducedMotion && !raf) raf = requestAnimationFrame(loop);
      });
      io.observe(mount);

      let raf = 0;
      let last = performance.now();
      let spin = 0;
      const loop = (now: number) => {
        raf = 0;
        if (!visible) return;
        const dt = Math.min(now - last, 50);
        last = now;
        spin += dt * 0.00035;
        holder.rotation.y += (-0.65 + spin + pointer.x * 0.25 - holder.rotation.y) * 0.05;
        holder.rotation.x += (0.5 + pointer.y * 0.15 - holder.rotation.x) * 0.05;

        if (!twist && now >= nextTwistAt) startTwist(now);
        if (twist) {
          const t = Math.min((now - twist.start) / TWIST_MS, 1);
          pivot.rotation[twist.axis] = (twist.dir * Math.PI) / 2 * ease(t);
          if (t >= 1) {
            finishTwist(twist);
            twist = null;
            nextTwistAt = now + 900 + Math.random() * 900;
          }
        }
        renderer.render(scene, camera);
        raf = requestAnimationFrame(loop);
      };

      renderer.render(scene, camera);
      setReady(true);
      if (!reducedMotion) raf = requestAnimationFrame(loop);

      cleanup = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        ro.disconnect();
        window.removeEventListener("pointermove", onPointer);
        geometry.dispose();
        materials.forEach((m) => m.dispose());
        [grille, grain, brushed, envTex].forEach((t) => t.dispose());
        pmrem.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* Soft floor shadow + warm glow under the cube */}
      <div className="absolute left-1/2 bottom-[8%] -translate-x-1/2 w-[60%] h-[12%] rounded-[100%] bg-black/80 blur-2xl" />
      <div className="absolute inset-[15%] rounded-full bg-[radial-gradient(circle,rgba(255,106,0,0.10),transparent_65%)] blur-2xl" />
      <div
        ref={mountRef}
        className={`absolute inset-0 transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
