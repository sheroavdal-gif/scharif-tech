import LegalLayout from "../../components/LegalLayout";

export const metadata = {
  title: "Privacy Policy — 13VPN",
};

export default function VpnPrivacyPolicy() {
  return (
    <LegalLayout title="13VPN Privacy Policy" lastUpdated="November 28, 2026">
      <section>
        <p>
          13VPN (&ldquo;13VPN&rdquo;, the &ldquo;App&rdquo;, the &ldquo;Service&rdquo;) is
          developed and operated by{" "}
          <strong className="text-white">AVDALYAN TECH LLC</strong> (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;), a U.S. limited liability company. 13VPN is a virtual private
          network. It is built to collect as little as possible: there are no user
          accounts, and we do not log what you do.
        </p>
      </section>

      <section>
        <h2>1. What we never collect</h2>
        <p>We do not collect, log or store:</p>
        <ul>
          <li>your name, email address, phone number, contacts or location;</li>
          <li>the websites, apps or services you use through 13VPN, or the content of your traffic;</li>
          <li>your DNS requests;</li>
          <li>the IP address you connect from;</li>
          <li>when you connect or disconnect, for how long, or how much data you use.</li>
        </ul>
        <p>
          Our servers are configured with logging turned off and keep their system
          logs in memory only, so they are erased on restart.
        </p>
      </section>

      <section>
        <h2>2. What stays on your phone</h2>
        <p>
          Your 13VPN access code (if you use one) and your settings are stored only on
          your iPhone, in its secure storage, and are not included in backups. Your
          access code is never sent to us.
        </p>
      </section>

      <section>
        <h2>3. What our servers keep, and why</h2>
        <p>
          To let your phone in and to keep each code or subscription to the number of
          devices it is sold for, our servers keep only:
        </p>
        <ul>
          <li>
            an anonymous identifier derived from your access code or subscription,
            from which the code itself cannot be recovered;
          </li>
          <li>a random identifier created by the App that ties a code or subscription to one phone;</li>
          <li>the date (not the time) a code was first used, so its validity period can be counted;</li>
          <li>
            for App Store subscriptions: Apple&rsquo;s transaction number and the date the
            subscription ends, as received from Apple;
          </li>
          <li>
            while you are connected, a count of devices using the same code, held in
            memory only and never written to disk.
          </li>
        </ul>
        <p>
          None of this identifies you or records your activity. Anonymous identifiers
          and dates for codes and subscriptions are deleted once they have expired and
          are no longer needed.
        </p>
      </section>

      <section>
        <h2>4. Payments</h2>
        <p>
          Subscriptions are sold and billed by Apple. We never receive your name,
          Apple ID or payment details. To manage or cancel a subscription, go to
          Settings &gt; your name &gt; Subscriptions on your iPhone. Access codes are
          sold by independent resellers; we do not receive any information about who
          bought a code.
        </p>
      </section>

      <section>
        <h2>5. Server list</h2>
        <p>
          The App downloads a signed list of our servers from public mirrors, and
          measures how fast each server answers. These requests contain no
          information about you.
        </p>
      </section>

      <section>
        <h2>6. We never sell or share your data</h2>
        <p>
          We do not sell, rent, share or disclose any data to third parties for any
          purpose, and we do not use it for advertising. 13VPN contains no ads,
          analytics or tracking tools. Our servers are hosted by data center
          providers that run the machines but do not receive any user data from us.
        </p>
      </section>

      <section>
        <h2>7. Requests from authorities</h2>
        <p>
          Because we do not keep records of your activity or identity, we have no such
          information to hand over.
        </p>
      </section>

      <section>
        <h2>8. Your choices</h2>
        <p>
          You can stop using 13VPN at any time and delete the App, which removes your
          code and settings from your phone. Because we hold nothing that identifies
          you, there is no account to delete. If you have questions about the
          anonymous data described above, contact us.
        </p>
      </section>

      <section>
        <h2>9. Children</h2>
        <p>
          13VPN is rated 4+ on the App Store and can be used by people of all ages.
          Because 13VPN collects no personal data from anyone, it collects none from
          children either.
        </p>
      </section>

      <section>
        <h2>10. Changes to this policy</h2>
        <p>
          We may update this policy as 13VPN changes. We will update the &ldquo;Last
          updated&rdquo; date above and post material changes within the App.
        </p>
      </section>

      <section>
        <h2>11. Contact</h2>
        <p>
          AVDALYAN TECH LLC
          <br />
          <a href="mailto:hello@avdalyan.world">hello@avdalyan.world</a>
        </p>
      </section>
    </LegalLayout>
  );
}
