import LegalLayout from "../components/LegalLayout";

export const metadata = {
  title: "Terms of Use — Viska",
};

export default function Terms() {
  return (
    <LegalLayout title="Viska Terms of Use" lastUpdated="September 14, 2026">
      <section>
        <p>
          These Terms of Use ("Terms") are an agreement between you and{" "}
          <strong className="text-white">Avdalyan Tech LLC</strong>, a Wyoming,
          USA limited liability company ("Avdalyan Tech", "we", "us"),
          governing your use of the Viska application ("Viska", the
          "Service"). By creating an account or using Viska, you agree to
          these Terms and to our{" "}
          <a href="/privacy">Privacy Policy</a> and{" "}
          <a href="/community-guidelines">Community Guidelines</a>, which are
          incorporated by reference.
        </p>
      </section>

      <section>
        <h2>1. Eligibility</h2>
        <p>
          You must be at least 13 years old to use Viska, and old enough to
          form a binding contract in your jurisdiction. By using Viska, you
          confirm you meet these requirements.
        </p>
      </section>

      <section>
        <h2>2. Your account</h2>
        <p>
          Viska accounts are based on cryptographic keys generated and stored
          on your device, not on a phone number or email/password. You are
          responsible for keeping your device and any account recovery code
          secure. Because messages are end-to-end encrypted, if you lose
          access to your device without a working recovery code, we cannot
          recover your account, your contacts, or your message history —
          there is no "forgot password" flow that restores encrypted content
          on our end.
        </p>
      </section>

      <section>
        <h2>3. Acceptable use</h2>
        <p>
          You agree to use Viska in line with our{" "}
          <a href="/community-guidelines">Community Guidelines</a> and all
          applicable laws. Without limiting those Guidelines, you agree not
          to use Viska to send unlawful, abusive, or fraudulent content,
          attempt to interfere with or disrupt the Service, reverse-engineer
          the Service beyond what's permitted by law, or use the Service to
          harm minors in any way.
        </p>
      </section>

      <section>
        <h2>4. Your content</h2>
        <p>
          You retain ownership of the content you send and post through
          Viska. For end-to-end encrypted messages, we never receive
          readable content and grant ourselves no rights to it. For content
          you choose to post publicly through Channels, you grant Avdalyan
          Tech a limited license to host, store, and transmit that content
          solely to operate the Channels feature (for example, delivering it
          to followers). You are solely responsible for content you post to
          Channels, which is public and not encrypted.
        </p>
      </section>

      <section>
        <h2>5. Reporting &amp; enforcement</h2>
        <p>
          If you or others report content or an account under our Community
          Guidelines, we may review the reported content (which, for
          encrypted chats, is only ever what the reporter's device shares
          with us) and take action, including warning, restricting, or
          permanently terminating an account, and — where we are legally
          required to and where we have relevant information available to
          us — cooperating with law enforcement.
        </p>
      </section>

      <section>
        <h2>6. Termination</h2>
        <p>
          You may stop using Viska and permanently delete your account at
          any time from within the app; this immediately deletes your
          account data as described in our Privacy Policy. We may suspend or
          terminate your access if you violate these Terms or our Community
          Guidelines, or if required by law.
        </p>
      </section>

      <section>
        <h2>7. Intellectual property</h2>
        <p>
          Viska's name, logo, and underlying software (excluding your own
          content) are owned by Avdalyan Tech LLC or its licensors. These
          Terms don't grant you any rights to our trademarks or branding
          beyond using the app as intended.
        </p>
      </section>

      <section>
        <h2>8. Disclaimers</h2>
        <p>
          Viska is provided "as is" and "as available." While we use
          industry-standard end-to-end encryption (Olm/Megolm) and take
          security seriously, no software or communications service can
          guarantee absolute security, uninterrupted availability, or
          error-free operation, and we disclaim all warranties to the
          fullest extent permitted by law.
        </p>
      </section>

      <section>
        <h2>9. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Avdalyan Tech LLC will not
          be liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of data, messages, or goodwill,
          arising from your use of Viska, including loss of encrypted
          content that we have no ability to recover.
        </p>
      </section>

      <section>
        <h2>10. Changes to these Terms</h2>
        <p>
          We may update these Terms as Viska evolves. We'll update the "Last
          updated" date above and, for material changes, notify you within
          the app.
        </p>
      </section>

      <section>
        <h2>11. Governing law</h2>
        <p>
          These Terms are governed by the laws of the State of Wyoming, USA,
          without regard to conflict-of-law principles, without prejudice to
          any mandatory consumer-protection rights you have under the laws
          of the country where you live.
        </p>
      </section>

      <section>
        <h2>12. Contact</h2>
        <p>
          Avdalyan Tech LLC — <a href="mailto:hello@avdalyan.world">hello@avdalyan.world</a>
        </p>
      </section>
    </LegalLayout>
  );
}
