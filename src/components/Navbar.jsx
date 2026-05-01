import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useQuoteModal } from '../contexts/QuoteModalContext'
import logo from '../assets/logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { openQuoteModal } = useQuoteModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleQuote = () => { openQuoteModal(); setOpen(false) }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="Trionexium Technologies" />
          </Link>

          <div className="nav-links">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="nav-cta">
            <Link to="/about#contact" className="btn btn-ghost" style={{ padding: '10px 22px', fontSize: '0.875rem' }}>
              Get in Touch
            </Link>
            <button onClick={handleQuote} className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '0.875rem' }}>
              Get Quote
            </button>
          </div>

          <button className={`nav-menu-btn ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(l => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`} onClick={() => setOpen(false)}>
            {l.label}
          </NavLink>
        ))}
        <div style={{ height: 1, background: 'var(--border-light)', margin: '8px 0' }} />
        <button onClick={() => { navigate('/about'); setOpen(false) }} className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center', marginBottom: 8 }}>
          Get in Touch
        </button>
        <button onClick={handleQuote} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
          Get Quote ↗
        </button>
      </div>
    </>
  )
}
