/** An iPhone 17 Pro-style frame: titanium band, black bezel, Dynamic Island
 * and side buttons. The screen has the exact aspect ratio of an iPhone
 * screenshot (1206 x 2622), so screenshots fit without cropping. */
export default function PhoneMock({ name, accent, image }: { name: string; accent: string; image: string | null }) {
  const button = "absolute w-[3px] rounded-sm bg-gradient-to-b from-zinc-400 via-zinc-500 to-zinc-400";
  return (
    <div className="relative mx-auto w-[250px] transition duration-500 group-hover:-rotate-2 group-hover:scale-105">
      {/* Side buttons: action + volume (left), power (right) */}
      <span className={`${button} -left-[3px] top-[17%] h-[5%]`} />
      <span className={`${button} -left-[3px] top-[25%] h-[9%]`} />
      <span className={`${button} -left-[3px] top-[36%] h-[9%]`} />
      <span className={`${button} -right-[3px] top-[28%] h-[13%]`} />
      {/* Titanium band */}
      <div className="rounded-[3.1rem] p-[3px] bg-gradient-to-br from-zinc-300 via-zinc-500 to-zinc-300 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.45)]">
        {/* Bezel */}
        <div className="rounded-[2.95rem] bg-black p-[9px]">
          {/* Screen */}
          <div className="relative aspect-[1206/2622] rounded-[2.45rem] overflow-hidden bg-zinc-900">
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={image} alt={`${name} app screenshot`} className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${accent} flex items-center justify-center`}>
                <span className="text-3xl font-bold text-white">{name}</span>
              </div>
            )}
            {/* Dynamic Island */}
            <div className="absolute top-[2.2%] left-1/2 -translate-x-1/2 w-[31%] h-[3.4%] rounded-full bg-black" />
            {/* Glass glare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.12] pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
