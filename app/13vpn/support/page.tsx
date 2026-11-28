import LegalLayout from "../../components/LegalLayout";

export const metadata = {
  title: "Support — 13VPN",
};

export default function VpnSupport() {
  return (
    <LegalLayout title="13VPN Support" lastUpdated="November 28, 2026">
      <section>
        <p>
          Need help with 13VPN? Write to us at{" "}
          <a href="mailto:hello@avdalyan.world">hello@avdalyan.world</a> and we&rsquo;ll get
          back to you. Please don&rsquo;t send your access code by email.
        </p>
      </section>

      <section>
        <h2>How do I connect?</h2>
        <p>
          Open 13VPN and tap the large button. The first time, iOS asks to add a VPN
          configuration: tap Allow. 13VPN picks the fastest server for you; you can
          choose another under Servers.
        </p>
      </section>

      <section>
        <h2>What is the kill switch?</h2>
        <p>
          With the kill switch on (Account &gt; Kill switch), nothing leaves your phone
          outside 13VPN, even if the connection drops; 13VPN reconnects by itself. While
          it reconnects you may briefly have no internet. Turning 13VPN off with the big
          button turns everything back to normal.
        </p>
      </section>

      <section>
        <h2>What is Smart mode?</h2>
        <p>
          Smart mode lets sites in a country you choose (for example banks or
          government services) open directly, while everything else stays protected by
          13VPN. Turn it off with the button under the country.
        </p>
      </section>

      <section>
        <h2>The connection is slow or a site won&rsquo;t load</h2>
        <ul>
          <li>Try another server under Servers, or pull the list down to refresh it.</li>
          <li>Turn 13VPN off and on again.</li>
          <li>Check that the same network works without 13VPN; public Wi-Fi is often slow.</li>
        </ul>
      </section>

      <section>
        <h2>Subscriptions</h2>
        <p>
          Subscriptions are handled by Apple. To change or cancel, go to Settings &gt;
          your name &gt; Subscriptions on your iPhone, or tap Manage subscription in
          13VPN under Account. To use your subscription after reinstalling, tap Restore
          purchases. Refunds are requested from Apple at{" "}
          <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
        </p>
      </section>

      <section>
        <h2>Access codes</h2>
        <p>
          An access code works on one phone and is locked to the first phone that uses
          it. Its days are counted from the first time it connects. If the app says a
          code is already in use on another phone, that code has been used on a different
          device and can&rsquo;t be moved.
        </p>
      </section>

      <section>
        <h2>Changing the app&rsquo;s language</h2>
        <p>
          Changing 13VPN&rsquo;s language (Account &gt; Language) restarts the app and
          disconnects the VPN. Turn it on again afterwards.
        </p>
      </section>

      <section>
        <h2>Privacy</h2>
        <p>
          13VPN keeps no logs of what you do. Read the full{" "}
          <a href="/13vpn/privacy">Privacy Policy</a> and{" "}
          <a href="/13vpn/terms">Terms of Use</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
