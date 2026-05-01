import { Link } from 'react-router-dom'
import { Globe } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <img src={logo} alt="Trionexium Technologies" className="footer-logo" />
            <p>
              Empowering enterprises with cutting-edge technology solutions. From ZATCA compliance to cloud transformation — we deliver excellence.
            </p>
            <div style={{ marginTop: 24 }}>
              <a
                href="https://trionexiumtechnologies.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'var(--green)', fontSize: '0.875rem',
                  fontFamily: 'var(--font-display)', fontWeight: 600,
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}
              >
                <Globe size={14} />
                trionexiumtechnologies.com
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <div className="footer-links">
              {[
                'ZATCA Solutions', 'Cloudflare Services', 'Oracle Cloud OIC',
                'JavaScript / TypeScript', 'Node.js & React', 'Cloud Architecture',
              ].map(s => (
                <Link key={s} to="/services" className="footer-link">{s}</Link>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <div className="footer-links">
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/services" className="footer-link">Services</Link>
              <Link to="/about#contact" className="footer-link">Contact</Link>
              <Link to="/about#contact" className="footer-link">Get Quote</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <div className="footer-links">
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-link">Terms & Conditions</Link>
            </div>
            <div style={{ marginTop: 28 }}>
              <h4>Contact</h4>
              <div className="footer-links">
                <a href="mailto:info@trionexiumtechnologies.com" className="footer-link" style={{ fontSize: '0.8rem' }}>
                  info@trionexiumtechnologies.com
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Trionexium Technologies. All rights reserved.</p>
          <div className="footer-socials">
            {['in', 'tw', 'gh', 'yt'].map(s => (
              <a key={s} href="#" className="social-btn" aria-label={s}>{s.toUpperCase()}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}