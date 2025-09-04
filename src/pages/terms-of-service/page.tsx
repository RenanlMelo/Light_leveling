import Home_Button from "../../components/Comum_components/HomeButton";

export default function TermsOfService() {
  return (
    <main>
      <Home_Button />
      <Terms_Text />
    </main>
  );
}

function Terms_Text() {
  return (
    <main className="px-6 pb-12 pt-32 text-[#303030] bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[var(--primaryL)] mb-6">
          Terms of Service
        </h1>
        <p className="mb-8">Last Updated: 07/09/2025</p>

        <section className="mb-10">
          <p>
            These Terms of Service govern your access to and use of the website,
            content, and services provided by Leveling Consulting Services.
          </p>
          <p className="mt-4">
            By accessing our website or contacting us through any digital or
            communication channel, you agree to be legally bound by these Terms.
            If you do not agree with any provision herein, you should not access
            or use our services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            1. Company Information
          </h2>
          <p>
            Leveling is a tech consulting firm specializing in B2B growth
            solutions.
          </p>
          <p className="mt-2">We operate in:</p>
          <ul className="list-disc pl-5">
            <li>United States – Florida</li>
            <li>Brazil – São Paulo</li>
          </ul>
          <p className="mt-2">
            Contact:{" "}
            <a href="mailto:DiretoriaLeveling@gmail.com" className="underline">
              DiretoriaLeveling@gmail.com
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            2. Scope of Services
          </h2>
          <p>
            Leveling offers strategic and technical consulting in business
            automation strategies, including:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Process analysis and mapping</li>
            <li>RPA implementation and integration</li>
            <li>Maintenance and support services</li>
            <li>Custom automation strategy development</li>
          </ul>
          <p className="mt-2">
            All services are provided upon customized commercial agreements.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            3. Use of the Website
          </h2>
          <p>
            You agree to use our website and communication channels for lawful
            purposes only. You must not:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Violate any applicable local, national, or international law
            </li>
            <li>
              Attempt to gain unauthorized access to restricted areas or systems
            </li>
            <li>Misuse or interfere with the functionality of the site</li>
            <li>Upload malicious code or engage in harmful activities</li>
          </ul>
          <p className="mt-2">
            We reserve the right to suspend or permanently block access to users
            who violate these provisions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            4. Intellectual Property
          </h2>
          <p>
            All content on this website, including but not limited to texts,
            graphics, logos, videos, layouts, and technologies, is the exclusive
            property of Leveling or licensed to it and is protected by
            applicable intellectual property laws.
          </p>
          <p className="mt-2">
            No content may be copied, reproduced, distributed, or used without
            prior written authorization.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            5. Confidentiality and Data Privacy
          </h2>
          <p>
            By submitting personal or corporate information via forms or
            communication channels, you acknowledge and accept the terms
            outlined in our{" "}
            <a
              href="/privacy-policy"
              className="underline underline-offset-4 hover:text-black transition"
            >
              Privacy Policy
            </a>
            .
          </p>
          <p className="mt-2">
            We treat all data with strict confidentiality and in compliance with
            Brazil’s LGPD. You are responsible for ensuring the accuracy of the
            data you provide.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            6. Limitation of Liability
          </h2>
          <p>Leveling shall not be liable for:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Any indirect, incidental, or consequential damages</li>
            <li>Business losses, reputational damages, or data loss</li>
            <li>
              Delays or failures caused by force majeure or third-party systems
            </li>
          </ul>
          <p className="mt-2">
            Our services are advisory and consultative in nature. Results may
            vary depending on internal factors of each organization. We make no
            guarantees unless expressly contracted.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            7. Third-Party Tools and Integrations
          </h2>
          <p>
            If our services include the use of third-party platforms or software
            (e.g., RPA tools, automation engines, APIs), the client acknowledges
            that:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Leveling does not own or control such platforms</li>
            <li>Usage may be subject to the third party’s terms</li>
            <li>Any limitations or failures are beyond our liability</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            8. Modifications to the Terms
          </h2>
          <p>
            We reserve the right to update or modify these Terms at any time
            without prior notice. Continued use of the website or services after
            updates constitutes acceptance of the revised terms.
          </p>
          <p className="mt-2">
            The latest version will always be available on our website, with the
            latest revision date indicated.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            9. Jurisdiction and Governing Law
          </h2>
          <p>
            These Terms are governed by and interpreted in accordance with the
            laws of Brazil, particularly for data protection and commercial
            contracting.
          </p>
          <p className="mt-2">
            Disputes shall be subject to the exclusive jurisdiction of the
            courts of São Paulo, SP, Brazil, unless otherwise agreed in writing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[var(--primaryL)] mb-2">
            10. Contact
          </h2>
          <p>
            If you have any questions about these Terms or need support, contact
            us at{" "}
            <a href="mailto:DiretoriaLeveling@gmail.com" className="underline">
              DiretoriaLeveling@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
