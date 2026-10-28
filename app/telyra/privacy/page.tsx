import LegalLayout from "../../components/LegalLayout";

export const metadata = {
  title: "Privacy Policy — Telyra",
};

export default function TelyraPrivacyPolicy() {
  return (
    <LegalLayout title="Telyra Privacy Policy" lastUpdated="October 29, 2026">
      <section>
        <p>
          Telyra (&ldquo;Telyra&rdquo;, the &ldquo;App&rdquo;) is developed and operated by{" "}
          <strong className="text-white">AVDALYAN TECH LLC</strong> (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;), a U.S. limited liability company. This policy explains
          what information Telyra uses, why, and what control you have over it.
        </p>
        <p>
          Telyra has no user accounts and no servers of its own. We do not
          collect, receive or store any of your data. We show no ads and use
          no analytics or tracking tools.
        </p>
      </section>

      <section>
        <h2>1. Information stored only on your device</h2>
        <p>
          Everything you create in Telyra stays on your iPhone and is never
          sent to us:
        </p>
        <ul>
          <li>Your scripts</li>
          <li>Your recordings and the edits you make to them</li>
          <li>
            Your brand settings, including any logo you choose, your colors,
            name tag and end card text
          </li>
          <li>Your prompter settings</li>
        </ul>
        <p>
          You can delete scripts and recordings in the app at any time.
          Deleting the app removes all of it from your device.
        </p>
      </section>

      <section>
        <h2>2. Camera and microphone</h2>
        <p>
          Telyra uses the front camera and the microphone to record you while
          you read your script, and the microphone to let the script follow
          your voice. Recordings are stored only on your device until you
          choose to save them to your photo library or share them.
        </p>
      </section>

      <section>
        <h2>3. Speech recognition</h2>
        <p>
          To scroll the script as you speak, and to create captions and cut
          away retakes and pauses, Telyra uses Apple&rsquo;s speech recognition.
          Telyra requests on-device recognition only, so your speech is
          processed on your iPhone and is not sent to us. The system
          permission prompt is written by Apple and also covers Apple&rsquo;s own
          handling of speech data, which is described in{" "}
          <a
            href="https://www.apple.com/legal/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple&rsquo;s privacy policy
          </a>
          .
        </p>
      </section>

      <section>
        <h2>4. AI assistant</h2>
        <p>
          The AI assistant that writes and improves scripts uses Apple
          Intelligence&rsquo;s on-device model. Your topics and scripts are
          processed on your iPhone and are not sent to us or to any third-party
          AI provider.
        </p>
      </section>

      <section>
        <h2>5. Photo library</h2>
        <p>
          When you save a video, Telyra asks for permission to add it to your
          photo library. Telyra can only add videos; it cannot see or read the
          photos and videos already in your library. Logos you pick for your
          brand settings are copied into the app on your device.
        </p>
      </section>

      <section>
        <h2>6. Purchases</h2>
        <p>
          Subscriptions are handled entirely by Apple. We never receive your
          name, Apple ID or payment details. The app checks your subscription
          status with Apple on your device. To manage or cancel your
          subscription, go to Settings &gt; your name &gt; Subscriptions on
          your iPhone.
        </p>
      </section>

      <section>
        <h2>7. Sharing videos</h2>
        <p>
          When you share a video from Telyra to another app or service, that
          app or service&rsquo;s own privacy policy applies to what you share.
        </p>
      </section>

      <section>
        <h2>8. Children</h2>
        <p>
          Telyra is not directed at children under 13, and we do not knowingly
          collect data from children under that age.
        </p>
      </section>

      <section>
        <h2>9. Changes to this policy</h2>
        <p>
          We may update this policy as Telyra changes. We will update the
          &ldquo;Last updated&rdquo; date above, and post material changes within the
          app.
        </p>
      </section>

      <section>
        <h2>10. Contact</h2>
        <p>
          AVDALYAN TECH LLC
          <br />
          <a href="mailto:hello@avdalyan.world">hello@avdalyan.world</a>
        </p>
      </section>
    </LegalLayout>
  );
}
