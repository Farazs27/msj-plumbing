import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact — MSJ Plumbing & Drainage Ltd',
  description: 'Call 01202 080 151 for 24/7 emergency plumbing in Poole, Bournemouth and Dorset. Or send us a message.',
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h1>Let&apos;s talk <em>before things get worse.</em></h1>
          <p className="page-hero-lead">
            For emergencies, call the 24/7 line. For everything else — a quote, a question, a planned job — drop us
            a message and we will get back to you the same day.
          </p>
        </div>
      </section>

      {/* EMERGENCY ALERT */}
      <div style={{ background: 'var(--copper)', color: 'var(--ink)', padding: '1.25rem var(--gutter)', textAlign: 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Emergency? Don&apos;t fill a form —&nbsp;
        </span>
        <a href="tel:01202080151" style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: '20px',
          fontWeight: 400,
          letterSpacing: '-0.01em',
          borderBottom: '1px solid currentColor',
        }}>
          call 01202 080 151 right now
        </a>
      </div>

      {/* CONTACT GRID */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* INFO SIDE */}
            <Reveal className="contact-info">
              <div className="contact-block">
                <h4>Phone</h4>
                <a href="tel:01202080151">01202 080 151</a>
              </div>
              <div className="contact-block">
                <h4>Email</h4>
                <a href="mailto:info@msjplumbing.co.uk">info@msjplumbing.co.uk</a>
              </div>
              <div className="contact-block">
                <h4>Address</h4>
                <p>8–10 Yarmouth Road<br />Poole, BH12 1AG</p>
              </div>
              <div className="contact-block">
                <h4>Hours</h4>
                <p>24 hours, 7 days a week<br />Including bank holidays</p>
              </div>
              <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--line)' }}>
                <span className="eyebrow">Coverage</span>
                <p style={{ marginTop: '0.75rem', fontSize: '15px', lineHeight: 1.6, color: 'var(--ash)', maxWidth: '38ch' }}>
                  Poole, Bournemouth, Christchurch, Wareham and wider Dorset. Not sure if we cover you?{' '}
                  <Link href="/areas" style={{ color: 'var(--copper)', borderBottom: '1px solid currentColor' }}>
                    Check the areas page
                  </Link>{' '}
                  or just call.
                </p>
              </div>
            </Reveal>

            {/* FORM — no Reveal wrapper, client component renders directly */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="section section--cream" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <Reveal>
            <div style={{
              background: 'var(--ink)',
              aspectRatio: '21/9',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Decorative map grid overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                  linear-gradient(rgba(200,125,60,0.06) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(200,125,60,0.06) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }} />
              <div style={{ position: 'relative', textAlign: 'center', color: 'var(--cream)' }}>
                <span className="eyebrow">Based at</span>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  marginTop: '0.5rem',
                }}>
                  8–10 Yarmouth Road, Poole, BH12 1AG
                </p>
                <a
                  href="https://maps.google.com/?q=8+Yarmouth+Road+Poole+BH12+1AG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                  style={{ marginTop: '1.5rem', display: 'inline-flex' }}
                >
                  Open in Google Maps <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
