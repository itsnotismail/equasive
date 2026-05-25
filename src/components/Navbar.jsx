import { Link, useLocation } from 'react-router-dom'
import EquasiveLogo from './EquasiveLogo'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" aria-label="Equasive home">
          <EquasiveLogo className="h-7 w-auto text-white" />
        </Link>
        <nav className="flex items-center gap-6 text-sm text-slate-400">
          <a href={pathname === '/' ? '#about' : '/#about'} className="hover:text-white transition-colors">About</a>
          <a href={pathname === '/' ? '#products' : '/#products'} className="hover:text-white transition-colors">Products</a>
          <Link
            to="/comvor"
            className={`hover:text-white transition-colors${pathname === '/comvor' ? ' text-white' : ''}`}
          >
            Comvor
          </Link>
          <Link
            to="/contact"
            className={`hover:text-white transition-colors${pathname === '/contact' ? ' text-white' : ''}`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
