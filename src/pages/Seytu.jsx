import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DEMO_EMAIL = '15m41l.a18@gmail.com'
const demoMailto = `mailto:${DEMO_EMAIL}?subject=${encodeURIComponent('Seytu — demo request')}`

const problems = [
  'Reply quickly',
  'Track customer requests',
  'Manage order status',
  'Avoid missed messages',
  'Sync online orders with POS or internal systems',
  'Keep customer history in one place',
]

const coreCapabilities = [
  'Unified inbox for WhatsApp, Instagram, Messenger, and web chat',
  'AI-assisted customer replies',
  'Online order creation from conversations',
  'Order status tracking',
  'Customer history and conversation timeline',
  'POS and order system integration',
  'Staff handover when human support is needed',
  'Basic analytics for messages, orders, and response performance',
]

const featureCards = [
  {
    title: 'Unified customer inbox',
    body: 'Manage all customer conversations from multiple channels in one workspace.',
  },
  {
    title: 'AI-assisted replies',
    body: 'Help staff respond faster with suggested replies, FAQs, product answers, and order-related responses.',
  },
  {
    title: 'Order management',
    body: 'Turn customer conversations into structured orders with customer details, items, status, and notes.',
  },
  {
    title: 'POS integration',
    body: 'Connect Seytu with existing POS or order systems to sync products, prices, availability, and order updates.',
  },
  {
    title: 'Human handover',
    body: 'Let AI assist first, then allow staff to take over whenever needed.',
  },
  {
    title: 'Customer history',
    body: 'View previous conversations, orders, and customer details in one place.',
  },
]

const steps = [
  'Connect business messaging channels',
  'Sync products, services, or menu items',
  'Customers message the business',
  'AI assists with replies and order collection',
  'Staff review or take over when needed',
  'Orders are created, tracked, and optionally synced with POS',
]

const targets = [
  'Restaurants and cafés',
  'Retail shops',
  'Service businesses',
  'Booking-based businesses',
  'Small and medium businesses receiving orders through social messaging',
  'Businesses using WhatsApp, Instagram, or Facebook for sales',
]

export default function Seytu() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-6">
        {/* Hero */}
        <section className="max-w-6xl mx-auto mb-24 md:mb-28">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 gap-10">
            <div className="flex-1">
              <p className="text-sm font-medium tracking-widest uppercase text-brand-mid mb-4">Product</p>
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-dark-800 border border-white/5 flex-shrink-0">
                  <img src="/seytu-icon.png" alt="" className="w-full h-full object-cover" />
                </div>
                <img src="/seytu-logo.svg" alt="Seytu" className="h-10 w-auto" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                AI-assisted order management for modern businesses
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
                Seytu helps businesses manage customer conversations, online orders, bookings, and POS-connected workflows
                from channels like WhatsApp, Instagram, Facebook Messenger, and web chat.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={demoMailto}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-brand-green to-brand-teal text-dark-950 font-semibold text-sm hover:opacity-95 transition-opacity"
                >
                  Request demo
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/15 text-slate-200 font-medium text-sm hover:border-white/25 hover:bg-white/5 transition-colors"
                >
                  View features
                </a>
              </div>
              <p className="text-xs text-slate-600 mt-6">
                Seytu is offered by{' '}
                <Link to="/contact" className="text-slate-500 hover:text-slate-400 underline underline-offset-2">
                  Equasive
                </Link>
                .{' '}
                <Link to="/privacy" className="text-slate-500 hover:text-slate-400 underline underline-offset-2">
                  Privacy policy
                </Link>
              </p>
            </div>
            <div className="flex-1 max-w-xl mx-auto lg:mx-0 w-full">
              <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-dark-800 to-dark-900 p-8 flex flex-col justify-center shadow-2xl">
                <p className="text-xs font-medium uppercase tracking-wider text-brand-mid mb-4">In one workspace</p>
                <ul className="space-y-3 text-slate-400 text-sm">
                  {['Inbox & threads', 'Orders & status', 'Customer timeline', 'POS sync'].map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="max-w-6xl mx-auto mb-24 py-16 border-y border-white/5">
          <h2 className="text-3xl font-bold text-white mb-4">Why teams need a single system</h2>
          <p className="text-slate-400 mb-10 max-w-2xl">
            Many businesses receive orders and inquiries across multiple channels, which makes it difficult to:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {problems.map(item => (
              <li
                key={item}
                className="flex gap-3 text-slate-300 text-sm leading-relaxed bg-dark-800/50 border border-white/5 rounded-xl px-4 py-3"
              >
                <span className="text-brand-mid flex-shrink-0" aria-hidden>
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* What Seytu does */}
        <section className="max-w-6xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-white mb-4">What Seytu does</h2>
          <p className="text-slate-400 mb-8 max-w-2xl">
            Seytu brings customer messaging, AI assistance, and order management into one platform.
          </p>
          <ul className="space-y-3 max-w-3xl">
            {coreCapabilities.map(cap => (
              <li key={cap} className="flex gap-3 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0" aria-hidden />
                {cap}
              </li>
            ))}
          </ul>
        </section>

        {/* Key features */}
        <section id="features" className="max-w-6xl mx-auto mb-24 scroll-mt-28">
          <p className="text-sm font-medium tracking-widest uppercase text-brand-mid mb-4">Features</p>
          <h2 className="text-3xl font-bold text-white mb-12">Key capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map(({ title, body }) => (
              <div
                key={title}
                className="bg-dark-800 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="max-w-6xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-white mb-10">How it works</h2>
          <ol className="space-y-4 max-w-2xl">
            {steps.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center text-sm font-semibold text-brand-mid">
                  {i + 1}
                </span>
                <span className="text-slate-300 pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Target customers */}
        <section className="max-w-6xl mx-auto mb-24 py-16 border-y border-white/5">
          <h2 className="text-3xl font-bold text-white mb-8">Who Seytu is for</h2>
          <div className="flex flex-wrap gap-2">
            {targets.map(t => (
              <span
                key={t}
                className="px-4 py-2 rounded-full text-sm text-slate-300 bg-dark-800 border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Trust */}
        <section className="max-w-6xl mx-auto mb-24">
          <div className="bg-dark-800 border border-white/5 rounded-2xl p-8 md:p-10 max-w-3xl">
            <h2 className="text-xl font-semibold text-white mb-4">Trust and data use</h2>
            <p className="text-slate-400 leading-relaxed">
              Seytu only uses connected platform data to provide messaging, customer support, order management, and
              automation features for the business using the service. Customer data is used only to enable the requested
              service and is{' '}
              <strong className="text-slate-300 font-medium">not sold</strong>. For details on categories of data,
              retention, and your rights, see our{' '}
              <Link to="/privacy" className="text-brand-mid hover:text-brand-teal underline underline-offset-2">
                Privacy &amp; Cookie Policy
              </Link>
              .
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto text-center">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-dark-800 to-dark-900 px-8 py-14 md:py-16">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to simplify your online orders?</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Bring your customer conversations, orders, and support workflows into one AI-assisted platform.
            </p>
            <a
              href={demoMailto}
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-brand-green to-brand-teal text-dark-950 font-semibold text-sm hover:opacity-95 transition-opacity"
            >
              Request demo
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
