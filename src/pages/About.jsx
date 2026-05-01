import { Helmet } from 'react-helmet-async'
import { useQuoteModal } from '../contexts/QuoteModalContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'
import {
  Target, FlaskConical, Handshake, Zap, Globe2, TrendingUp,
  Telescope, Star, Mail, Globe, Clock, Map,
  Check, ChevronRight, Rocket, X, CalendarCheck, MessageSquare,
} from 'lucide-react'

const VALUES = [
  { icon: <Target      size={20} color="var(--green)" />, title: 'Mission-Driven',       desc: 'Every project we take on is treated as our own mission. We care deeply about outcomes, not just outputs.' },
  { icon: <FlaskConical size={20} color="var(--green)" />, title: 'Technical Excellence', desc: 'We never cut corners. Our engineers are hands-on experts who write clean, tested, and scalable code.' },
  { icon: <Handshake   size={20} color="var(--green)" />, title: 'True Partnership',      desc: 'We see ourselves as extensions of your team. Long-term relationships are the foundation of our business.' },
  { icon: <Zap         size={20} color="var(--green)" />, title: 'Speed & Agility',       desc: 'Fast iteration cycles with transparent communication. We deliver MVPs quickly and improve continuously.' },
  { icon: <Globe2      size={20} color="var(--green)" />, title: 'Global Compliance',     desc: 'Deep expertise in ZATCA, GDPR, and regional regulations. We keep you compliant everywhere you operate.' },
  { icon: <TrendingUp  size={20} color="var(--green)" />, title: 'Continuous Growth',     desc: 'We invest in upskilling, research, and emerging technologies so your solutions never become outdated.' },
]

const TEAM_STATS = [
  { num: 8,   suffix: '+', label: 'Years in Business' },
  { num: 50,  suffix: '+', label: 'Enterprise Clients' },
  { num: 120, suffix: '+', label: 'Projects Shipped' },
  { num: 25,  suffix: '+', label: 'Tech Experts' },
]

const EXPERTISE = [
  'ZATCA & E-Invoicing', 'Oracle Cloud OIC', 'Cloudflare Enterprise',
  'React & Next.js', 'Node.js & APIs', 'Java Spring Boot',
  'TypeScript', 'DevOps & CI/CD', 'Microservices', 'Cloud Architecture',
  'API Integration', 'Database Design',
]

const CONTACT_INFO = [
  { icon: <Mail  size={18} color="var(--green)" />, label: 'Email',         val: 'info@trionexiumtechnologies.com' },
  { icon: <Globe size={18} color="var(--green)" />, label: 'Website',       val: 'trionexiumtechnologies.com' },
  { icon: <Clock size={18} color="var(--green)" />, label: 'Response Time', val: 'Within 24 hours' },
  { icon: <Map   size={18} color="var(--green)" />, label: 'Service Area',  val: 'Middle East & Global' },
]

const MISSION_CARDS = [
  {
    icon:       <Target    size={22} color="var(--green)" />,
    iconBg:     'var(--green-dim)',
    iconBorder: 'var(--border)',
    title:      'Our Mission',
    desc:       'To empower enterprises with technology solutions that are reliable, scalable, and built to last — enabling our clients to focus on what they do best.',
    cardStyle:  {},
  },
  {
    icon:       <Telescope size={22} color="var(--green)" />,
    iconBg:     'var(--green-dim)',
    iconBorder: 'var(--border)',
    title:      'Our Vision',
    desc:       'To be the most trusted technology partner for enterprises in the Middle East and beyond, known for delivering transformative digital solutions.',
    cardStyle:  {},
  },
  {
    icon:       <Star      size={22} color="var(--black)" />,
    iconBg:     'var(--green)',
    iconBorder: 'transparent',
    title:      'Our Promise',
    desc:       '99% client satisfaction. We don\'t close a project until you\'re completely happy with the results. No hidden costs, no surprises.',
    cardStyle:  { background: 'linear-gradient(135deg, #0d1a05 0%, #111118 100%)', borderColor: 'rgba(109,199,38,0.2)' },
  },
]

const QUOTE_CHECKLIST = [
  'Free Technical Consultation',
  'Custom Solution Design',
  'No Obligation Quote',
  'Fast 24hr Response',
  'NDA & Confidentiality',
]

export default function About() {
  useScrollReveal()
  const { openQuoteModal } = useQuoteModal()

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
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray)', fontWeight: 600, marginBottom: 14 }}>
                    Core Expertise
                  </p>
                  <div className="tech-pills">
                    {EXPERTISE.map(e => <span key={e} className="tech-pill">{e}</span>)}
                  </div>
                </div>
              </div>

              <div>
                {MISSION_CARDS.map((mc, i) => (
                  <div
                    key={i}
                    className={`card reveal-right${i > 0 ? ` delay-${i + 1}` : ''}`}
                    style={{ marginBottom: i < MISSION_CARDS.length - 1 ? 20 : 0, ...mc.cardStyle }}
                  >
                    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <div style={{
                        width: 52, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: mc.iconBg, borderRadius: 12, border: `1px solid ${mc.iconBorder}`, flexShrink: 0,
                      }}>
                        {mc.icon}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 8, fontFamily: 'var(--font-display)' }}>
                          {mc.title}
                        </h3>
                        <p style={{ color: 'var(--gray)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                          {mc.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
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

                {CONTACT_INFO.map((item, i) => (
                  <div key={i} className={`reveal-left delay-${i + 3}`} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 20 }}>
                    <div style={{
                      width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'var(--green-dim)', borderRadius: 10, border: '1px solid var(--border)', flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: 2 }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--white)' }}>{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card reveal-right" style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 4, fontFamily: 'var(--font-display)' }}>
                  Send Us a Message
                </h3>
                <p style={{ color: 'var(--gray)', fontSize: '0.875rem', marginBottom: 28 }}>
                  Fill out the form in the popup and we'll get back to you within 24 hours.
                </p>
                <button onClick={openQuoteModal} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Open Quote Form
                </button>
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