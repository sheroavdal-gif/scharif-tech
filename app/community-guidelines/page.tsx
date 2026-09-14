import LegalLayout from "../components/LegalLayout";

export const metadata = {
  title: "Community Guidelines — Viska",
};

export default function CommunityGuidelines() {
  return (
    <LegalLayout
      title="Viska Community Guidelines"
      lastUpdated="September 14, 2026"
    >
      <section>
        <p>
          Viska's one-to-one and group messages are end-to-end encrypted,
          which means we cannot read them and cannot proactively scan your
          private conversations. That makes it even more important that
          everyone using Viska follows these guidelines, and that we give
          you real tools — blocking and reporting — to protect yourself and
          others.
        </p>
        <p>
          These guidelines apply to everything on Viska: private messages,
          group chats, and public Channels. Channels are additionally
          subject to direct review by us, since Channel content is public
          and not encrypted.
        </p>
      </section>

      <section>
        <h2>1. Not allowed on Viska</h2>

        <h3>Threats &amp; violence</h3>
        <p>
          Threatening, encouraging, or organizing violence or physical harm
          against any person or group.
        </p>

        <h3>Harassment &amp; abuse</h3>
        <p>
          Bullying, sustained harassment, stalking, or publishing someone's
          private information without their consent ("doxxing").
        </p>

        <h3>Sexual content involving minors</h3>
        <p>
          Zero tolerance. Any content that sexually exploits or endangers
          minors is strictly prohibited and will be removed and reported to
          the National Center for Missing &amp; Exploited Children (NCMEC)
          and/or law enforcement wherever we are able to do so.
        </p>
        <p>Additionally, unlawful sexual content of any kind is prohibited, including non-consensual intimate imagery.</p>

        <h3>Fraud &amp; scams</h3>
        <p>
          Phishing, financial scams, impersonating another person or
          organization to deceive others, or other fraudulent activity.
        </p>

        <h3>Spam</h3>
        <p>
          Unsolicited bulk messaging, automated abuse of the messaging or
          Channels systems, or using Viska to distribute spam.
        </p>

        <h3>Illegal content or activity</h3>
        <p>
          Using Viska to facilitate illegal activity, including but not
          limited to the sale of illegal goods, weapons, or drugs, or
          content that otherwise violates applicable law.
        </p>

        <h3>Hate</h3>
        <p>
          Content that attacks, demeans, or incites hatred against people
          based on race, ethnicity, religion, gender, sexual orientation,
          disability, or similar protected characteristics.
        </p>
      </section>

      <section>
        <h2>2. Reporting &amp; blocking</h2>
        <p>
          Every chat in Viska has a way to report a message or a user, and to
          block a user outright so they can no longer reach you. Reporting a
          message shares that message's content (as decrypted on your
          device) and your stated reason with us for review — this is the
          only way reported private content ever becomes visible to us.
          Blocking takes effect immediately and doesn't require anyone's
          involvement.
        </p>
      </section>

      <section>
        <h2>3. Channels</h2>
        <p>
          Channels are public and not end-to-end encrypted, so we can and do
          review reported Channel content directly. Channel owners are
          responsible for what they post; we may remove individual posts,
          entire channels, or restrict accounts that repeatedly violate
          these guidelines.
        </p>
      </section>

      <section>
        <h2>4. Enforcement</h2>
        <p>
          Depending on severity, we may warn an account, remove specific
          content (for Channels), or suspend or permanently terminate an
          account. For severe violations — especially anything endangering
          a child, or threats of violence — we may act immediately without
          prior warning, and refer the matter to law enforcement where
          legally required and where we have relevant information available
          to share.
        </p>
      </section>

      <section>
        <h2>5. Appeals</h2>
        <p>
          If you believe an enforcement action was made in error, contact us
          at hello@avdalyan.world and we'll review it.
        </p>
      </section>

      <section>
        <h2>6. Changes</h2>
        <p>
          We may update these guidelines as Viska grows. We'll update the
          "Last updated" date above.
        </p>
      </section>
    </LegalLayout>
  );
}
