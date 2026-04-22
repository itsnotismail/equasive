import { Link } from 'react-router-dom'
import EquasiveLogo from './EquasiveLogo'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <EquasiveLogo className="h-5 w-auto text-slate-500" />
        <p className="text-slate-500 text-sm">© 2026 Equasive. All rights reserved.</p>
        <nav className="flex gap-6 text-sm text-slate-500">
          <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
          <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
        </nav>
      </div>
    </footer>
  )
}
