import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import {
  ClipboardList, Cloud, Code2, Settings, Rocket,
  FileText, Shield, Database, Cpu, Server, Coffee,
  Wrench, ChevronRight, Star,
} from 'lucide-react'

// Category header icons
const CATEGORY_ICONS = {
  compliance: <ClipboardList size={16} color="var(--green)" />,
  cloud:      <Cloud         size={16} color="var(--green)" />,
  frontend:   <Code2         size={16} color="var(--green)" />,
  backend:    <Settings      size={16} color="var(--green)" />,
  devops:     <Rocket        size={16} color="var(--green)" />,
}

// Service card large icons
const SERVICE_ICONS = {
  zatca:      <FileText size={28} color="var(--green)" />,
  cloudflare: <Shield   size={28} color="var(--green)" />,
  oracle:     <Database size={28} color="var(--green)" />,
  react:      <Cpu      size={28} color="var(--green)" />,
  node:       <Server   size={28} color="var(--green)" />,
  java:       <Coffee   size={28} color="var(--green)" />,
  devops:     <Wrench   size={28} color="var(--green)" />,
}

const SERVICES = [
  {
    category: 'Compliance & Regulatory',
    categoryIconKey: 'compliance',
    items: [
      {
        iconKey: 'zatca',
        title: 'ZATCA E-Invoicing',
        subtitle: 'Saudi Arabia Fatoorah Compliance',
        desc: 'Complete ZATCA Phase 1 & Phase 2 e-invoicing compliance solutions for businesses operating in Saudi Arabia. We handle the full lifecycle — from system integration and XML generation to clearance, reporting, and ZATCA portal connectivity.',
        features: [
          'Phase 1 & Phase 2 implementation',
          'XML invoice generation (UBL 2.1)',
          'ZATCA portal integration & clearance',
          'Cryptographic stamp & QR code',
          'Archiving & audit trail',
          'B2B, B2C, B2G invoice types',
          'ERP integration (SAP, Oracle)',
          'Ongoing compliance monitoring',
        ],
        techs: ['XML/UBL', 'REST API', 'PKI/HSM', 'Oracle ERP', 'SAP', 'Java', 'Node.js'],
        highlight: true,
      },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    categoryIconKey: 'cloud',
    items: [
      {
        iconKey: 'cloudflare',
        title: 'Cloudflare Services',
        subtitle: 'Enterprise CDN, Security & Edge Computing',
        desc: 'Full Cloudflare implementation and management — from enterprise CDN setup and DDoS mitigation to Zero Trust network access, Workers edge functions, and comprehensive WAF policies.',
        features: [
          'Enterprise CDN & performance optimization',
          'DDoS mitigation & bot management',
          'Web Application Firewall (WAF)',
          'Cloudflare Zero Trust (ZTNA)',
          'Workers & Pages edge deployments',
          'DNS management & SSL/TLS',
          'Load balancing & failover',
          'Analytics & security dashboards',
        ],
        techs: ['Cloudflare Workers', 'Wrangler', 'WAF Rules', 'Terraform', 'Zero Trust', 'Argo'],
        highlight: false,
      },
      {
        iconKey: 'oracle',
        title: 'Oracle Cloud OIC',
        subtitle: 'Oracle Integration Cloud Platform',
        desc: 'Enterprise Oracle Integration Cloud (OIC) solutions for complex business process automation and system connectivity. We design, build, and maintain integration flows that connect your Oracle applications with any third-party system.',
        features: [
          'Oracle OIC design & development',
          'ERP Cloud & HCM integrations',
          'Process automation workflows',
          'REST & SOAP adapter configuration',
          'File-based & event-driven integrations',
          'Error handling & monitoring',
          'Oracle ATP & DB connectivity',
          'Migration from SOA Suite to OIC',
        ],
        techs: ['Oracle OIC', 'REST', 'SOAP', 'Oracle DB', 'JMS', 'Oracle ERP', 'FTP/SFTP'],
        highlight: false,
      },
    ],
  },
  {
    category: 'Frontend Development',
    categoryIconKey: 'frontend',
    items: [
      {
        iconKey: 'react',
        title: 'React & Next.js',
        subtitle: 'Modern Frontend Applications',
        desc: 'High-performance, SEO-friendly web applications built with React ecosystem. From single-page applications and admin dashboards to full-stack Next.js portals with server-side rendering and static generation.',
        features: [
          'React 18 with hooks & context',
          'Next.js SSR/SSG/ISR applications',
          'TypeScript for type safety',
          'Component library development',
          'Redux / Zustand state management',
          'Testing with Jest & Playwright',
          'Performance optimization',
          'Accessible & responsive design',
        ],
        techs: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Redux', 'Jest', 'Vitest'],
        highlight: false,
      },
    ],
  },
  {
    category: 'Backend Development',
    categoryIconKey: 'backend',
    items: [
      {
        iconKey: 'node',
        title: 'Node.js & APIs',
        subtitle: 'Scalable Backend & Microservices',
        desc: 'Production-ready Node.js backends — RESTful APIs, GraphQL endpoints, WebSocket real-time systems, and microservice architectures. Built for scale with proper testing, monitoring, and DevOps pipelines.',
        features: [
          'REST API design & development',
          'GraphQL API development',
          'Microservices architecture',
          'Real-time with WebSockets',
          'Authentication (JWT, OAuth2)',
          'PostgreSQL, MongoDB, Redis',
          'API documentation (Swagger)',
          'Docker & Kubernetes deployment',
        ],
        techs: ['Node.js', 'Express', 'Fastify', 'GraphQL', 'PostgreSQL', 'Redis', 'Docker', 'K8s'],
        highlight: false,
      },
      {
        iconKey: 'java',
        title: 'Java Enterprise',
        subtitle: 'Spring Boot & Enterprise Applications',
        desc: 'Enterprise-grade Java applications with Spring Boot, Spring Security, and the full JVM ecosystem. Ideal for mission-critical systems requiring performance, reliability, and long-term maintainability.',
        features: [
          'Spring Boot microservices',
          'Spring Security & OAuth2',
          'JPA / Hibernate ORM',
          'Maven / Gradle builds',
          'JMS / Apache Kafka messaging',
          'Oracle & MySQL integration',
          'Swagger API documentation',
          'Unit & integration testing',
        ],
        techs: ['Java 17+', 'Spring Boot', 'Spring Security', 'JPA', 'Kafka', 'Maven', 'JUnit'],
        highlight: false,
      },
    ],
  },
  {
    category: 'DevOps & Architecture',
    categoryIconKey: 'devops',
    items: [
      {
        iconKey: 'devops',
        title: 'DevOps & CI/CD',
        subtitle: 'Cloud Infrastructure & Automation',
        desc: 'End-to-end DevOps transformation — CI/CD pipeline setup, infrastructure as code, containerization, and cloud deployment on AWS, Azure, GCP, or Oracle Cloud.',
        features: [
          'CI/CD with GitHub Actions, Jenkins',
          'Docker containerization',
          'Kubernetes orchestration',
          'Infrastructure as Code (Terraform)',
          'AWS / Azure / GCP deployment',
          'Monitoring with Grafana & Prometheus',
          'Log management with ELK stack',
          'Security scanning & compliance',
        ],
        techs: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'AWS', 'Azure', 'Prometheus'],
        highlight: false,
      },
    ],
  },
]

export default function Services() {
  useScrollReveal()

  return (
    <>
      <Helmet>
        <title>Services — Trionexium Technologies | ZATCA, Cloud, Full-Stack</title>
        <meta name="description" content="Explore Trionexium Technologies' full range of services: ZATCA e-invoicing, Cloudflare security, Oracle Cloud OIC, React, Node.js, Java enterprise, and DevOps solutions." />
        <meta name="keywords" content="ZATCA services, Cloudflare implementation, Oracle OIC integration, React development, Node.js API, Java Spring Boot, DevOps cloud" />
        <link rel="canonical" href="https://trionexiumtechnologies.com/services" />
      </Helmet>

      <div className="page-wrapper">

        {/* ── Inner Hero ── */}
        <section className="inner-hero">
          <div className="grid-bg" />
          <div className="orb orb-green" style={{ width: 500, height: 300, top: '-50px', left: '50%', transform: 'translateX(-50%)' }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>What We Offer</div>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', textAlign: 'center' }}>
              Our <span>Technology</span> Services
            </h1>
            <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
              Enterprise-grade solutions across compliance, cloud, and full-stack development. Built by experts, delivered with precision.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
              <Link to="/about" className="btn btn-primary">
                Get Free Quote <ChevronRight size={16} style={{ display: 'inline', verticalAlign: 'middle' }} />
              </Link>
              <Link to="/about" className="btn btn-outline">Talk to an Expert</Link>
            </div>
          </div>
        </section>

        {/* ── Service Categories ── */}
        {SERVICES.map((cat, ci) => (
          <section key={ci} className="section" style={{ background: ci % 2 === 0 ? 'var(--black)' : 'var(--dark)' }}>
            {ci % 2 === 0 && <div className="grid-bg" />}
            <div className="container">

              <div className="reveal" style={{ marginBottom: 48 }}>
                <div className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  {CATEGORY_ICONS[cat.categoryIconKey]}
                  {cat.category}
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: cat.items.length === 1 ? '1fr' : 'repeat(auto-fit, minmax(500px, 1fr))',
                gap: 24,
              }}>
                {cat.items.map((svc, si) => (
                  <div
                    key={si}
                    className={`service-detail-card reveal delay-${si + 1} ${svc.highlight ? 'highlighted-service' : ''}`}
                    style={svc.highlight ? { borderColor: 'rgba(109,199,38,0.3)', background: 'linear-gradient(135deg, #111118 0%, #0d1a05 100%)' } : {}}
                  >
                    <div className="service-detail-header">
                      <div className="service-icon-lg">
                        {SERVICE_ICONS[svc.iconKey]}
                      </div>
                      <div>
                        <h2 className="service-detail-title">{svc.title}</h2>
                        <div className="service-detail-sub">{svc.subtitle}</div>
                        {svc.highlight && (
                          <span className="badge badge-green" style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                            <Star size={12} fill="currentColor" /> Most Popular
                          </span>
                        )}
                      </div>
                    </div>

                    <p style={{ color: 'var(--gray)', fontSize: '0.9375rem', lineHeight: 1.75, marginBottom: 24 }}>
                      {svc.desc}
                    </p>

                    <div className="service-features">
                      {svc.features.map((f, fi) => (
                        <div key={fi} className="feature-item">{f}</div>
                      ))}
                    </div>

                    <div style={{ marginTop: 28 }}>
                      <p style={{ fontSize: '0.8rem', color: 'var(--gray)', fontFamily: 'var(--font-display)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12, fontWeight: 600 }}>
                        Tech Stack
                      </p>
                      <div className="tech-pills">
                        {svc.techs.map(t => <span key={t} className="tech-pill">{t}</span>)}
                      </div>
                    </div>

                    <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--border-light)', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                      <Link to="/about" className="btn btn-primary" style={{ padding: '11px 24px', fontSize: '0.875rem' }}>
                        Get Quote <ChevronRight size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
                      </Link>
                      <Link to="/about" className="btn btn-outline" style={{ padding: '11px 24px', fontSize: '0.875rem' }}>
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <style>{`
              @media (max-width: 768px) {
                [style*="minmax(500px"] { grid-template-columns: 1fr !important; }
              }
            `}</style>
          </section>
        ))}

        {/* ── CTA ── */}
        <section className="cta-section" style={{ background: 'var(--dark)' }}>
          <div className="container">
            <div className="cta-box reveal-scale">
              <div className="section-tag" style={{ justifyContent: 'center' }}>Let's Build</div>
              <h2 className="section-title">
                Don't See What You <span>Need?</span>
              </h2>
              <p>We handle custom technology challenges. Tell us your problem — we'll engineer the solution.</p>
              <div className="cta-btns">
                <Link to="/about" className="btn btn-primary">
                  Talk to Our Team <ChevronRight size={16} style={{ display: 'inline', verticalAlign: 'middle' }} />
                </Link>
                <Link to="/about" className="btn btn-outline">View Case Studies</Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}