import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';
import EmergencyBand from '@/components/EmergencyBand';

export const metadata = {
  title: 'About — MSJ Plumbing & Drainage Ltd',
  description: 'A decade-old family practice of time-served engineers. Meet the people behind MSJ Plumbing & Drainage.',
};

const values = [
  { n: '01', title: 'Calm', em: 'under pressure', body: 'Midnight floods are bad enough. We turn up measured, competent, and already halfway to a solution.' },
  { n: '02', title: 'Clean', em: 'as we found it', body: 'Dust sheets out, tools tidy, floors wiped. The only trace we leave is the job done right.' },
  { n: '03', title: 'Honest', em: 'to the penny', body: 'A price agreed is a price kept. No creeping invoices, no surprises at the door.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg">
          <Image
            src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=1920&q=85"
            alt="Workshop tools"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
          <h1>A family practice, <em>a decade deep.</em></h1>
          <p className="page-hero-lead">
            We are MSJ Plumbing &amp; Drainage Ltd — a tight team of time-served engineers based in Poole, working
            Dorset and the wider south coast. Not a contact centre. Not a franchise. Just craftsmen on the phone.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container">
          <Reveal className="two-col">
            <h3>The <em>story</em>, plainly told.</h3>
            <div className="body">
              <p className="drop-cap">
                MSJ began with a van, a toolbox, and a stubborn belief that plumbing should feel like a handshake, not
                a transaction. Over ten years later, we&apos;ve grown into a small firm that still picks up the phone
                on the first ring.
              </p>
              <p>
                We cut our teeth on Victorian terraces in Poole, new-build estates in Bournemouth, and the odd
                coastal cottage with pipework older than living memory. Every home taught us something. Every call
                sharpened the craft.
              </p>
              <p>
                Today we serve homeowners, landlords and businesses from Yarmouth Road — a stocked workshop, a
                properly maintained fleet, and the same family values we started with. No shortcuts, no scripts,
                no nonsense.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="section--dark" style={{ padding: '3rem 0' }}>
        <div className="container">
          <Reveal stagger className="stats">
            <div className="stat">
              <div className="stat-number"><Counter to={10} /><span className="unit">+yrs</span></div>
              <div className="stat-label">In practice</div>
            </div>
            <div className="stat">
              <div className="stat-number"><Counter to={3} /><span className="unit">towns</span></div>
              <div className="stat-label">Primary coverage</div>
            </div>
            <div className="stat">
              <div className="stat-number"><Counter to={45} /><span className="unit">min</span></div>
              <div className="stat-label">Response window</div>
            </div>
            <div className="stat">
              <div className="stat-number"><Counter to={24} /><span className="unit">/7</span></div>
              <div className="stat-label">Always on call</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMAGE + TEXT */}
      <section className="section">
        <div className="container">
          <div className="editorial">
            <Reveal className="editorial-text">
              <span className="eyebrow">The workshop</span>
              <h2 style={{ marginTop: '1rem' }}>
                Poole-based. <em>Dorset-wide.</em>
              </h2>
              <p>
                Our workshop at 8–10 Yarmouth Road is the quiet heart of everything. Stocked with the fittings we
                actually use — brass compression, copper in every gauge, push-fit for the awkward spots — so our vans
                leave ready for whatever the morning brings.
              </p>
              <p>
                We believe in having the right part, not the nearest one. It&apos;s why we rarely leave a job for
                supplies, and why our work lasts.
              </p>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/services" className="btn btn--ghost-dark">Our services <span className="arrow">→</span></Link>
                <Link href="/contact" className="btn btn--ghost-dark">Get in touch <span className="arrow">→</span></Link>
              </div>
            </Reveal>
            <Reveal className="editorial-media">
              <Image
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&q=85"
                alt="Workshop interior"
                width={1200}
                height={1500}
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="editorial-caption">
                <span>No. 02 · Yarmouth Road</span>
                <span>Poole, BH12 1AG</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section--cream">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What we stand for</span>
            <h2>Three things <em>we hold to</em>, on every job.</h2>
          </Reveal>
          <Reveal stagger className="value-grid">
            {values.map((v) => (
              <div key={v.n} className="value">
                <div className="value-num">{v.n}</div>
                <h4>{v.title} <em>{v.em}</em></h4>
                <p>{v.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <EmergencyBand />
    </>
  );
}
