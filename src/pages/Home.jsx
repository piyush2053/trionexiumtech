import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useScrollReveal } from '../hooks/useScrollReveal'
import ParticleCanvas from '../components/ParticleCanvas'
import AnimatedCounter from '../components/AnimatedCounter'

const TECH_TAGS = [
  '⚡ ZATCA', '☁ Cloudflare', '🔷 Oracle Cloud', '🟨 JavaScript',
  '🔵 TypeScript', '🟢 Node.js', '⚛ React', '☕ Java', '🌐 OIC',
  '🔐 IAM', '📦 Docker', '🚀 DevOps', '💳 E-Invoicing', '🔗 API Integration',
]

const SERVICES_PREVIEW = [
  {
    icon: '🧾',
    tag: 'Compliance',
    title: 'ZATCA E-Invoicing',
    desc: 'Full Phase 1 & Phase 2 ZATCA compliance solutions. We handle integration, clearance, and reporting for Saudi Arabia e-invoicing mandates.',
    techs: ['Fatoorah', 'XML', 'API', 'PKI'],
  },
  {
    icon: '🔥',
    tag: 'Security & CDN',
    title: 'Cloudflare Services',
    desc: 'Enterprise CDN, DDoS protection, Zero Trust security, and Workers deployment. Keep your infrastructure fast and bulletproof.',
    techs: ['Workers', 'CDN', 'WAF', 'Zero Trust'],
  },
  {
    icon: '☁',
    tag: 'Integration',
    title: 'Oracle Cloud OIC',
    desc: 'Oracle Integration Cloud solutions for seamless enterprise connectivity. ERP integrations, API management, and business process automation.',
    techs: ['OIC', 'ERP', 'REST', 'SOAP'],
  },
  {
    icon: '⚛',
    tag: 'Frontend',
    title: 'React & TypeScript',
    desc: 'Modern, performant frontend applications built with React, TypeScript, and Next.js. Component libraries, dashboards, and portals.',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    icon: '🟢',
    tag: 'Backend',
    title: 'Node.js & APIs',
    desc: 'Scalable RESTful and GraphQL APIs, microservices architecture, real-time systems with WebSockets, and backend-for-frontend patterns.',
    techs: ['Node.js', 'Express', 'GraphQL', 'PostgreSQL'],
  },
  {
    icon: '☕',
    tag: 'Enterprise',
    title: 'Java Enterprise',
    desc: 'Robust Java-based enterprise solutions with Spring Boot, microservices, and JVM ecosystem. Mission-critical backend systems.',
    techs: ['Java', 'Spring Boot', 'Maven', 'JPA'],
  },
]

const STATS = [
  { num: 50, suffix: '+', label: 'Happy Clients' },
  { num: 120, suffix: '+', label: 'Projects Delivered' },
  { num: 8, suffix: '+', label: 'Years Experience' },
  { num: 99, suffix: '%', label: 'Client Satisfaction' },
]

const PROCESS = [
  { n: '01', title: 'Discovery', desc: 'We deeply understand your business goals, technical landscape, and project requirements.' },
  { n: '02', title: 'Architecture', desc: 'Our experts design a scalable, future-proof solution architecture tailored to your needs.' },
  { n: '03', title: 'Development', desc: 'Agile sprints with transparent communication. Quality code, tested and reviewed at every step.' },
  { n: '04', title: 'Delivery', desc: 'Smooth deployment, training, and ongoing support. We stay with you beyond go-live.' },
]

const CLIENTS = [
  'Aramco', 'STC Group', 'Maaden', 'SABIC', 'Al-Rajhi Bank', 'SAMBA Financial',
  'Mobily', 'Zain KSA', 'Almarai', 'Saudi Telecom', 'GOSI', 'ZATCA Authority',
  'Riyad Bank', 'National Guard', 'Saudi Post', 'Tasnee', 'Saudi Aramco', 'SASO',
]

export default function Home() {
  useScrollReveal()
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
        <title>Trionexium Technologies — ZATCA, Cloud & Full-Stack Solutions</title>
        <meta name="description" content="Trionexium Technologies delivers ZATCA e-invoicing, Cloudflare security, Oracle Cloud OIC, and full-stack development services. 50+ enterprise clients. Get a free quote today." />
        <meta name="keywords" content="ZATCA, e-invoicing, Cloudflare, Oracle OIC, React, Node.js, Java, TypeScript, cloud solutions, Saudi Arabia" />
        <meta property="og:title" content="Trionexium Technologies — Enterprise Tech Solutions" />
        <meta property="og:description" content="Trusted by 50+ enterprise clients. ZATCA compliance, cloud infrastructure, and cutting-edge development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trionexiumtechnologies.com" />
        <link rel="canonical" href="https://trionexiumtechnologies.com" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <ParticleCanvas />
        <div className="orb orb-green" style={{ width: 600, height: 600, top: '-100px', right: '-100px', animation: 'glow-pulse 4s ease-in-out infinite' }} />
        <div className="orb orb-blue" style={{ width: 400, height: 400, bottom: '0', left: '-100px', animation: 'glow-pulse 5s ease-in-out infinite 1s' }} />

        <div className="container">
          <div className="hero-content" style={{ maxWidth: 780 }}>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Now serving 50+ enterprise clients worldwide
            </div>

            <h1 className="hero-title">
              <span className="line"><span>Engineering</span></span>
              <span className="line"><span>Tomorrow's <span className="accent glow-text">Technology</span></span></span>
              <span className="line"><span>Solutions</span></span>
            </h1>

            <p className="hero-desc">
              From ZATCA e-invoicing compliance to Oracle Cloud OIC integrations, Cloudflare security to full-stack development — Trionexium Technologies is your end-to-end technology partner.
            </p>

            <div className="hero-btns">
              <button className="btn btn-primary" onClick={() => navigate('/services')}>
                Explore Services <span>→</span>
              </button>
              <button className="btn btn-outline" onClick={() => navigate('/about')}>
                Get Free Quote
              </button>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-line" />
          Scroll to explore
        </div>
      </section>

      {/* ── TECH TICKER ── */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {[...TECH_TAGS, ...TECH_TAGS].map((tag, i) => (
            <div className="ticker-item" key={i}>
              <span>◆</span> {tag}
            </div>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <section className="section-sm" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="stats-grid reveal">
            {STATS.map((s, i) => (
              <div className="stat-item" key={i}>
                <div className="stat-number">
                  <AnimatedCounter target={s.num} suffix={s.suffix} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="section" style={{ background: 'var(--black)' }}>
        <div className="grid-bg" />
        <div className="container">
          <div className="reveal">
            <div className="section-tag">What We Do</div>
            <h2 className="section-title">Our <span>Core Services</span></h2>
            <p className="section-sub" style={{ marginBottom: 56 }}>
              A full spectrum of technology services to accelerate your digital transformation and stay ahead of the curve.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES_PREVIEW.map((s, i) => (
              <div key={i} className={`card service-card reveal delay-${(i % 3) + 1}`}>
                <div className="icon-box">{s.icon}</div>
                <div className="tag">◆ {s.tag}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="tech-pills">
                  {s.techs.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>
                <Link to="/services" className="learn-more">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/services" className="btn btn-ghost">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY TRIONEXIUM ── */}
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}
            className="responsive-2col">
            <div>
              <div className="section-tag reveal-left">Why Choose Us</div>
              <h2 className="section-title reveal-left delay-1">
                Your Trusted <span>Technology</span> Partner
              </h2>
              <p className="section-sub reveal-left delay-2" style={{ marginBottom: 32 }}>
                With 8+ years of enterprise experience and 50+ clients served across the Middle East and globally, we bring deep technical expertise and business understanding to every engagement.
              </p>

              {[
                { icon: '⚡', title: 'Rapid Delivery', desc: 'Agile methodology ensures faster time-to-market without sacrificing quality.' },
                { icon: '🔒', title: 'Security-First', desc: 'Enterprise-grade security built into every solution from the ground up.' },
                { icon: '🌍', title: 'Global Standards', desc: 'Compliance with international and regional regulations including ZATCA, GDPR, and ISO.' },
                { icon: '🤝', title: 'Long-term Partnership', desc: 'We invest in your success. Ongoing support, scaling, and continuous improvement.' },
              ].map((item, i) => (
                <div key={i} className={`value-card reveal-left delay-${i + 2}`} style={{ marginBottom: 16 }}>
                  <div className="value-icon">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal-right" style={{ position: 'relative' }}>
              <div style={{
                background: 'var(--card)',
                border: '1px solid var(--border-light)',
                borderRadius: 20,
                padding: '40px 32px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: 'linear-gradient(90deg, var(--green), #00d4ff, var(--green))',
                  backgroundSize: '200% 100%',
                  animation: 'gradient-shift 3s ease infinite',
                }} />

                <div style={{ textAlign: 'center', marginBottom: 32 }}>
                  <div style={{ fontSize: '4rem', marginBottom: 12, animation: 'float 3s ease-in-out infinite' }}>🚀</div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: 8 }}>Ready to Start?</h3>
                  <p style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>Get a free project consultation and custom quote</p>
                </div>

                {[
                  ['✅', 'Free Technical Consultation'],
                  ['✅', 'Custom Solution Design'],
                  ['✅', 'No Obligation Quote'],
                  ['✅', 'Fast 24hr Response'],
                  ['✅', 'NDA & Confidentiality'],
                ].map(([icon, text]) => (
                  <div key={text} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14 }}>
                    <span style={{ color: 'var(--green)', fontSize: '1.1rem' }}>{icon}</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>{text}</span>
                  </div>
                ))}

                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 24 }}
                  onClick={() => navigate('/about')}>
                  Get Free Quote ↗
                </button>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .responsive-2col { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* ── PROCESS ── */}
      <section className="section" style={{ background: 'var(--black)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-tag reveal" style={{ justifyContent: 'center' }}>How We Work</div>
            <h2 className="section-title reveal delay-1" style={{ textAlign: 'center' }}>Our <span>Process</span></h2>
            <p className="section-sub reveal delay-2" style={{ margin: '0 auto', textAlign: 'center' }}>
              A proven 4-step process that ensures every project is delivered on time, on budget, and beyond expectations.
            </p>
          </div>

          <div className="process-grid reveal delay-3">
            {PROCESS.map((step, i) => (
              <div className="process-step" key={i}>
                <div className="step-number">{step.n}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section className="section-sm" style={{ background: 'var(--dark)', overflow: 'hidden' }}>
        <div className="container" style={{ marginBottom: 32, textAlign: 'center' }}>
          <div className="section-tag reveal" style={{ justifyContent: 'center' }}>Trusted By</div>
          <h2 className="section-title reveal delay-1" style={{ textAlign: 'center' }}>
            50+ <span>Enterprise Clients</span>
          </h2>
        </div>

        <div className="ticker-wrap" style={{ background: 'transparent', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', padding: '20px 0' }}>
          <div className="clients-track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <div key={i} className="client-logo">
                <span style={{ color: 'var(--green)', marginRight: 8 }}>◆</span> {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box reveal-scale">
            <div className="section-tag" style={{ justifyContent: 'center' }}>Start Today</div>
            <h2 className="section-title">
              Ready to <span>Transform</span> Your<br />Business With Technology?
            </h2>
            <p>
              Join 50+ enterprises who trust Trionexium Technologies for their most critical technology initiatives. Let's build something extraordinary together.
            </p>
            <div className="cta-btns">
              <button className="btn btn-primary" onClick={() => navigate('/about')}>
                Get Free Consultation ↗
              </button>
              <button className="btn btn-outline" onClick={() => navigate('/services')}>
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
