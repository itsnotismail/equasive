export default function About() {
  return (
    <section id="about" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-medium tracking-widest uppercase text-brand-mid mb-4">About</p>
          <h2 className="text-4xl font-bold text-white leading-snug">
            Building software that works<br />as hard as you do.
          </h2>
        </div>
        <div className="text-slate-400 text-lg leading-relaxed space-y-5">
          <p>
            Equasive is a software company building AI-powered SaaS tools and automation solutions for businesses. We help teams streamline operations, reduce manual work, and scale smarter through intelligent software.
          </p>
          <p>
            From customer engagement to backend automation, our products are designed to work seamlessly so your business doesn't have to slow down.
          </p>
        </div>
      </div>
    </section>
  )
}
