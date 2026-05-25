import { Link } from 'react-router-dom'
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
                {COMPANY} ("we", "us", or "our") is committed to protecting your personal information and your right to privacy. This Privacy &amp; Cookie Policy explains what information we collect, how we use it, and what rights you have in relation to it when you use our website or any of our software products and services (collectively, "Services"), including <span className="text-slate-200">Comvor</span>, our customer messaging and order management platform.
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
                To exercise any of these rights, please use the contact details in section 15 below (email, phone, or our{' '}
                <Link to="/contact" className="text-brand-mid hover:text-brand-teal underline underline-offset-2">
                  contact page
                </Link>
                ). We will respond within the timeframe required by applicable law.
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
              <h2 className="text-xl font-semibold text-white mb-3">12. Facebook, Instagram, and Messenger (Meta platforms)</h2>
              <p>
                Where our Services (including <span className="text-slate-300">Comvor</span>) are connected to Meta products such as Facebook, Instagram, or Messenger, we process information in accordance with Meta&apos;s Platform Terms and applicable policies, and only for the purposes described in this policy.
              </p>
              <p className="mt-3">
                <span className="text-slate-300 font-medium">Who is responsible.</span> The business that connects its Meta channels to our Services is typically the data controller for its customers&apos; messages and related information. {COMPANY} acts as a processor or service provider on behalf of that business to provide messaging, customer support, order management, and related features the business has requested.
              </p>
              <p className="mt-3">
                <span className="text-slate-300 font-medium">Categories of information.</span> Depending on how a business configures the integration, this may include identifiers, message content, profile or display names as made available by the platform, timestamps, and information related to orders or support requests handled through the connected channels.
              </p>
              <p className="mt-3">
                <span className="text-slate-300 font-medium">How we use it.</span> We use such information only to operate the features the business has enabled (for example unified inbox, AI-assisted replies with human oversight where applicable, order creation, and synchronisation with order or POS systems the business connects). We do <strong className="text-slate-200 font-semibold">not sell</strong> personal information, and we do not use it for unrelated advertising on our own behalf.
              </p>
              <p className="mt-3">
                <span className="text-slate-300 font-medium">Sharing.</span> Information is shared with subprocessors only as needed to host and operate our Services under contract, or where required by law. Meta may process data according to its own terms when you use Meta products.
              </p>
            </section>

            <section id="data-deletion">
              <h2 className="text-xl font-semibold text-white mb-3">13. Data deletion and account closure</h2>
              <p>
                <span className="text-slate-300 font-medium">Business customers.</span> If your organisation uses our Services and you wish to delete or export data, or to close your account, contact us using the details in the Contact section below. We will respond within a reasonable time and in line with applicable law.
              </p>
              <p className="mt-3">
                <span className="text-slate-300 font-medium">Individuals who messaged a business.</span> If you interacted with a business that uses our Services through WhatsApp, Instagram, Messenger, or another channel, and you want access to or deletion of your personal data, please contact that business in the first instance, since they are usually the controller of your conversation data. You may also contact us and we will forward your request to the relevant customer where we can identify them, or advise you accordingly.
              </p>
              <p className="mt-3 text-slate-400 text-sm">
                For Meta-specific data deletion resources, you may also refer to Meta&apos;s help documentation for Facebook, Instagram, and Messenger.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">14. Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. When we do, we will update the effective date at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">15. Contact</h2>
              <p>
                For any questions about this Privacy &amp; Cookie Policy, including requests to exercise your privacy rights or enquiries about our processing of data from Meta platforms, you can reach {COMPANY} at:
              </p>
              <ul className="list-none space-y-2 mt-4 text-slate-400">
                <li>
                  <span className="text-slate-300 font-medium">Email:</span>{' '}
                  <a href="mailto:15m41l.a18@gmail.com" className="text-brand-mid hover:text-brand-teal underline underline-offset-2 break-all">
                    15m41l.a18@gmail.com
                  </a>
                  {' '}(including privacy-related requests)
                </li>
                <li>
                  <span className="text-slate-300 font-medium">Phone:</span>{' '}
                  <a href="tel:+9609990805" className="text-brand-mid hover:text-brand-teal underline underline-offset-2">
                    +960 999 0805
                  </a>
                </li>
                <li>
                  <span className="text-slate-300 font-medium">Postal address:</span> Mauva, Maajehi Goalhi, S. Hithadhoo, Maldives
                </li>
                <li>
                  <span className="text-slate-300 font-medium">Web:</span>{' '}
                  <Link to="/contact" className="text-brand-mid hover:text-brand-teal underline underline-offset-2">
                    Contact page
                  </Link>
                  {' '}(full business details and service address)
                </li>
              </ul>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
