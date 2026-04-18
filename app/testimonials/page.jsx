import Link from 'next/link';
import Reveal from '@/components/Reveal';
import EmergencyBand from '@/components/EmergencyBand';

export const metadata = {
  title: 'Testimonials — MSJ Plumbing & Drainage Ltd',
  description: 'Real reviews from customers across Poole, Bournemouth and Christchurch. See what people say about MSJ Plumbing.',
};

const testimonials = [
  {
    text: 'MSJ saved the day when our pipes burst late at night. Their prompt and professional service was a lifesaver. The engineer was calm, explained everything, and had it fixed within the hour.',
    name: 'Derek B.',
    place: 'Bournemouth',
    job: 'Emergency burst pipe',
  },
  {
    text: 'Impressed by the efficiency and cleanliness of the team. They fixed our blocked sink quickly and left no mess behind — I have genuinely never seen a tradesperson hoover up after themselves before.',
    name: 'Andy B.',
    place: 'Poole',
    job: 'Drain unblocking',
  },
  {
    text: 'The professionalism of MSJ is unmatched. They handled our emergency with genuine care and real expertise. The quote was exactly what we paid. I cannot recommend them highly enough.',
    name: 'Claire W.',
    place: 'Christchurch',
    job: 'Leak detection & repair',
  },
  {
    text: 'Called at 11pm on a Sunday. By midnight the engineer was at the door. Sorted the boiler issue, left the house tidy, and sent the invoice by email the next morning. Outstanding.',
    name: 'Richard H.',
    place: 'Poole',
    job: 'Boiler fault — out of hours',
  },
  {
    text: 'We use MSJ across our portfolio of rental properties. Reliable, responsive and our tenants never complain. The paperwork is clean and the pricing is fair. Exactly what a landlord needs.',
    name: 'Sarah M.',
    place: 'Bournemouth',
    job: 'Landlord maintenance contract',
  },
  {
    text: 'Found a slow leak under our kitchen floor that three other plumbers had missed. The thermal camera spotted it in twenty minutes. Minimal disruption, proper repair, zero mess.',
    name: 'Tom &amp; Jo F.',
    place: 'Wareham',
    job: 'Under-floor leak detection',
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Work</span>
          </div>
          <h1>From the <em>doorsteps</em> of Dorset.</h1>
          <p className="page-hero-lead">
            Real words from real customers across Poole, Bournemouth, Christchurch and beyond.
            No review farms. No cherry-picking. Just honest feedback from the people we work for.
          </p>
        </div>
      </section>

      {/* LARGE FEATURE QUOTE */}
      <section className="section section--cream">
        <div className="container">
          <Reveal>
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '4rem', maxWidth: '900px' }}>
              <span className="eyebrow">Featured review</span>
              <blockquote style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                fontWeight: 300,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: 'var(--ink)',
                marginTop: '1.5rem',
                fontStyle: 'italic',
              }}>
                &ldquo;Found a slow leak under our kitchen floor that three other plumbers had missed.
                The thermal camera spotted it in twenty minutes.&rdquo;
              </blockquote>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginTop: '2rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--ash)',
              }}>
                <span style={{ width: '40px', height: '1px', background: 'var(--copper)' }} />
                <strong style={{ color: 'var(--ink)' }}>Tom &amp; Jo F.</strong>
                <span>Wareham · Leak detection</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ALL REVIEWS */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">All reviews</span>
            <h2>What people <em>say when we leave.</em></h2>
          </Reveal>
          <Reveal stagger className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial">
                <span className="testimonial-quote">&ldquo;</span>
                <p className="testimonial-text" dangerouslySetInnerHTML={{ __html: t.text }} />
                <div className="testimonial-meta">
                  <strong>{t.name}</strong>
                  <span className="sep" />
                  <span>{t.place}</span>
                </div>
                <div style={{
                  marginTop: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--copper)',
                }}>
                  {t.job}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark">
        <div className="container">
          <Reveal>
            <div style={{
              borderTop: '1px solid var(--line-light)',
              paddingTop: '4rem',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '4rem',
              alignItems: 'center',
            }}>
              <div>
                <span className="eyebrow">Your turn</span>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 300,
                  lineHeight: 0.95,
                  letterSpacing: '-0.03em',
                  marginTop: '1rem',
                }}>
                  Ready for a job <em>done right?</em>
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="tel:01202080151" className="btn btn--primary">Call 01202 080 151 <span className="arrow">→</span></a>
                <Link href="/contact" className="btn btn--ghost">Send a message <span className="arrow">→</span></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <EmergencyBand />
    </>
  );
}
