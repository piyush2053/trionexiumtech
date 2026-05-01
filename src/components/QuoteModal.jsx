import { useState, useEffect } from 'react'
import {
  X, Rocket, Check, Mail, Clock, CalendarCheck, MessageSquare,
  ChevronRight,
} from 'lucide-react'

/* ────────────────────────────────────────────────
   SUCCESS MODAL  (shown after form submission)
──────────────────────────────────────────────── */
function SuccessModal({ name, service, onClose }) {
  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [onClose])

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 1100,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          animation: 'fadeIn 0.2s ease',
        }}
      />
      <div style={{
        position: 'fixed', inset: 0, zIndex: 1101,
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
      }}>
        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border-light)',
          borderRadius: 24, padding: '48px 40px',
          maxWidth: 460, width: '100%',
          position: 'relative', overflow: 'hidden',
          textAlign: 'center',
          animation: 'modalIn 0.35s cubic-bezier(0.34,1.56,0.64,1)',
        }}>
          {/* top bar */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 3,
            background: 'linear-gradient(90deg, var(--green), #00d4ff, var(--green))',
            backgroundSize: '200% 100%', animation: 'gradient-shift 3s ease infinite',
          }} />

          {/* close */}
          <button onClick={onClose} style={{
            position: 'absolute', top: 16, right: 16,
            background: 'var(--dark)', border: '1px solid var(--border-light)',
            borderRadius: 8, width: 32, height: 32,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: 'var(--gray)', transition: 'all 0.2s',
          }}
            onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.color = 'var(--green)' }}
            onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--gray)' }}
          >
            <X size={16} />
          </button>

          {/* check icon */}
          <div style={{
            width: 80, height: 80, borderRadius: '50%',
            background: 'var(--green-dim)', border: '2px solid var(--green)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px', animation: 'float 3s ease-in-out infinite',
          }}>
            <Check size={36} color="var(--green)" strokeWidth={2.5} />
          </div>

          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 8, fontFamily: 'var(--font-display)' }}>
            Message Sent!
          </h3>
          <p style={{ color: 'var(--gray)', fontSize: '0.95rem', marginBottom: 32, lineHeight: 1.6 }}>
            Thanks <strong style={{ color: 'var(--white)' }}>{name || 'there'}</strong>! We've received your enquiry
            {service ? <> about <strong style={{ color: 'var(--green)' }}>{service}</strong></> : ''} and will
            get back to you within <strong style={{ color: 'var(--white)' }}>24 hours</strong>.
          </p>

          {[
            { icon: <CalendarCheck size={15} color="var(--green)" />, text: 'Expect a response by next business day' },
            { icon: <MessageSquare size={15} color="var(--green)" />, text: 'Check your inbox for a confirmation copy' },
            { icon: <Mail          size={15} color="var(--green)" />, text: 'info@trionexiumtechnologies.com' },
          ].map((row, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              background: 'var(--dark)', border: '1px solid var(--border-light)',
              borderRadius: 10, padding: '11px 14px', marginBottom: 10, textAlign: 'left',
            }}>
              <div style={{
                width: 30, height: 30, borderRadius: 8,
                background: 'var(--green-dim)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>{row.icon}</div>
              <span style={{ fontSize: '0.83rem', color: 'var(--gray)' }}>{row.text}</span>
            </div>
          ))}

          <button onClick={onClose} className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: 24 }}>
            Got it, thanks!
          </button>
        </div>
      </div>
    </>
  )
}

/* ────────────────────────────────────────────────
   CONTACT FORM  (inside the quote modal)
──────────────────────────────────────────────── */
function ContactForm() {
  const [form, setForm]         = useState({ name: '', email: '', company: '', service: '', message: '', budget: '' })
  const [status, setStatus]     = useState('idle')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1400))
    setStatus('sent')
    setShowSuccess(true)
  }

  const handleSuccessClose = () => {
    setShowSuccess(false)
    setStatus('idle')
    setForm({ name: '', email: '', company: '', service: '', message: '', budget: '' })
  }

  return (
    <>
      {showSuccess && <SuccessModal name={form.name} service={form.service} onClose={handleSuccessClose} />}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="qm-form-row">
          <div>
            <label className="qm-label">Full Name *</label>
            <input className="qm-input" name="name" required value={form.name} onChange={handleChange} placeholder="John Smith" />
          </div>
          <div>
            <label className="qm-label">Work Email *</label>
            <input className="qm-input" type="email" name="email" required value={form.email} onChange={handleChange} placeholder="john@company.com" />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="qm-form-row">
          <div>
            <label className="qm-label">Company</label>
            <input className="qm-input" name="company" value={form.company} onChange={handleChange} placeholder="Your Company Ltd." />
          </div>
          <div>
            <label className="qm-label">Service Needed</label>
            <select className="qm-input" name="service" value={form.service} onChange={handleChange}>
              <option value="">Select a service...</option>
              <option>ZATCA E-Invoicing</option>
              <option>Oracle Fusion Cloud</option>
              <option>Oracle E-Business Suite (EBS)</option>
              <option>Cloudflare Services</option>
              <option>Oracle Cloud OIC</option>
              <option>React / Frontend</option>
              <option>Node.js / Backend</option>
              <option>Java Enterprise</option>
              <option>DevOps / Cloud</option>
              <option>Multiple Services</option>
              <option>Other / Custom</option>
            </select>
          </div>
        </div>

        <div>
          <label className="qm-label">Budget Range</label>
          <select className="qm-input" name="budget" value={form.budget} onChange={handleChange}>
            <option value="">Select budget range...</option>
            <option>$5,000 – $15,000</option>
            <option>$15,000 – $50,000</option>
            <option>$50,000 – $150,000</option>
            <option>$150,000+</option>
            <option>Let's discuss</option>
          </select>
        </div>

        <div>
          <label className="qm-label">Tell Us About Your Project *</label>
          <textarea className="qm-input" name="message" required rows={4}
            value={form.message} onChange={handleChange}
            placeholder="Describe your project, challenges, timeline, and any specific requirements..." />
        </div>

        <button type="submit" className="btn btn-primary"
          style={{ justifyContent: 'center', padding: '15px', gap: 10, marginTop: 4 }}
          disabled={status === 'sending'}>
          {status === 'sending' ? (
            <>
              <span style={{
                width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)',
                borderTopColor: '#fff', borderRadius: '50%',
                display: 'inline-block', animation: 'spin 0.7s linear infinite',
              }} />
              Sending...
            </>
          ) : (
            <><Rocket size={16} /> Send Message &amp; Get Free Quote</>
          )}
        </button>

        <p style={{ textAlign: 'center', color: 'var(--gray)', fontSize: '0.78rem', marginTop: 2 }}>
          We respond within 24 hours · 100% confidential
        </p>
      </form>
    </>
  )
}

/* ────────────────────────────────────────────────
   QUOTE MODAL  (the main overlay with the form)
──────────────────────────────────────────────── */
export default function QuoteModal({ isOpen, onClose }) {
  // Escape key & body scroll lock
  useEffect(() => {
    if (!isOpen) return
    const h = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', h)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', h)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const CONTACT_INFO = [
    { icon: <Mail  size={15} color="var(--green)" />, label: 'Email',         val: 'info@trionexiumtechnologies.com' },
    { icon: <Clock size={15} color="var(--green)" />, label: 'Response Time', val: 'Within 24 hours' },
  ]

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.2s ease',
      }} />

      {/* Modal */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 1001,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px', overflowY: 'auto',
      }}>
        <div style={{
          background: 'var(--dark)',
          border: '1px solid var(--border-light)',
          borderRadius: 24,
          width: '100%', maxWidth: 900,
          position: 'relative', overflow: 'hidden',
          animation: 'modalIn 0.35s cubic-bezier(0.34,1.56,0.64,1)',
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          minHeight: 0,
        }} className="qm-grid">

          {/* top accent bar */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 3,
            background: 'linear-gradient(90deg, var(--green), #00d4ff, var(--green))',
            backgroundSize: '200% 100%', animation: 'gradient-shift 3s ease infinite',
            zIndex: 1,
          }} />

          {/* ── LEFT PANEL ── */}
          <div style={{
            background: 'linear-gradient(160deg, #0d1a05 0%, #0a0a12 100%)',
            borderRight: '1px solid var(--border-light)',
            padding: '40px 28px',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <div>
              <div className="section-tag" style={{ marginBottom: 20, fontSize: '0.7rem' }}>Free Consultation</div>
              <h2 style={{
                fontSize: '1.4rem', fontWeight: 800, lineHeight: 1.25,
                fontFamily: 'var(--font-display)', marginBottom: 12,
              }}>
                Get Your <span style={{ color: 'var(--green)' }}>Free</span> Quote
              </h2>
              <p style={{ color: 'var(--gray)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: 28 }}>
                Tell us about your project and we'll put together a custom proposal within 24 hours. No commitment required.
              </p>

              {/* checklist */}
              {[
                'Free Technical Consultation',
                'Custom Solution Design',
                'No Obligation Quote',
                'Fast 24hr Response',
                'NDA & Confidentiality',
              ].map(text => (
                <div key={text} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%',
                    background: 'var(--green-dim)', border: '1px solid var(--green)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Check size={11} color="var(--green)" strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '0.83rem', color: 'var(--gray)' }}>{text}</span>
                </div>
              ))}
            </div>

            {/* contact info */}
            <div style={{ marginTop: 32 }}>
              {CONTACT_INFO.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: 'var(--green-dim)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{item.icon}</div>
                  <div>
                    <p style={{ fontSize: '0.68rem', color: 'var(--gray)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 1 }}>{item.label}</p>
                    <p style={{ fontSize: '0.78rem', color: 'var(--white)' }}>{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT PANEL — FORM ── */}
          <div style={{ padding: '40px 36px', overflowY: 'auto', maxHeight: '90vh' }}>
            {/* close button */}
            <button onClick={onClose} style={{
              position: 'absolute', top: 16, right: 16, zIndex: 2,
              background: 'var(--card)', border: '1px solid var(--border-light)',
              borderRadius: 8, width: 34, height: 34,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'var(--gray)', transition: 'all 0.2s',
            }}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.color = 'var(--green)' }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--gray)' }}
            >
              <X size={16} />
            </button>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 4, fontFamily: 'var(--font-display)' }}>
              Send Us a Message
            </h3>
            <p style={{ color: 'var(--gray)', fontSize: '0.85rem', marginBottom: 24 }}>
              Fill out the form and we'll get back to you within 24 hours.
            </p>

            <ContactForm />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes modalIn { from { opacity: 0; transform: scale(0.9) translateY(16px) } to { opacity: 1; transform: scale(1) translateY(0) } }
        @keyframes spin    { to { transform: rotate(360deg) } }

        .qm-label {
          display: block; font-family: var(--font-display); font-size: 11px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase; color: var(--gray); margin-bottom: 7px;
        }
        .qm-input {
          width: 100%; background: var(--black); border: 1px solid var(--border-light); border-radius: 8px;
          padding: 11px 14px; color: var(--white); font-family: var(--font-body); font-size: 0.875rem;
          transition: all 0.2s; outline: none; resize: vertical; box-sizing: border-box;
        }
        .qm-input::placeholder { color: var(--gray); }
        .qm-input:focus { border-color: var(--green); box-shadow: 0 0 0 3px var(--green-dim); }
        select.qm-input option { background: var(--dark); }

        @media (max-width: 700px) {
          .qm-grid { grid-template-columns: 1fr !important; }
          .qm-grid > div:first-child { display: none; }
          .qm-form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}