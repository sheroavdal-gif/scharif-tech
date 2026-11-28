import LegalLayout from "../../components/LegalLayout";

export const metadata = {
  title: "Terms of Use — 13VPN",
};

export default function VpnTerms() {
  return (
    <LegalLayout title="13VPN Terms of Use" lastUpdated="November 28, 2026">
      <section>
        <p>
          These Terms of Use (&ldquo;Terms&rdquo;) are an agreement between you and{" "}
          <strong className="text-white">AVDALYAN TECH LLC</strong>, a U.S. limited
          liability company (&ldquo;we&rdquo;, &ldquo;us&rdquo;), governing your use of
          13VPN (the &ldquo;Service&rdquo;). By using 13VPN you agree to these Terms and
          to our <a href="/13vpn/privacy">Privacy Policy</a>. If you use 13VPN with an
          App Store subscription, Apple&rsquo;s{" "}
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
            Licensed Application End User License Agreement
          </a>{" "}
          also applies.
        </p>
      </section>

      <section>
        <h2>1. The Service</h2>
        <p>
          13VPN is a virtual private network that encrypts your internet traffic
          between your device and our servers. We work to keep the Service available
          and fast, but we do not guarantee that it will be uninterrupted or available
          in every country, on every network, or at every moment.
        </p>
      </section>

      <section>
        <h2>2. Access</h2>
        <ul>
          <li>
            <strong className="text-white">App Store subscription.</strong> Monthly and
            yearly subscriptions are sold and billed by Apple. They renew automatically
            unless cancelled at least 24 hours before the end of the current period. A
            free trial, if offered, converts into a paid subscription unless cancelled
            before it ends. Manage or cancel in Settings &gt; your name &gt;
            Subscriptions. Refunds are handled by Apple under its policies.
          </li>
          <li>
            <strong className="text-white">Access code.</strong> An access code works on
            one phone, is locked to the first phone that uses it, and is valid for the
            stated number of full days counted from its first use. A code cannot be
            moved to another phone. Codes are sold by independent resellers; questions
            about a purchase should go to the seller.
          </li>
          <li>
            Each subscription or code is for one person. Sharing it or using it on more
            devices than it allows may pause it.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Acceptable use</h2>
        <p>You agree not to use 13VPN to:</p>
        <ul>
          <li>break any law that applies to you, or help anyone else do so;</li>
          <li>
            create, access or share child sexual abuse material, or exploit or harm
            minors in any way;
          </li>
          <li>send spam, malware or phishing, or attack, scan or disrupt other systems or networks;</li>
          <li>infringe the intellectual property or privacy of others;</li>
          <li>share files over peer-to-peer networks such as BitTorrent (blocked by the Service);</li>
          <li>resell or redistribute the Service without our written permission;</li>
          <li>interfere with or overload our servers.</li>
        </ul>
        <p>
          You are responsible for knowing and following the laws of the country you
          are in when you use 13VPN.
        </p>
      </section>

      <section>
        <h2>4. Suspension</h2>
        <p>
          We may pause or end access tied to a subscription or code that is used in
          breach of these Terms, without refund except where the law requires
          otherwise.
        </p>
      </section>

      <section>
        <h2>5. Disclaimer and limitation of liability</h2>
        <p>
          The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;.
          To the fullest extent permitted by law, we disclaim all warranties, express
          or implied, and are not liable for any indirect, incidental or consequential
          damages, or for any loss arising from your use of, or inability to use, the
          Service. Our total liability is limited to the amount you paid for the
          Service in the 12 months before the claim. Nothing in these Terms limits
          rights you have under the consumer laws of your country that cannot be
          limited.
        </p>
      </section>

      <section>
        <h2>6. Changes</h2>
        <p>
          We may update these Terms. We will change the &ldquo;Last updated&rdquo; date
          and, for material changes, tell you in the App. Continuing to use 13VPN after
          a change means you accept the updated Terms.
        </p>
      </section>

      <section>
        <h2>7. Governing law</h2>
        <p>
          These Terms are governed by the laws of the State of Wyoming, United States,
          without regard to its conflict-of-law rules, except where the law of your
          country requires otherwise.
        </p>
      </section>

      <section>
        <h2>8. Contact</h2>
        <p>
          AVDALYAN TECH LLC
          <br />
          <a href="mailto:hello@avdalyan.world">hello@avdalyan.world</a>
        </p>
      </section>
    </LegalLayout>
  );
}
