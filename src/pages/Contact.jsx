import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TEL = '+9609990805'
const TEL_DISPLAY = '+960 999 0805'
const EMAIL = '15m41l.a18@gmail.com'

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Contact</h1>
          <p className="text-slate-500 text-sm mb-12">
            Get in touch with Equasive. We will respond to email and phone enquiries as soon as we can.
          </p>

          <div className="space-y-10 text-slate-300 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Direct contact</h2>
              <dl className="space-y-3">
                <div>
                  <dt className="text-slate-500 text-sm">Phone</dt>
                  <dd>
                    <a href={`tel:${TEL}`} className="text-emerald-400/90 hover:text-emerald-300 transition-colors">
                      {TEL_DISPLAY}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500 text-sm">Email</dt>
                  <dd>
                    <a href={`mailto:${EMAIL}`} className="text-emerald-400/90 hover:text-emerald-300 transition-colors break-all">
                      {EMAIL}
                    </a>
                  </dd>
                </div>
              </dl>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Service address</h2>
              <p className="text-slate-400">
                Rainforest Residence
                <br />
                K. Hulhumale&apos;
                <br />
                Maldives
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Registered address</h2>
              <p className="text-slate-400">
                Mauva, Maajehi Goalhi
                <br />
                S. Hithadhoo
                <br />
                Maldives
              </p>
            </section>

            <section className="pt-2 border-t border-white/10">
              <h2 className="text-lg font-semibold text-white mb-3">Business registration</h2>
              <p className="text-slate-500 text-sm">
                Sole proprietorship registered number <span className="text-slate-400">SP10512026</span>.
                You can verify this business on the official registry:{' '}
                <a
                  href="https://business.egov.mv/verify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400/90 hover:text-emerald-300 transition-colors"
                >
                  business.egov.mv/verify
                </a>
                {' '}(verification code: <span className="text-slate-400 font-mono text-xs">bzhe-g5yg-2rp4-dqe8</span>).
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
