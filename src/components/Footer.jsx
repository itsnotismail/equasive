import { Link } from 'react-router-dom'
import EquasiveLogo from './EquasiveLogo'

const TEL = '+9609990805'
const TEL_SHORT = '+960 999 0805'
const EMAIL = '15m41l.a18@gmail.com'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 text-center sm:text-left">
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <EquasiveLogo className="h-5 w-auto text-slate-500 mx-auto sm:mx-0" />
          <p className="text-slate-500 text-sm">© 2026 Equasive. All rights reserved.</p>
        </div>
        <div className="w-full flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 text-sm text-slate-500">
          <div className="flex flex-col items-center sm:items-start gap-3 max-w-md">
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:items-start justify-center sm:justify-start gap-x-6 gap-y-2">
              <a href={`tel:${TEL}`} className="hover:text-slate-300 transition-colors">
                {TEL_SHORT}
              </a>
              <a href={`mailto:${EMAIL}`} className="hover:text-slate-300 transition-colors break-all sm:break-normal">
                {EMAIL}
              </a>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 text-center sm:text-left leading-relaxed">
              Mauva, Maajehi Goalhi, S. Hithadhoo, Maldives
            </p>
          </div>
          <nav className="flex flex-wrap justify-center sm:justify-end gap-6">
            <Link to="/comvor" className="hover:text-slate-300 transition-colors">Comvor</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
