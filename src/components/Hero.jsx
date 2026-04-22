export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-brand-mid mb-6">
          Software &amp; Automation
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-8">
          AI-powered SaaS tools<br />
          <span className="gradient-text">and automation</span><br />
          for modern businesses.
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          We build intelligent software that helps teams move faster, cut manual work, and scale with confidence.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="inline-block px-8 py-3.5 rounded-lg bg-brand-mid text-white font-semibold text-sm hover:bg-brand-teal transition-colors"
          >
            See our products
          </a>
          <a
            href="#about"
            className="inline-block px-8 py-3.5 rounded-lg border border-white/10 text-slate-300 font-semibold text-sm hover:border-white/20 hover:text-white transition-colors"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}
