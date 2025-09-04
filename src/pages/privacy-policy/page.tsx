import Home_Button from "../../components/Comum_components/HomeButton";

export default function PrivacyPolicy() {
  return (
    <main>
      <Home_Button />
      <Policy_Text />
    </main>
  );
}

function Policy_Text() {
  return (
    <main className="px-6 pb-12 pt-32 text-[#303030] bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[var(--primaryL)] mb-6">
          Privacy Policy
        </h1>
        <p className="mb-8">Last Updated: 07/09/2025</p>

        <section className="mb-10">
          <p>
            This Privacy Policy governs the manner in which Leveling Consulting
            Services collects, uses, maintains, and discloses information
            collected from you through our website and any associated digital
            channels or contact points.
          </p>
          <p className="mt-4">
            We recognize the importance of protecting your personal data and are
            fully committed to ensuring its confidentiality, integrity, and
            availability in compliance with Law No. 13.709/2018 – the General
            Data Protection Law (LGPD) of Brazil.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            1. Data Controller
          </h2>
          <p>Leveling Automation Consulting Services</p>
          <p>Operating in:</p>
          <ul className="list-disc pl-5">
            <li>United States – Florida</li>
            <li>Brazil – São Paulo</li>
          </ul>
          <p className="mt-2">
            Contact email:{" "}
            <a href="mailto:DiretoriaLeveling@gmail.com" className="underline">
              DiretoriaLeveling@gmail.com
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            2. Information We Collect
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Identification Data:</strong> Full name, business name, or
              legal representative (if applicable)
            </li>
            <li>
              <strong>Contact Data:</strong> Telephone number, email address,
              WhatsApp ID
            </li>
            <li>
              <strong>Behavioral Data:</strong> Volume of client contact per
              hour (non-personal)
            </li>
            <li>
              <strong>Other Data:</strong> Any information voluntarily submitted
              via forms or direct messaging
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            3. Methods of Data Collection
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Website Forms:</strong> Submission of contact information
            </li>
            <li>
              <strong>Direct Contact:</strong> WhatsApp buttons or manual
              communication initiated by the user
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            4. Purpose and Legal Basis for Processing
          </h2>
          <p className="mb-2">
            The data collected is processed for the following purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>To establish and maintain communication</li>
            <li>To identify users who contact us</li>
            <li>To respond to requests and improve service quality</li>
          </ul>
          <p className="mt-4">Legal bases under LGPD:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Consent:</strong> Voluntarily provided data via the
              website
            </li>
            <li>
              <strong>Legitimate Interest:</strong> Responding to inquiries and
              providing services
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            5. Data Sharing and Disclosure
          </h2>
          <p>
            We do not share or disclose your data, except in the following
            cases:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>When required by law or legal process</li>
            <li>To enforce our legal rights</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            6. Cookies and Tracking Technologies
          </h2>
          <p>
            Our website does <strong>not</strong> use cookies, beacons, or other
            tracking technologies.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            7. Data Storage and Security
          </h2>
          <p>
            All personal data is securely stored and managed by Leveling. We
            implement measures to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Prevent unauthorized access or disclosure</li>
            <li>Ensure confidentiality, integrity, and availability</li>
            <li>Use encryption, access controls, and redundancy protocols</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            8. Data Retention
          </h2>
          <p>Your data is stored indefinitely or until:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>It is no longer necessary for its original purpose</li>
            <li>You request deletion or revoke your consent</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            9. Data Subject Rights
          </h2>
          <p>Under the LGPD, you may:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Confirm data processing</li>
            <li>Access your data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of consent-based data</li>
            <li>Know with whom your data is shared (if applicable)</li>
            <li>Revoke your consent at any time</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, contact us at{" "}
            <a href="mailto:DiretoriaLeveling@gmail.com" className="underline">
              DiretoriaLeveling@gmail.com
            </a>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            10. International Processing and Jurisdiction
          </h2>
          <p>
            Although Leveling operates in both the U.S. and Brazil, all data is
            processed according to Brazilian LGPD standards. By using our
            website, you agree to this jurisdiction.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            11. Policy Updates
          </h2>
          <p>
            We may update this Privacy Policy at any time. Changes take effect
            upon publication. We recommend reviewing this page regularly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            12. Contact Information
          </h2>
          <p>
            For privacy questions or to exercise your rights, contact us at:{" "}
            <a href="mailto:DiretoriaLeveling@gmail.com" className="underline">
              DiretoriaLeveling@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
