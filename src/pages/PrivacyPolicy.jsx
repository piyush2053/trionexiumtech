import { Helmet } from 'react-helmet-async'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function PrivacyPolicy() {
  useScrollReveal()

  return (
    <>
      <Helmet>
        <title>Privacy Policy — Trionexium Technologies</title>
        <meta name="description" content="Privacy Policy for Trionexium Technologies. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://trionexiumtechnologies.com/privacy" />
      </Helmet>

      <div className="page-wrapper">
        <section className="inner-hero" style={{ paddingBottom: 40 }}>
          <div className="grid-bg" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Legal</div>
            <h1 className="section-title" style={{ textAlign: 'center', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Privacy <span>Policy</span>
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
                At <strong>Trionexium Technologies</strong>, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our technology services. Please read this carefully.
              </p>

              <h2>1. Information We Collect</h2>
              <h3>Personal Information You Provide</h3>
              <p>When you contact us, request a quote, or engage our services, we may collect:</p>
              <ul>
                <li>Name, email address, and phone number</li>
                <li>Company name, job title, and industry</li>
                <li>Project details and business requirements</li>
                <li>Billing information and payment details</li>
                <li>Communications and correspondence history</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>When you visit our website, we automatically collect:</p>
              <ul>
                <li>IP address and browser type</li>
                <li>Pages visited and time spent</li>
                <li>Referring website URLs</li>
                <li>Device type and operating system</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, operate, and improve our technology services</li>
                <li>Respond to inquiries and process quote requests</li>
                <li>Send project updates, invoices, and communications</li>
                <li>Analyze website usage to improve user experience</li>
                <li>Comply with legal obligations and regulatory requirements</li>
                <li>Prevent fraud and ensure platform security</li>
                <li>Send occasional marketing communications (with your consent)</li>
              </ul>

              <h2>3. Information Sharing & Disclosure</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul>
                <li><strong>Service Providers:</strong> Trusted third-party vendors (hosting, analytics, payment processing) who assist in our operations and are bound by confidentiality agreements</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of business assets</li>
                <li><strong>Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul>
                <li>SSL/TLS encryption for all data transmission</li>
                <li>Encrypted storage of sensitive data</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and employee training</li>
                <li>Incident response procedures</li>
              </ul>
              <p>
                While we take strong measures to protect your data, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security.
              </p>

              <h2>5. Cookies & Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website. Types of cookies we use:
              </p>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand website traffic and usage patterns (e.g., Google Analytics)</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p>You can control cookies through your browser settings. Disabling cookies may affect some website functionality.</p>

              <h2>6. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, maintain business records, and comply with legal obligations. Client project data is typically retained for 7 years for accounting and legal purposes. You may request deletion of your data at any time, subject to our legal retention obligations.
              </p>

              <h2>7. Your Rights</h2>
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data in a machine-readable format</li>
                <li><strong>Objection:</strong> Object to certain processing of your information</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw consent for marketing communications at any time</li>
              </ul>
              <p>To exercise any of these rights, contact us at <a href="mailto:privacy@trionexiumtechnologies.com">privacy@trionexiumtechnologies.com</a>.</p>

              <h2>8. International Data Transfers</h2>
              <p>
                If you access our services from outside our primary operating region, your information may be transferred to and processed in different countries. We ensure appropriate safeguards are in place for such transfers in compliance with applicable data protection laws.
              </p>

              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, please contact us immediately and we will promptly delete it.
              </p>

              <h2>10. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>

              <h2>11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically. Continued use of our services after changes are posted constitutes acceptance of the updated policy.
              </p>

              <h2>12. Contact Us</h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <p>
                <strong>Trionexium Technologies — Privacy Team</strong><br />
                Email: <a href="mailto:privacy@trionexiumtechnologies.com">privacy@trionexiumtechnologies.com</a><br />
                Website: <a href="https://trionexiumtechnologies.com">trionexiumtechnologies.com</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
