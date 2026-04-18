import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';
import Marquee from '@/components/Marquee';
import EmergencyBand from '@/components/EmergencyBand';
import PremiumHero from '@/components/PremiumHero';
import TrustStrip from '@/components/TrustStrip';
import ServicesBento from '@/components/ServicesBento';
import TestimonialMarquee from '@/components/TestimonialMarquee';

const testimonials = [
  { text: 'MSJ saved the day when our pipes burst late at night. Prompt, professional — an absolute lifesaver.', name: 'Derek B.', place: 'Bournemouth', job: 'Emergency burst pipe' },
  { text: 'Impressed by the efficiency and cleanliness. Fixed our blocked sink quickly and left no mess behind.', name: 'Andy B.', place: 'Poole', job: 'Drain unblocking' },
  { text: 'The professionalism is unmatched. Handled our emergency with genuine care and real expertise.', name: 'Claire W.', place: 'Christchurch', job: 'Leak detection' },
  { text: 'Called at 11pm on a Sunday. By midnight the engineer was at the door. Outstanding.', name: 'Richard H.', place: 'Poole', job: 'Boiler — out of hours' },
  { text: 'We use MSJ across our portfolio of rentals. Reliable, responsive, tenants never complain.', name: 'Sarah M.', place: 'Bournemouth', job: 'Landlord contract' },
  { text: 'Found a slow leak three other plumbers missed. Thermal camera, twenty minutes. Zero mess.', name: 'Tom & Jo F.', place: 'Wareham', job: 'Under-floor leak' },
  { text: 'Straight-talking, fair pricing, work done properly. Exactly the firm you want to call.', name: 'Oliver J.', place: 'Poole', job: 'Bathroom refit' },
  { text: 'Turned up on time, fixed it in 40 minutes, sent an itemised invoice the same day.', name: 'Priya K.', place: 'Bournemouth', job: 'Radiator repair' },
  { text: 'Honest, tidy, and they explained every step. My elderly mum felt completely at ease.', name: 'Mark H.', place: 'Christchurch', job: 'Tap replacement' },
];

export default function HomePage() {
  return (
    <>
      <PremiumHero />
      <TrustStrip />
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
              <Link href="/about" className="btn btn--ghost-dark" style={{ marginTop: '2rem' }}>
                Read our story <span className="arrow">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <ServicesBento />

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

      <TestimonialMarquee testimonials={testimonials} />

      <EmergencyBand />
    </>
  );
}
