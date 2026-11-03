import LegalLayout from "../../components/LegalLayout";

export const metadata = {
  title: "Privacy Policy — Ekolod",
};

export default function EkolodPrivacyPolicy() {
  return (
    <LegalLayout title="Ekolod Privacy Policy" lastUpdated="November 3, 2026">
      <section>
        <p>
          Ekolod (&ldquo;Ekolod&rdquo;, the &ldquo;App&rdquo;) is developed by{" "}
          <strong className="text-white">AVDALYAN TECH LLC</strong> (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;), a U.S. limited liability company. This policy explains
          what information Ekolod handles.
        </p>
        <p>
          <strong className="text-white">
            The short version: Ekolod does not collect any personal data.
          </strong>{" "}
          There are no accounts, no ads, no analytics and no tracking. The App
          does not send any information about you to us or to anyone else.
        </p>
      </section>

      <section>
        <h2>1. Information stored only on your device</h2>
        <p>
          Ekolod keeps two things on your iPhone so the game remembers where
          you are:
        </p>
        <ul>
          <li>Your best star rating for each level</li>
          <li>Whether background music is on or off</li>
        </ul>
        <p>
          This information never leaves your device. Deleting the App deletes
          it.
        </p>
      </section>

      <section>
        <h2>2. Purchases</h2>
        <p>
          Unlocking the full game is a one-time purchase handled entirely by
          Apple. We never receive your name, Apple ID or payment details.
          Apple confirms the purchase directly on your device.
        </p>
      </section>

      <section>
        <h2>3. Your rights</h2>
        <p>
          Because Ekolod collects no personal data, there is nothing for us to
          access, correct or delete. To remove the game progress stored on
          your device, delete the App. If you are in the EU/EEA, you have the
          right to lodge a complaint with your local data protection authority
          (in Sweden, the{" "}
          <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer">
            Integritetsskyddsmyndigheten (IMY)
          </a>
          ).
        </p>
      </section>

      <section>
        <h2>4. Children</h2>
        <p>
          Ekolod is suitable for all ages. Because the App collects no personal
          data, it collects none from children either.
        </p>
      </section>

      <section>
        <h2>5. Changes to this policy</h2>
        <p>
          If Ekolod changes in a way that affects this policy, we will update
          it and the &ldquo;Last updated&rdquo; date above.
        </p>
      </section>

      <section>
        <h2>6. Contact</h2>
        <p>
          AVDALYAN TECH LLC
          <br />
          <a href="mailto:hello@avdalyan.world">hello@avdalyan.world</a>
        </p>
      </section>
    </LegalLayout>
  );
}
