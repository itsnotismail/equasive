import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * React Router does not scroll to top on navigation; restore expected browser behaviour.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
