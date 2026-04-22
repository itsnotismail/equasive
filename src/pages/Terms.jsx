import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const EFFECTIVE_DATE = 'April 22, 2026'
const COMPANY = 'Equasive'

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-slate-500 text-sm mb-12">Effective date: {EFFECTIVE_DATE}</p>

          <div className="prose prose-slate prose-invert max-w-none space-y-10 text-slate-300 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using any service, website, or software product provided by {COMPANY} (collectively, "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our Services. These Terms apply to all visitors, users, and others who access or use the Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Use of Services</h2>
              <p>You agree to use the Services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className="list-disc list-inside space-y-1 mt-3 text-slate-400">
                <li>Use the Services in any way that violates applicable local, national, or international law or regulation.</li>
                <li>Transmit any unsolicited or unauthorized advertising or promotional material.</li>
                <li>Attempt to gain unauthorized access to any part of the Services or related systems.</li>
                <li>Reverse engineer, decompile, or otherwise attempt to extract the source code of any software forming part of the Services.</li>
                <li>Interfere with or disrupt the integrity or performance of the Services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Accounts and Registration</h2>
              <p>
                Certain features of our Services may require you to register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate. You are responsible for safeguarding your account credentials and for all activity that occurs under your account. Notify us immediately if you suspect unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Intellectual Property</h2>
              <p>
                All content, features, and functionality of the Services — including but not limited to software, text, graphics, logos, and icons — are the exclusive property of {COMPANY} or its licensors and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Third-Party Services and Integrations</h2>
              <p>
                Our Services may integrate with third-party platforms (such as WhatsApp, Instagram, Messenger, and Viber). Your use of those platforms is subject to their respective terms and policies. {COMPANY} is not responsible for the content, practices, or policies of any third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Disclaimers</h2>
              <p>
                The Services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. {COMPANY} does not warrant that the Services will be uninterrupted, error-free, or free of harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, {COMPANY} and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of or inability to use the Services, even if advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to the Services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason. Upon termination, your right to use the Services will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Modifications to Terms</h2>
              <p>
                We may revise these Terms at any time. When we do, we will update the effective date at the top of this page. Continued use of the Services after any changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with applicable law, without regard to conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">11. Contact</h2>
              <p>
                If you have any questions about these Terms, please reach out through our website.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
