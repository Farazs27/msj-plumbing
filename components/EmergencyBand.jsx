import Reveal from './Reveal';

export default function EmergencyBand() {
  return (
    <section className="emergency-band">
      <div className="emergency-inner">
        <Reveal as="h2">
          Something&apos;s leaking, flooding, <em>or just not right?</em>
        </Reveal>
        <Reveal className="emergency-phone">
          <div className="label">Emergency line · 24/7</div>
          <a href="tel:01202080151" className="number">01202 080 151</a>
        </Reveal>
      </div>
    </section>
  );
}
