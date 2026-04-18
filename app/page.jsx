import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';
import Marquee from '@/components/Marquee';
import EmergencyBand from '@/components/EmergencyBand';

const services = [
  {
    n: '01', title: 'Emergency', em: 'Plumbing', tag: '24 / 7',
    desc: "Burst pipes, overflowing tanks, no hot water at midnight. On the road within minutes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    n: '02', title: 'Drain', em: 'Unblocking', tag: 'Same-day',
    desc: "High-pressure jetting, CCTV surveys, soil stacks, gullies and mains cleared properly.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    n: '03', title: 'Leak', em: 'Detection', tag: 'Non-invasive',
    desc: "Thermal imaging and acoustic gear to find the leak without tearing your walls apart.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
      </svg>
    ),
  },
  {
    n: '04', title: 'Bathrooms &', em: 'Installations', tag: 'Bespoke',
    desc: "Full suite rebuilds to single tap swaps — copper, brass, ceramics done properly.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M9 6 C9 4 7 2 5 2 S1 4 1 6V20H23V9C23 7.34 21.66 6 20 6H9Z"/><path d="M1 16H23"/>
      </svg>
    ),
  },
  {
    n: '05', title: 'Boiler &', em: 'Heating', tag: 'Gas Safe',
    desc: "Radiator balancing, pressure faults, power-flushes. Heating kept running all winter.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 2c-4 4-4 8 0 10-2-2-2-6 0-10zM8 12c-2 2-2 6 2 8-2-1-4-4-2-8zM16 12c2 2 2 6-2 8 2-1 4-4 2-8z"/>
      </svg>
    ),
  },
  {
    n: '06', title: 'Commercial', em: 'Support', tag: 'For business',
    desc: "Landlords, offices, cafés. Scheduled maintenance contracts and priority callouts.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="2" y="7" width="20" height="14" rx="1"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
];

const testimonials = [
  { text: 'MSJ saved the day when our pipes burst late at night. Prompt, professional — an absolute lifesaver.', name: 'Derek B.', place: 'Bournemouth', stars: 5 },
  { text: 'Impressed by the efficiency and cleanliness. Fixed our blocked sink quickly and left no mess behind.', name: 'Andy B.', place: 'Poole', stars: 5 },
  { text: 'The professionalism is unmatched. Handled our emergency with genuine care and real expertise.', name: 'Claire W.', place: 'Christchurch', stars: 5 },
];

function Stars({ n = 5 }) {
  return (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--copper)" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85"
            alt="Copper pipework detail"
            fill priority sizes="100vw"
            style={{ objectFit: 'cover', opacity: 0.35, filter: 'grayscale(0.3) contrast(1.1)' }}
          />
        </div>
        <div className="hero-content">
          <div>
            <div className="hero-meta">
              <span className="bar" />
              <span className="eyebrow">Dorset · Poole · Bournemouth</span>
            </div>
            <h1>
              <span className="line"><span>Plumbing</span></span>
              <span className="line"><span>as it was</span></span>
              <span className="line"><span><em>meant to be.</em></span></span>
            </h1>
            <p className="hero-lead">
              A decade of copper, calm hands, and a 45-minute promise. We handle the burst at 2am
              and the slow drip on Sunday morning with the same unhurried precision.
            </p>
            <div className="hero-actions">
              <a href="tel:01202080151" className="btn btn--primary">
                Call the 24/7 line <span className="arrow">→</span>
              </a>
              <Link href="/services" className="btn btn--ghost">
                Our craft <span className="arrow">→</span>
              </Link>
            </div>
          </div>
          <div className="hero-side">
            Response time
            <span className="hero-side-number">45<em>min</em></span>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="trust-strip-inner">
          <div className="trust-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--copper)" strokeWidth="1.8">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>Gas Safe Registered</span>
          </div>
          <span className="trust-sep" />
          <div className="trust-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--copper)" strokeWidth="1.8">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>45-Min Emergency Response</span>
          </div>
          <span className="trust-sep" />
          <div className="trust-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--copper)" strokeWidth="1.8">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span>5-Star Rated · 10+ Years</span>
          </div>
          <span className="trust-sep" />
          <div className="trust-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--copper)" strokeWidth="1.8">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <span>24 / 7 · 365 Days</span>
          </div>
        </div>
      </div>

      <Marquee />

      {/* STATS */}
      <section className="section section--dark">
        <div className="container">
          <Reveal stagger className="stats">
            <div className="stat">
              <div className="stat-number"><Counter to={10} /><span className="unit">+yrs</span></div>
              <div className="stat-label">On the job</div>
            </div>
            <div className="stat">
              <div className="stat-number"><Counter to={45} /><span className="unit">min</span></div>
              <div className="stat-label">Response window</div>
            </div>
            <div className="stat">
              <div className="stat-number"><Counter to={24} /><span className="unit">/7</span></div>
              <div className="stat-label">Always listening</div>
            </div>
            <div className="stat">
              <div className="stat-number"><Counter to={100} /><span className="unit">%</span></div>
              <div className="stat-label">Spotless finish</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT EDITORIAL */}
      <section className="section">
        <div className="container">
          <div className="editorial">
            <Reveal className="editorial-media">
              <Image
                src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&q=85"
                alt="Plumber at work"
                width={1200} height={1500} sizes="(max-width: 900px) 100vw, 50vw"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="editorial-caption">
                <span>No. 01 · The workshop</span>
                <span>Poole, Dorset</span>
              </div>
            </Reveal>
            <Reveal className="editorial-text">
              <span className="eyebrow">About the firm</span>
              <h2 style={{ marginTop: '1rem' }}>
                A family practice, <em>built on the quiet dignity of done-right.</em>
              </h2>
              <p className="drop-cap">
                MSJ Plumbing &amp; Drainage Ltd has been fixing Dorset&apos;s most stubborn leaks for over a decade.
                We&apos;re not a call-centre with a fleet — we&apos;re a tight team of time-served engineers who
                answer the phone ourselves and turn up with the right part the first time.
              </p>
              <p>
                No surprise invoices. No mess on the carpet. Just honest work, done properly, every time.
              </p>
              {/* Mini trust badges */}
              <div className="mini-badges">
                <div className="mini-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--copper)" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  Gas Safe
                </div>
                <div className="mini-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--copper)" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Fully Insured
                </div>
                <div className="mini-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--copper)" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  5-Star Rated
                </div>
                <div className="mini-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--copper)" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/>
                  </svg>
                  Guaranteed Work
                </div>
              </div>
              <Link href="/about" className="btn btn--ghost-dark" style={{ marginTop: '2rem' }}>
                Read our story <span className="arrow">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section--cream">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What we do</span>
            <h2>Six disciplines, <em>one phone number.</em></h2>
          </Reveal>
          <div className="service-cards-grid">
            {services.map((s) => (
              <Link key={s.n} href="/services" className="service-card">
                <div className="service-card-icon">{s.icon}</div>
                <div className="service-card-tag">{s.tag}</div>
                <h3 className="service-card-title">{s.title} <em>{s.em}</em></h3>
                <p className="service-card-desc">{s.desc}</p>
                <span className="service-card-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section--dark">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>Four steps, <em>from call to resolved.</em></h2>
          </Reveal>
          <Reveal stagger className="process">
            <div className="process-step">
              <h4>Call or message</h4>
              <p>We answer ourselves. Describe what you&apos;re seeing — we&apos;ll know what&apos;s next.</p>
            </div>
            <div className="process-step">
              <h4>We roll out</h4>
              <p>Within 45 minutes across our zone. Vans stocked — we rarely leave to fetch parts.</p>
            </div>
            <div className="process-step">
              <h4>Diagnose &amp; agree</h4>
              <p>We find the root cause and confirm the price before any spanner turns.</p>
            </div>
            <div className="process-step">
              <h4>Fix &amp; finish</h4>
              <p>Job done. Workspace left cleaner than we found it. Warranty paperwork by email.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Kind words</span>
            <h2>From the <em>doorsteps</em> of Dorset.</h2>
          </Reveal>
          <Reveal stagger className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial">
                <Stars n={t.stars} />
                <span className="testimonial-quote">&ldquo;</span>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-meta">
                  <strong>{t.name}</strong>
                  <span className="sep" />
                  <span>{t.place}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <EmergencyBand />
    </>
  );
}
