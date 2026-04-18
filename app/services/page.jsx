import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import EmergencyBand from '@/components/EmergencyBand';

export const metadata = {
  title: 'Services — MSJ Plumbing & Drainage Ltd',
  description: '24/7 emergency plumbing, drain unblocking, leak detection, bathrooms, heating and commercial support across Dorset.',
};

const services = [
  {
    n: '01', title: 'Emergency', em: 'Plumbing', tag: '24/7',
    desc: 'Burst pipes, overflowing tanks, no hot water at midnight. We are on the road within minutes, not days. Our vans are stocked so the fix usually happens on the first visit.',
    features: ['Burst & leaking pipes', 'Overflows & flooding', 'No hot water', 'Valve failures', 'Weekend & bank holidays'],
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=900&q=85',
    alt: 'Plumber fixing emergency pipe leak',
  },
  {
    n: '02', title: 'Drain', em: 'Unblocking', tag: 'Same-day',
    desc: 'High-pressure jetting, CCTV drain surveys, and old-fashioned know-how for soil stacks, gullies, mains and commercial drainage. We find the blockage and clear it — properly.',
    features: ['High-pressure water jetting', 'CCTV drain surveys', 'Soil stack clearance', 'Gully & gulley clearing', 'Root intrusion removal'],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=85',
    alt: 'Drain unblocking and pipe work',
  },
  {
    n: '03', title: 'Leak', em: 'Detection', tag: 'Non-invasive',
    desc: 'Thermal imaging cameras and acoustic listening equipment let us pinpoint hidden leaks without tearing apart floors or walls. We find it first, then discuss the best repair approach.',
    features: ['Thermal imaging', 'Acoustic detection', 'Mains pressure testing', 'Under-floor leak finding', 'Insurance-ready reports'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85',
    alt: 'Copper pipework leak detection',
  },
  {
    n: '04', title: 'Bathrooms &', em: 'Installations', tag: 'Bespoke',
    desc: 'From a single tap replacement to a full suite rebuild in copper and brass. We work from your specification or help you plan a layout that makes sense for the space.',
    features: ['Full bathroom fitting', 'Tap & mixer replacement', 'Shower & bath installation', 'Copper pipework runs', 'En-suite & cloakroom'],
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=85',
    alt: 'Luxury bathroom installation with freestanding bath',
  },
  {
    n: '05', title: 'Boiler &', em: 'Heating', tag: 'Gas Safe',
    desc: 'Radiator balancing, cold-spot diagnosis, pressure faults and full system power-flushes. We keep your heating system running through the Dorset winter.',
    features: ['Radiator balancing', 'System power-flush', 'Pressure fault diagnosis', 'Thermostatic valves', 'Annual service checks'],
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&q=85',
    alt: 'Boiler and heating system maintenance',
  },
  {
    n: '06', title: 'Commercial', em: 'Support', tag: 'For business',
    desc: 'Landlords, letting agents, cafés, salons, offices. We offer scheduled maintenance contracts and priority emergency callouts with clean, itemised invoicing for your accounts.',
    features: ['Landlord compliance', 'Planned maintenance', 'Priority callout SLA', 'Itemised invoicing', 'Multi-site agreements'],
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=900&q=85',
    alt: 'Commercial plumbing pipe infrastructure',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
          <h1>Six disciplines, <em>one phone number.</em></h1>
          <p className="page-hero-lead">
            From a midnight emergency to a planned bathroom refit — everything we do is backed by a decade of
            craft and a commitment to leaving every job cleaner than we found it.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {services.map((s) => (
              <div key={s.n} className="card">
                <div className="card-image">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    width={900} height={506}
                    sizes="(max-width: 900px) 100vw, 33vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body">
                  <div className="card-number">{s.n} · {s.tag}</div>
                  <h3>{s.title} <em>{s.em}</em></h3>
                  <p>{s.desc}</p>
                  <ul>
                    {s.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section section--dark">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Why MSJ</span>
            <h2>The things that <em>set us apart.</em></h2>
          </Reveal>
          <Reveal stagger className="process">
            <div className="process-step">
              <h4>We answer ourselves</h4>
              <p>No call centre, no bot. A real engineer takes your call and starts diagnosing before we arrive.</p>
            </div>
            <div className="process-step">
              <h4>Stocked vans</h4>
              <p>The most common fittings and parts are in the van. We fix on the first visit wherever possible.</p>
            </div>
            <div className="process-step">
              <h4>Price before spanner</h4>
              <p>We agree the cost before any work begins. No creeping invoices, no end-of-job surprises.</p>
            </div>
            <div className="process-step">
              <h4>Guaranteed work</h4>
              <p>All repairs carry a workmanship guarantee. If something is not right, we come back.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST ROW */}
      <section className="section section--cream">
        <div className="container">
          <Reveal stagger className="value-grid">
            <div className="value">
              <div className="value-num">Gas Safe</div>
              <h4><em>Registered</em> &amp; insured</h4>
              <p>All our gas work is carried out by Gas Safe registered engineers. Certificates issued on completion.</p>
            </div>
            <div className="value">
              <div className="value-num">5 Stars</div>
              <h4><em>Rated</em> by Dorset</h4>
              <p>Consistently five-star reviews across Poole, Bournemouth and Christchurch. See what customers say.</p>
            </div>
            <div className="value">
              <div className="value-num">Guaranteed</div>
              <h4>Work <em>warranted</em></h4>
              <p>Every repair and installation carries a written workmanship warranty. Your peace of mind, documented.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <EmergencyBand />
    </>
  );
}
