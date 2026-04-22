import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const EFFECTIVE_DATE = 'April 22, 2026'
const COMPANY = 'Equasive'

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Privacy &amp; Cookie Policy</h1>
          <p className="text-slate-500 text-sm mb-12">Effective date: {EFFECTIVE_DATE}</p>

          <div className="prose prose-slate prose-invert max-w-none space-y-10 text-slate-300 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
              <p>
                {COMPANY} ("we", "us", or "our") is committed to protecting your personal information and your right to privacy. This Privacy &amp; Cookie Policy explains what information we collect, how we use it, and what rights you have in relation to it when you use our website or any of our software products and services (collectively, "Services").
              </p>
              <p className="mt-3">
                By using our Services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
              <p>We may collect the following categories of information:</p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-slate-400">
                <li><span className="text-slate-300 font-medium">Account information</span> — name, email address, and credentials you provide when registering for our Services.</li>
                <li><span className="text-slate-300 font-medium">Usage data</span> — information about how you interact with our Services, including pages visited, features used, and actions taken.</li>
                <li><span className="text-slate-300 font-medium">Device &amp; technical data</span> — IP address, browser type, operating system, and device identifiers collected automatically.</li>
                <li><span className="text-slate-300 font-medium">Communications</span> — messages or inquiries you send to us directly.</li>
                <li><span className="text-slate-300 font-medium">Third-party platform data</span> — where you connect our Services to platforms such as WhatsApp, Instagram, Messenger, or Viber, we may process data as permitted by those integrations and your consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-slate-400">
                <li>Provide, operate, and maintain our Services.</li>
                <li>Create and manage your account.</li>
                <li>Improve, personalise, and expand our Services.</li>
                <li>Understand and analyse how our Services are used.</li>
                <li>Communicate with you about updates, support, or service-related notices.</li>
                <li>Detect, prevent, and address technical issues or misuse.</li>
                <li>Comply with applicable legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Legal Basis for Processing</h2>
              <p>
                Where applicable law requires a legal basis for processing personal data, we rely on the following:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-slate-400">
                <li><span className="text-slate-300 font-medium">Contract</span> — processing necessary to perform a contract with you or to take steps at your request before entering into a contract.</li>
                <li><span className="text-slate-300 font-medium">Legitimate interests</span> — processing necessary for our legitimate business interests, provided those interests are not overridden by your rights.</li>
                <li><span className="text-slate-300 font-medium">Consent</span> — where you have given explicit consent, such as for optional cookies or marketing communications.</li>
                <li><span className="text-slate-300 font-medium">Legal obligation</span> — processing necessary to comply with a legal obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Sharing of Information</h2>
              <p>
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-slate-400">
                <li><span className="text-slate-300 font-medium">Service providers</span> — trusted third-party vendors who assist us in operating our Services (e.g. hosting, analytics, infrastructure), under confidentiality obligations.</li>
                <li><span className="text-slate-300 font-medium">Third-party platforms</span> — where you authorise integrations with platforms such as WhatsApp or Instagram, data may be shared with those platforms as required by the integration.</li>
                <li><span className="text-slate-300 font-medium">Legal requirements</span> — where we are required to disclose information to comply with applicable law, regulation, or legal process.</li>
                <li><span className="text-slate-300 font-medium">Business transfers</span> — in connection with a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Data Retention</h2>
              <p>
                We retain personal information for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. When your data is no longer needed, we will delete or anonymise it securely.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
              <p>
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-slate-400">
                <li>Right to access the personal data we hold about you.</li>
                <li>Right to correct inaccurate or incomplete data.</li>
                <li>Right to request deletion of your data ("right to be forgotten").</li>
                <li>Right to restrict or object to certain processing activities.</li>
                <li>Right to data portability.</li>
                <li>Right to withdraw consent at any time, where processing is based on consent.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us through our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Cookie Policy</h2>
              <p>
                Cookies are small text files placed on your device when you visit a website. We use cookies and similar tracking technologies to operate and improve our Services.
              </p>

              <h3 className="text-base font-semibold text-white mt-5 mb-2">Types of cookies we use</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>
                  <span className="text-slate-300 font-medium">Strictly necessary cookies</span> — essential for the Services to function. They cannot be disabled.
                </li>
                <li>
                  <span className="text-slate-300 font-medium">Functional cookies</span> — remember your preferences and settings to improve your experience.
                </li>
                <li>
                  <span className="text-slate-300 font-medium">Analytics cookies</span> — help us understand how visitors interact with our Services so we can improve them. Data is aggregated and anonymised where possible.
                </li>
                <li>
                  <span className="text-slate-300 font-medium">Third-party cookies</span> — set by third-party services we use (such as analytics providers). These are subject to the respective third party's privacy policy.
                </li>
              </ul>

              <h3 className="text-base font-semibold text-white mt-5 mb-2">Managing cookies</h3>
              <p className="text-slate-400">
                You can control cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, or be notified when a cookie is set. Note that disabling certain cookies may affect the functionality of our Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Third-Party Links</h2>
              <p>
                Our Services may contain links to third-party websites or services. We are not responsible for the privacy practices of those third parties and encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">11. Children's Privacy</h2>
              <p>
                Our Services are not directed at children under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us and we will take steps to delete it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">12. Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. When we do, we will update the effective date at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">13. Contact</h2>
              <p>
                If you have any questions or concerns about this Privacy &amp; Cookie Policy, please reach out through our website.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
