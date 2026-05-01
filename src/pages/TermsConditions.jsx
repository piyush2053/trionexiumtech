import { Helmet } from 'react-helmet-async'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function TermsConditions() {
  useScrollReveal()

  return (
    <>
      <Helmet>
        <title>Terms & Conditions — Trionexium Technologies</title>
        <meta name="description" content="Terms and Conditions for Trionexium Technologies services. Read our terms of service, usage policies, and legal agreements." />
        <link rel="canonical" href="https://trionexiumtechnologies.com/terms" />
      </Helmet>

      <div className="page-wrapper">
        <section className="inner-hero" style={{ paddingBottom: 40 }}>
          <div className="grid-bg" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Legal</div>
            <h1 className="section-title" style={{ textAlign: 'center', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Terms & <span>Conditions</span>
            </h1>
            <p style={{ color: 'var(--gray)', textAlign: 'center', fontSize: '0.9rem' }}>
              Last updated: January 1, 2025
            </p>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--dark)', paddingTop: 40 }}>
          <div className="container">
            <div className="prose reveal">
              <p>
                Welcome to <strong>Trionexium Technologies</strong> ("Company," "we," "us," or "our"). By accessing or using our website at <a href="https://trionexiumtechnologies.com">trionexiumtechnologies.com</a> and our technology services, you agree to be bound by these Terms and Conditions. Please read them carefully.
              </p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services provided by Trionexium Technologies, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, clients, and others who access or use our services.
              </p>

              <h2>2. Description of Services</h2>
              <p>Trionexium Technologies provides the following technology services:</p>
              <ul>
                <li>ZATCA e-invoicing compliance solutions and integration</li>
                <li>Cloudflare security, CDN, and infrastructure services</li>
                <li>Oracle Cloud OIC integration and consulting</li>
                <li>Full-stack software development (React, Node.js, TypeScript, Java)</li>
                <li>DevOps, cloud architecture, and infrastructure management</li>
                <li>Technical consulting and enterprise advisory services</li>
              </ul>
              <p>We reserve the right to modify, suspend, or discontinue any service at any time with reasonable notice to existing clients.</p>

              <h2>3. Client Obligations</h2>
              <p>As a client or user of our services, you agree to:</p>
              <ul>
                <li>Provide accurate, current, and complete information as required for service delivery</li>
                <li>Maintain the confidentiality of any account credentials or API keys provided</li>
                <li>Use our services only for lawful purposes and in compliance with all applicable laws</li>
                <li>Not attempt to reverse-engineer, copy, or reproduce any proprietary methods or code</li>
                <li>Pay for services as agreed in the applicable Statement of Work or contract</li>
                <li>Promptly notify us of any security breaches or unauthorized use of our services</li>
              </ul>

              <h2>4. Intellectual Property</h2>
              <p>
                All intellectual property rights in our proprietary tools, frameworks, methodologies, and processes remain with Trionexium Technologies. Custom software developed specifically for a client under a paid engagement becomes the property of the client upon full payment, as specified in the applicable project agreement.
              </p>
              <p>
                You may not copy, reproduce, distribute, or create derivative works of our proprietary tools, website content, or documentation without explicit written permission.
              </p>

              <h2>5. Confidentiality & NDA</h2>
              <p>
                We take confidentiality seriously. All client information, business data, technical specifications, and project details shared with Trionexium Technologies are treated as strictly confidential. We will not disclose your information to third parties without your consent, except as required by law. We are happy to sign Non-Disclosure Agreements (NDAs) prior to any project engagement.
              </p>

              <h2>6. Payment Terms</h2>
              <p>
                Payment terms are specified in individual project proposals and Statements of Work (SoW). Generally:
              </p>
              <ul>
                <li>A deposit (typically 30–50%) is required before work commences</li>
                <li>Milestone payments are invoiced upon completion of agreed deliverables</li>
                <li>Final payment is due upon project delivery and client acceptance</li>
                <li>Invoices are due within 30 days of issuance unless otherwise agreed</li>
                <li>Late payments may incur interest at 1.5% per month</li>
              </ul>

              <h2>7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Trionexium Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from or related to your use of our services.
              </p>
              <p>
                Our total liability to any client for any claim arising from our services shall not exceed the total fees paid by the client for the specific service giving rise to the claim in the three months preceding the event.
              </p>

              <h2>8. Warranties & Disclaimers</h2>
              <p>
                We warrant that our services will be performed with reasonable skill and care. However, services are provided "as is" to the extent permitted by law. We do not warrant that our services will be uninterrupted or error-free, or that defects will always be corrected immediately.
              </p>
              <p>
                Regulatory compliance (such as ZATCA) depends on accurate information provided by the client. We are not liable for compliance failures resulting from incorrect data or changes in regulations not communicated to us.
              </p>

              <h2>9. Termination</h2>
              <p>
                Either party may terminate a service engagement with 30 days written notice. In the event of material breach, the non-breaching party may terminate immediately upon written notice. Upon termination, the client shall pay for all work completed up to the termination date. We will provide all client data and deliverables upon request.
              </p>

              <h2>10. Governing Law & Dispute Resolution</h2>
              <p>
                These Terms are governed by applicable laws. Any disputes arising from these Terms or our services shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to binding arbitration. The parties waive their right to a jury trial.
              </p>

              <h2>11. Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>

              <h2>12. Contact Information</h2>
              <p>
                For questions about these Terms and Conditions, please contact us at:
              </p>
              <p>
                <strong>Trionexium Technologies</strong><br />
                Email: <a href="mailto:legal@trionexiumtechnologies.com">legal@trionexiumtechnologies.com</a><br />
                Website: <a href="https://trionexiumtechnologies.com">trionexiumtechnologies.com</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
