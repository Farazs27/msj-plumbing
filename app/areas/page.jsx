import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import EmergencyBand from '@/components/EmergencyBand';

export const metadata = {
  title: 'Areas We Cover — MSJ Plumbing & Drainage Ltd',
  description: 'Emergency plumbing across Poole, Bournemouth, Christchurch, Dorset and surrounding areas. 45-minute response.',
};

const areas = [
  { n: '01', name: 'Poole', em: '', zone: 'BH12 · BH13 · BH14 · BH15 · BH16 · BH17', response: '~25 min', note: 'Our home base — fastest response in the area.', image: 'https://images.unsplash.com/photo-1597586124394-fbd6ef244026?w=900&q=85', alt: 'Poole harbour waterfront' },
  { n: '02', name: 'Bourne', em: 'mouth', zone: 'BH1 · BH2 · BH3 · BH4 · BH5 · BH6 · BH7 · BH8', response: '~30 min', note: 'Covering all of Bournemouth including Boscombe and Westbourne.', image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=900&q=85', alt: 'Bournemouth beach and pier' },
  { n: '03', name: 'Christ', em: 'church', zone: 'BH23', response: '~35 min', note: 'Highcliffe, Friars Cliff, Burton — all in our window.', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900&q=85', alt: 'English seaside pier' },
  { n: '04', name: 'Ware', em: 'ham', zone: 'BH20', response: '~40 min', note: 'Wareham town and the Purbeck villages.', image: 'https://images.unsplash.com/photo-1587020256893-55e78a8faf76?w=900&q=85', alt: 'Dorset countryside village' },
  { n: '05', name: 'Fern', em: 'down', zone: 'BH22', response: '~35 min', note: 'West Moors, St Leonards, Ringwood corridor.', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=85', alt: 'English countryside' },
  { n: '06', name: 'Swanage &', em: 'Purbeck', zone: 'BH19', response: '~45 min', note: 'Worth the drive — Corfe Castle to the coast.', image: 'https://images.unsplash.com/photo-1503252947848-7338d3f92f31?w=900&q=85', alt: 'Jurassic coast cliffs' },
  { n: '07', name: 'Wimborne &', em: 'surrounds', zone: 'BH21', response: '~40 min', note: 'Wimborne Minster, Colehill, Verwood.', image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c50a?w=900&q=85', alt: 'English town street' },
  { n: '08', name: 'Blandford &', em: 'North Dorset', zone: 'DT11', response: '~50 min', note: 'Blandford Forum and the northern Dorset villages.', image: 'https://images.unsplash.com/photo-1572969175267-3ec4ab7acdfa?w=900&q=85', alt: 'Rolling Dorset hills' },
  { n: '09', name: 'Dorchester &', em: 'Weymouth', zone: 'DT1 · DT3 · DT4', response: '~55 min', note: 'Available for significant jobs and emergencies.', image: 'https://images.unsplash.com/photo-1566073772-d0c9b33a22e5?w=900&q=85', alt: 'Coastal town' },
];

export default function AreasPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg">
          <Image
            src="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1920&q=85"
            alt="Bournemouth coastline"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Areas</span>
          </div>
          <h1>Rooted in Dorset, <em>ready across it.</em></h1>
          <p className="page-hero-lead">
            Our 45-minute response promise covers Poole, Bournemouth and Christchurch as standard. For the wider
            county we are never far away — and always on the phone.
          </p>
        </div>
      </section>

      {/* RESPONSE STRIP */}
      <section className="section--dark" style={{ padding: '3rem 0' }}>
        <div className="container">
          <Reveal stagger className="stats">
            <div className="stat">
              <div className="stat-number" style={{ fontSize: 'clamp(2rem,3vw,3.5rem)' }}>45<span className="unit">min</span></div>
              <div className="stat-label">Core zone response</div>
            </div>
            <div className="stat">
              <div className="stat-number" style={{ fontSize: 'clamp(2rem,3vw,3.5rem)' }}>9<span className="unit">areas</span></div>
              <div className="stat-label">Coverage zones</div>
            </div>
            <div className="stat">
              <div className="stat-number" style={{ fontSize: 'clamp(2rem,3vw,3.5rem)' }}>24<span className="unit">/7</span></div>
              <div className="stat-label">All hours, all areas</div>
            </div>
            <div className="stat">
              <div className="stat-number" style={{ fontSize: 'clamp(2rem,3vw,3.5rem)' }}>1<span className="unit">no.</span></div>
              <div className="stat-label">01202 080 151</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AREA GRID */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Coverage</span>
            <h2>Every area, <em>every hour.</em></h2>
          </Reveal>
          <Reveal className="area-grid">
            {areas.map((a) => (
              <div key={a.n} className="area relative overflow-hidden group">
                {a.image && (
                  <>
                    <Image
                      src={a.image}
                      alt={a.alt || ''}
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                      className="absolute inset-0 object-cover opacity-[0.18] transition-all duration-700 group-hover:opacity-30 group-hover:scale-[1.04]"
                      style={{ filter: 'grayscale(0.4) contrast(1.05)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-paper/80 via-paper/95 to-paper pointer-events-none" />
                  </>
                )}
                <div className="relative z-10">
                  <div className="area-number">{a.n}</div>
                  <h3>{a.name}<em>{a.em}</em></h3>
                  <div className="area-zone">{a.zone}</div>
                  <p style={{ fontSize: '13px', color: 'var(--ash)', marginTop: '0.75rem', maxWidth: '36ch' }}>{a.note}</p>
                  <div className="area-response">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.2" />
                      <polyline points="5,2.5 5,5 6.5,6.5" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                    {a.response} response
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* NOT LISTED */}
      <section className="section section--cream">
        <div className="container">
          <Reveal className="two-col">
            <h3>Not on the <em>list?</em></h3>
            <div className="body">
              <p>
                Our coverage zones above are where we guarantee the 45-minute response. But we regularly take on jobs
                further afield — particularly for larger installations, commercial contracts, or customers who have
                worked with us before.
              </p>
              <p>
                Call us on <a href="tel:01202080151" style={{ color: 'var(--copper)' }}>01202 080 151</a> and tell us
                where you are. If we can help, we will. If the job is too far for our response guarantee we will tell
                you honestly and point you in the right direction.
              </p>
              <a href="tel:01202080151" className="btn btn--ghost-dark" style={{ marginTop: '2rem' }}>
                Call now <span className="arrow">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <EmergencyBand />
    </>
  );
}
