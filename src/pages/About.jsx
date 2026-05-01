import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useScrollReveal } from '../hooks/useScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'

const VALUES = [
  { icon: '🎯', title: 'Mission-Driven', desc: 'Every project we take on is treated as our own mission. We care deeply about outcomes, not just outputs.' },
  { icon: '🔬', title: 'Technical Excellence', desc: 'We never cut corners. Our engineers are hands-on experts who write clean, tested, and scalable code.' },
  { icon: '🤝', title: 'True Partnership', desc: 'We see ourselves as extensions of your team. Long-term relationships are the foundation of our business.' },
  { icon: '⚡', title: 'Speed & Agility', desc: 'Fast iteration cycles with transparent communication. We deliver MVPs quickly and improve continuously.' },
  { icon: '🌍', title: 'Global Compliance', desc: 'Deep expertise in ZATCA, GDPR, and regional regulations. We keep you compliant everywhere you operate.' },
  { icon: '📈', title: 'Continuous Growth', desc: 'We invest in upskilling, research, and emerging technologies so your solutions never become outdated.' },
]

const TEAM_STATS = [
  { num: 8, suffix: '+', label: 'Years in Business' },
  { num: 50, suffix: '+', label: 'Enterprise Clients' },
  { num: 120, suffix: '+', label: 'Projects Shipped' },
  { num: 25, suffix: '+', label: 'Tech Experts' },
]

const EXPERTISE = [
  'ZATCA & E-Invoicing', 'Oracle Cloud OIC', 'Cloudflare Enterprise',
  'React & Next.js', 'Node.js & APIs', 'Java Spring Boot',
  'TypeScript', 'DevOps & CI/CD', 'Microservices', 'Cloud Architecture',
  'API Integration', 'Database Design',
]

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '', budget: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent')
  }

  if (status === 'sent') return (
    <div style={{ textAlign: 'center', padding: '60px 40px' }}>
      <div style={{ fontSize: '3rem', marginBottom: 16, animation: 'float 2s ease-in-out infinite' }}>✅</div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: 12 }}>Message Received!</h3>
      <p style={{ color: 'var(--gray)' }}>Our team will respond within 24 hours. Check your email for confirmation.</p>
      <button onClick={() => setStatus('idle')} className="btn btn-ghost" style={{ marginTop: 24 }}>Send Another Message</button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
        className="form-row">
        <div className="form-group">
          <label className="form-label">Full Name *</label>
          <input className="form-input" name="name" required value={form.name} onChange={handleChange} placeholder="John Smith" />
        </div>
        <div className="form-group">
          <label className="form-label">Work Email *</label>
          <input className="form-input" type="email" name="email" required value={form.email} onChange={handleChange} placeholder="john@company.com" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
        className="form-row">
        <div className="form-group">
          <label className="form-label">Company</label>
          <input className="form-input" name="company" value={form.company} onChange={handleChange} placeholder="Your Company Ltd." />
        </div>
        <div className="form-group">
          <label className="form-label">Service Needed</label>
          <select className="form-input" name="service" value={form.service} onChange={handleChange}>
            <option value="">Select a service...</option>
            <option>ZATCA E-Invoicing</option>
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

      <div className="form-group">
        <label className="form-label">Budget Range</label>
        <select className="form-input" name="budget" value={form.budget} onChange={handleChange}>
          <option value="">Select budget range...</option>
          <option>$5,000 – $15,000</option>
          <option>$15,000 – $50,000</option>
          <option>$50,000 – $150,000</option>
          <option>$150,000+</option>
          <option>Let's discuss</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Tell Us About Your Project *</label>
        <textarea className="form-input" name="message" required rows={5} value={form.message} onChange={handleChange}
          placeholder="Describe your project, challenges, timeline, and any specific requirements..." />
      </div>

      <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', padding: '16px' }}
        disabled={status === 'sending'}>
        {status === 'sending' ? '⏳ Sending...' : '🚀 Send Message & Get Free Quote'}
      </button>
      <p style={{ textAlign: 'center', color: 'var(--gray)', fontSize: '0.8rem' }}>
        We respond within 24 hours. Your information is 100% confidential.
      </p>

      <style>{`
        .form-label { display: block; font-family: var(--font-display); font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--gray); margin-bottom: 8px; }
        .form-input {
          width: 100%; background: var(--dark); border: 1px solid var(--border-light); border-radius: 8px;
          padding: 13px 16px; color: var(--white); font-family: var(--font-body); font-size: 0.9rem;
          transition: all 0.2s; outline: none; resize: vertical;
        }
        .form-input::placeholder { color: var(--gray); }
        .form-input:focus { border-color: var(--green); box-shadow: 0 0 0 3px var(--green-dim); }
        select.form-input option { background: var(--dark2); }
        @media (max-width: 580px) { .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </form>
  )
}

export default function About() {
  useScrollReveal()

  return (
    <>
      <Helmet>
        <title>About Us — Trionexium Technologies | Enterprise Tech Partner</title>
        <meta name="description" content="Learn about Trionexium Technologies — 8+ years of enterprise technology excellence. 50+ clients, 120+ projects. ZATCA, cloud, and full-stack experts." />
        <link rel="canonical" href="https://trionexiumtechnologies.com/about" />
      </Helmet>

      <div className="page-wrapper">
        {/* ── Hero ── */}
        <section className="inner-hero" style={{ paddingTop: 100, paddingBottom: 80 }}>
          <div className="grid-bg" />
          <div className="orb orb-green" style={{ width: 600, height: 400, top: '-100px', left: '50%', transform: 'translateX(-50%)' }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Our Story</div>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', textAlign: 'center' }}>
              Building the <span>Future</span> of Enterprise Tech
            </h1>
            <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
              We are a team of passionate engineers, architects, and consultants dedicated to solving the most complex technology challenges faced by enterprises today.
            </p>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="section-sm" style={{ background: 'var(--dark2)' }}>
          <div className="container">
            <div className="stats-grid reveal">
              {TEAM_STATS.map((s, i) => (
                <div className="stat-item" key={i}>
                  <div className="stat-number"><AnimatedCounter target={s.num} suffix={s.suffix} /></div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About Content ── */}
        <section className="section" style={{ background: 'var(--black)' }}>
          <div className="grid-bg" />
          <div className="container">
            <div className="about-grid">
              <div>
                <div className="section-tag reveal-left">Who We Are</div>
                <h2 className="section-title reveal-left delay-1">
                  More Than Just a <span>Tech Company</span>
                </h2>
                <p className="reveal-left delay-2" style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 20, fontSize: '0.9375rem' }}>
                  Trionexium Technologies was founded with a single purpose: to bridge the gap between complex enterprise technology requirements and real-world business outcomes. We don't just write code — we solve business problems with technology.
                </p>
                <p className="reveal-left delay-3" style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 28, fontSize: '0.9375rem' }}>
                  With deep expertise in ZATCA compliance, Oracle Cloud, Cloudflare infrastructure, and the full JavaScript/TypeScript/Java ecosystem, we serve enterprises across the Middle East, Europe, and globally.
                </p>
                <div className="reveal-left delay-4">
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray)', fontWeight: 600, marginBottom: 14 }}>Core Expertise</p>
                  <div className="tech-pills">
                    {EXPERTISE.map(e => <span key={e} className="tech-pill">{e}</span>)}
                  </div>
                </div>
              </div>

              <div>
                {/* Mission card */}
                <div className="card reveal-right" style={{ marginBottom: 20 }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '2rem', width: 52, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--green-dim)', borderRadius: 12, border: '1px solid var(--border)', flexShrink: 0 }}>🎯</div>
                    <div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 8, fontFamily: 'var(--font-display)' }}>Our Mission</h3>
                      <p style={{ color: 'var(--gray)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                        To empower enterprises with technology solutions that are reliable, scalable, and built to last — enabling our clients to focus on what they do best.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card reveal-right delay-2" style={{ marginBottom: 20 }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '2rem', width: 52, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--green-dim)', borderRadius: 12, border: '1px solid var(--border)', flexShrink: 0 }}>🔭</div>
                    <div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 8, fontFamily: 'var(--font-display)' }}>Our Vision</h3>
                      <p style={{ color: 'var(--gray)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                        To be the most trusted technology partner for enterprises in the Middle East and beyond, known for delivering transformative digital solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card reveal-right delay-3" style={{ background: 'linear-gradient(135deg, #0d1a05 0%, #111118 100%)', borderColor: 'rgba(109,199,38,0.2)' }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '2rem', width: 52, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--green)', borderRadius: 12, flexShrink: 0 }}>⭐</div>
                    <div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 8, fontFamily: 'var(--font-display)' }}>Our Promise</h3>
                      <p style={{ color: 'var(--gray)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                        99% client satisfaction. We don't close a project until you're completely happy with the results. No hidden costs, no surprises.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="section" style={{ background: 'var(--dark)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="section-tag reveal" style={{ justifyContent: 'center' }}>Core Values</div>
              <h2 className="section-title reveal delay-1" style={{ textAlign: 'center' }}>What Drives <span>Us</span></h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="values-grid">
              {VALUES.map((v, i) => (
                <div key={i} className={`value-card reveal delay-${(i % 3) + 1}`}>
                  <div className="value-icon">{v.icon}</div>
                  <div>
                    <h3>{v.title}</h3>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .values-grid { grid-template-columns: 1fr 1fr !important; } }
            @media (max-width: 580px) { .values-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ── Contact Form ── */}
        <section className="section" id="contact" style={{ background: 'var(--black)' }}>
          <div className="grid-bg" />
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 60, alignItems: 'start' }} className="contact-grid">
              <div>
                <div className="section-tag reveal-left">Contact Us</div>
                <h2 className="section-title reveal-left delay-1">
                  Get Your <span>Free</span> Quote
                </h2>
                <p className="reveal-left delay-2" style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 36, fontSize: '0.9375rem' }}>
                  Tell us about your project and we'll put together a custom proposal within 24 hours. No commitment required.
                </p>

                {[
                  { icon: '📧', label: 'Email', val: 'info@trionexiumtechnologies.com' },
                  { icon: '🌐', label: 'Website', val: 'trionexiumtechnologies.com' },
                  { icon: '⏰', label: 'Response Time', val: 'Within 24 hours' },
                  { icon: '🗺', label: 'Service Area', val: 'Middle East & Global' },
                ].map((item, i) => (
                  <div key={i} className={`reveal-left delay-${i + 3}`} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 20 }}>
                    <div style={{ fontSize: '1.25rem', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--green-dim)', borderRadius: 10, border: '1px solid var(--border)', flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: 2 }}>{item.label}</p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--white)' }}>{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card reveal-right" style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 4, fontFamily: 'var(--font-display)' }}>Send Us a Message</h3>
                <p style={{ color: 'var(--gray)', fontSize: '0.875rem', marginBottom: 28 }}>Fill out the form and we'll get back to you within 24 hours.</p>
                <ContactForm />
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
          `}</style>
        </section>
      </div>
    </>
  )
}
