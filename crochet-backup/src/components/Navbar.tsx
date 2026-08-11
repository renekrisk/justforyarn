import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { label: 'Home', href: '/', isExternal: false },
  { label: 'Collections', href: '/#products', isExternal: true },
  { label: 'Our Story', href: '/story', isExternal: false },
  { label: 'Custom Orders', href: '/#custom', isExternal: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <nav className="navbar__inner container" aria-label="Main navigation">
        <Link className="navbar__brand" to="/" aria-label="Knot & Craft home">
          <span className="navbar__brand-name">Knot & Craft</span>
        </Link>

        <ul className="navbar__links" role="list">
          {links.map((l) =>
            l.isExternal ? (
              <li key={l.href}>
                <a className="navbar__link" href={l.href}>{l.label}</a>
              </li>
            ) : (
              <li key={l.href}>
                <Link className="navbar__link" to={l.href}>{l.label}</Link>
              </li>
            )
          )}
        </ul>

        <a className="navbar__cta btn-primary" href="/#custom">
          Order Now
        </a>

        <button
          id="mobile-menu-toggle"
          className={`navbar__burger ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`navbar__mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <ul role="list">
          {links.map((l) =>
            l.isExternal ? (
              <li key={l.href}>
                <a className="navbar__mobile-link" href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
              </li>
            ) : (
              <li key={l.href}>
                <Link className="navbar__mobile-link" to={l.href} onClick={() => setMenuOpen(false)}>{l.label}</Link>
              </li>
            )
          )}
          <li>
            <a className="btn-primary" href="/#custom" onClick={() => setMenuOpen(false)}>Order Now</a>
          </li>
        </ul>
      </div>
    </header>
  )
}
