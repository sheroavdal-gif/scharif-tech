import LegalLayout from "../components/LegalLayout";

export const metadata = {
  title: "Privacy Policy — Viska",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Viska Privacy Policy" lastUpdated="September 14, 2026">
      <section>
        <p>
          Viska ("Viska", "we", "us") is developed and operated by{" "}
          <strong className="text-white">Avdalyan Tech LLC</strong>, a U.S.
          limited liability company. This policy explains what
          information Viska collects, why, and what control you have over it.
        </p>
        <p>
          Viska is an end-to-end encrypted messenger. Our guiding principle is
          that we should collect as little as possible, and be unable to read
          your private messages at all. The sections below explain exactly
          where that principle applies and where it has necessary
          exceptions (like public channels and content you actively report).
        </p>
      </section>

      <section>
        <h2>1. Information we collect</h2>

        <h3>Account &amp; device information</h3>
        <p>
          Creating a Viska account does not require a phone number or email
          address. Instead, your account is a cryptographic identity created
          on your device. We store:
        </p>
        <ul>
          <li>A device identifier generated on your device</li>
          <li>
            Public encryption keys (Curve25519/Ed25519) used to establish
            encrypted sessions with other users
          </li>
          <li>
            An optional username, if you choose to set one and make yourself
            discoverable to other users
          </li>
          <li>The date your account was created</li>
        </ul>

        <h3>Message content</h3>
        <p>
          One-to-one and group messages are end-to-end encrypted on your
          device before they ever reach our servers. Our server only ever
          sees an opaque, encrypted "envelope" — it cannot decrypt or read
          your message content. Encrypted messages are held only long enough
          to be delivered to the recipient device and are then deleted; if a
          message can never be decrypted by the recipient (for example after
          a lost device), it is deleted as undeliverable rather than kept
          indefinitely.
        </p>

        <h3>Media attachments</h3>
        <p>
          Photos, videos, and files you send are encrypted on your device
          before upload. Our storage provider holds only encrypted bytes it
          cannot read; the decryption key travels only inside the encrypted
          message sent to the recipient.
        </p>

        <h3>Channels (public broadcast feature)</h3>
        <p>
          Channels are a public broadcast feature and are{" "}
          <strong className="text-white">not end-to-end encrypted</strong>.
          If you create or post to a channel, the channel's title,
          description, posts, and media are stored in plaintext and are
          visible to anyone who follows that channel. Do not post anything to
          a channel that you would not want to be public.
        </p>

        <h3>Reports</h3>
        <p>
          If you report a message or user for violating our{" "}
          <a href="/community-guidelines">Community Guidelines</a>, the
          content you are reporting (already decrypted on your device) is
          sent to us along with your stated reason, so we can review it. This
          is the one situation, outside of channels, where message content
          you choose to share becomes visible to us.
        </p>

        <h3>Account recovery backups</h3>
        <p>
          If you choose to enable account recovery, a backup of your account
          data is encrypted on your device using a recovery code that only
          you have. We store only the resulting ciphertext and cannot read
          it, and the backup is not linked to your device identity in our
          systems.
        </p>

        <h3>Technical &amp; log data</h3>
        <p>
          Like any online service, our infrastructure necessarily processes
          IP addresses and standard request metadata (timestamps, endpoint
          called, response codes) to operate, secure, and rate-limit the
          service. This is handled by our infrastructure providers as part of
          normal operation and is not compiled into a profile about you.
        </p>

        <h3>Push notification tokens</h3>
        <p>
          Viska can optionally register a device token with Apple to wake the
          app for new messages. This capability is not currently active in
          the shipping app; when it is enabled, the token is used solely to
          request a silent wake-up and is never used for marketing.
        </p>
      </section>

      <section>
        <h2>2. What we don't do</h2>
        <ul>
          <li>We do not sell your data to anyone.</li>
          <li>We do not show ads or use advertising trackers.</li>
          <li>
            We cannot read your one-to-one or group message content — it is
            end-to-end encrypted and we do not hold the keys.
          </li>
          <li>
            We do not require a phone number, email, or real name to use
            Viska.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Why we process this information</h2>
        <p>
          We process account and device data to provide the service itself
          (delivering your messages, syncing your channels, letting you
          recover your account) — this is necessary to perform our
          contract with you as a user of Viska. We process technical/log
          data and reports based on our legitimate interest in keeping the
          service secure, reliable, and free of abuse. Optional features
          (channels, account backup, discoverable usernames) are processed
          based on your choice to use them.
        </p>
      </section>

      <section>
        <h2>4. Where your data is stored</h2>
        <p>
          Our primary database runs on infrastructure located in Stockholm,
          Sweden (EU). Encrypted media attachments are stored with a
          globally-distributed object storage provider, which may replicate
          encrypted data across multiple regions for reliability — because
          this data is encrypted before it ever reaches our storage
          provider, it is not readable regardless of where it is physically
          stored.
        </p>
      </section>

      <section>
        <h2>5. Data retention</h2>
        <ul>
          <li>
            Encrypted messages are deleted from our servers once delivered
            (or once confirmed undeliverable).
          </li>
          <li>
            Account data (device identifier, keys, username) is deleted
            immediately when you delete your account from within the app.
          </li>
          <li>
            Reports are retained as needed for moderation and legal
            compliance purposes.
          </li>
          <li>
            Encrypted media attachments you send are deleted from storage
            when you delete your account. Until then, they may persist in
            storage after delivery, referenced only by an unguessable
            identifier.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Your rights</h2>
        <p>
          Depending on where you live, you may have rights to access,
          correct, delete, restrict, or receive a copy of your personal
          data, and to object to certain processing. You can delete your
          account and its associated data at any time directly from Viska's
          settings. For anything else, contact us at hello@avdalyan.world. If
          you are in the EU/EEA, you also have the right to lodge a
          complaint with your local data protection authority (in Sweden,
          the{" "}
          <a
            href="https://www.imy.se"
            target="_blank"
            rel="noopener noreferrer"
          >
            Integritetsskyddsmyndigheten (IMY)
          </a>
          ).
        </p>
      </section>

      <section>
        <h2>7. Children</h2>
        <p>
          Viska is not directed at children under 13, and we do not knowingly
          collect data from children under that age. If you believe a child
          has created an account, contact us and we will delete it.
        </p>
      </section>

      <section>
        <h2>8. Third-party service providers</h2>
        <p>
          We use infrastructure and storage providers (currently Fly.io for
          hosting and database infrastructure, and Tigris for encrypted
          object storage) to operate Viska, and Apple for optional push
          notification delivery. These providers process data on our behalf
          under their own security commitments and do not have the ability
          to read your encrypted message content.
        </p>
      </section>

      <section>
        <h2>9. Changes to this policy</h2>
        <p>
          We may update this policy as Viska changes. We will update the
          "Last updated" date above, and post material changes within the
          app.
        </p>
      </section>

      <section>
        <h2>10. Contact</h2>
        <p>
          Avdalyan Tech LLC — <a href="mailto:hello@avdalyan.world">hello@avdalyan.world</a>
        </p>
      </section>
    </LegalLayout>
  );
}
