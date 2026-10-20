import LegalLayout from "../../components/LegalLayout";

export const metadata = {
  title: "Privacy Policy — Kelvix",
};

export default function KelvixPrivacyPolicy() {
  return (
    <LegalLayout title="Kelvix Privacy Policy" lastUpdated="October 20, 2026">
      <section>
        <p>
          Kelvix (&ldquo;Kelvix&rdquo;, the &ldquo;App&rdquo;) is developed and operated by{" "}
          <strong className="text-white">AVDALYAN TECH LLC</strong> (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;), a U.S. limited liability company, which is the controller of
          the personal data described in this policy. This policy explains
          what information Kelvix collects, why, and what control you have
          over it.
        </p>
        <p>
          Kelvix has no user accounts. You never give us your name, email
          address or phone number, and we show no ads and use no analytics or
          tracking tools.
        </p>
      </section>

      <section>
        <h2>1. Information stored only on your device</h2>
        <p>
          The following stays on your iPhone and is never sent to our
          servers:
        </p>
        <ul>
          <li>
            Your profile: allergens and sensitivities to avoid, halal/kosher
            preferences and your diet goal
          </li>
          <li>Your scan history, favorites and shopping list</li>
        </ul>
        <p>
          The one exception is your diet goal, which is sent along with a
          question you ask Kelvix Coach so the answer can take it into account
          (see section 2).
        </p>
      </section>

      <section>
        <h2>2. Information processed on our servers</h2>

        <h3>Anonymous device identifier</h3>
        <p>
          The app creates a random identifier when it is installed. It is not
          linked to your name, Apple ID or any other identity. We use it to
          apply daily usage limits, to let you see products you added while
          they wait for review, and to prevent abuse of product contributions
          and reports.
        </p>

        <h3>IP address</h3>
        <p>
          Like any internet service, our servers receive your IP address with
          each request. We use it only for security and to apply daily usage
          limits, and we do not use it to identify or locate you.
        </p>

        <h3>Product lookups</h3>
        <p>
          When you scan or search for a barcode, the barcode is sent to our
          servers to fetch the product&rsquo;s information. If we don&rsquo;t have the
          product yet, we look it up in the{" "}
          <a
            href="https://world.openfoodfacts.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Food Facts
          </a>{" "}
          public database. Only the barcode is shared with them, nothing about
          you.
        </p>

        <h3>Kelvix Coach</h3>
        <p>
          When you ask Kelvix Coach a question, your question, your diet goal
          and (if you asked about a specific product) that product&rsquo;s data are
          sent to our servers and to our AI provider, Anthropic, to generate
          the answer. We do not store your questions or the answers. Please
          avoid including personal details, such as your name or medical
          history, in your questions.
        </p>

        <h3>Label photos and product contributions</h3>
        <p>
          When you add a product Kelvix doesn&rsquo;t know yet, the photos you take
          of its packaging are sent to our servers and to Anthropic to read
          the label. We do not store the photos. We do store the text values
          read from them (such as ingredients and nutrition values) together
          with your device identifier, so that the values you then save can
          be checked against the package. Products you add, and the values in
          them, become part of Kelvix&rsquo;s product database and may be shown to
          other users once they pass review.
        </p>

        <h3>Reports</h3>
        <p>
          If you report a problem with a product, we store the reason, any
          comment you write and your device identifier, so that we can review
          the report and prevent abuse.
        </p>

        <h3>Apple Health</h3>
        <p>
          If you choose to use &ldquo;Log to Health&rdquo;, Kelvix writes nutrition values
          to Apple Health on your device. Kelvix only writes to Health and
          never reads any of your Health data. Health data is never sent to
          our servers or used for advertising.
        </p>
      </section>

      <section>
        <h2>3. How long we keep information</h2>
        <ul>
          <li>Usage-limit counters (device identifier and IP address): 2 days</li>
          <li>Label photos and Coach questions: not stored by us</li>
          <li>Text read from label photos: 7 days</li>
          <li>
            Reports: until they have been handled; handled reports are deleted
            once they are 30 days old
          </li>
          <li>
            Products you added: for as long as they are part of the product
            database
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Why we process your information</h2>
        <p>
          We process the information above to provide the features you use
          (product lookups, Coach, label reading and contributions), and on
          the basis of our legitimate interest in keeping Kelvix secure, fair
          to use and free of abuse. We never sell your information or share it
          for advertising.
        </p>
      </section>

      <section>
        <h2>5. Service providers</h2>
        <p>We use the following providers to run Kelvix:</p>
        <ul>
          <li>Cloud hosting and database (servers in Sweden)</li>
          <li>Cloud storage for public product photos</li>
          <li>Anthropic: AI for Kelvix Coach and label reading</li>
          <li>Open Food Facts: public product database (barcode only)</li>
        </ul>
        <p>
          Some of these providers are based in the United States, so your
          information may be processed there. Where required, we rely on
          appropriate safeguards such as the EU Standard Contractual Clauses.
        </p>
      </section>

      <section>
        <h2>6. Your rights</h2>
        <p>
          Depending on where you live, you may have rights to access,
          correct, delete, restrict, or receive a copy of your personal data,
          and to object to certain processing. Because Kelvix has no accounts,
          the easiest way to remove the data stored on your device is to
          delete the app. For data on our servers, contact us at
          hello@avdalyan.world. If you are in the EU/EEA, you also have the
          right to lodge a complaint with your local data protection
          authority (in Sweden, the{" "}
          <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer">
            Integritetsskyddsmyndigheten (IMY)
          </a>
          ).
        </p>
      </section>

      <section>
        <h2>7. Not medical advice</h2>
        <p>
          Kelvix&rsquo;s scores, warnings and Coach answers are general information,
          not medical or nutritional advice. Always check the product&rsquo;s
          packaging, and talk to a healthcare professional about allergies or
          medical conditions.
        </p>
      </section>

      <section>
        <h2>8. Children</h2>
        <p>
          Kelvix is not directed at children under 13, and we do not knowingly
          collect data from children under that age.
        </p>
      </section>

      <section>
        <h2>9. Changes to this policy</h2>
        <p>
          We may update this policy as Kelvix changes. We will update the
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
