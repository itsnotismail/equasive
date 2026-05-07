import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <section id="products" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-brand-mid mb-4">Products</p>
        <h2 className="text-4xl font-bold text-white mb-16">What we're building</h2>

        <div className="max-w-2xl">
          <div className="bg-dark-800 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-dark-700 flex-shrink-0">
                <img
                  src="/seytu-icon.png"
                  alt="Seytu icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <img
                src="/seytu-logo.svg"
                alt="Seytu"
                className="h-9 w-auto"
              />
            </div>

            <p className="text-slate-300 text-base leading-relaxed mb-6">
              AI-powered customer engagement, chat automation and inventory management for online shops. Supports WhatsApp, Instagram, Messenger, and Viber.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {['WhatsApp', 'Instagram', 'Messenger', 'Viber'].map(channel => (
                <span
                  key={channel}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-dark-700 text-slate-400 border border-white/5"
                >
                  {channel}
                </span>
              ))}
            </div>
            <Link
              to="/seytu"
              className="inline-flex items-center text-sm font-medium text-brand-mid hover:text-brand-teal transition-colors"
            >
              Learn more about Seytu →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
