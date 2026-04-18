export default function Marquee() {
  const items = [
    'Emergency Plumbing',
    'Drain Unblocking',
    'Leak Detection',
    'Burst Pipes',
    'Boiler Support',
    '24/7 Response',
  ];

  const row = (
    <span>
      {items.map((t, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '4rem' }}>
          {t}
          <span className="dot" />
        </span>
      ))}
    </span>
  );

  return (
    <div className="marquee">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}
