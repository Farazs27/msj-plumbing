'use client';

import { useState } from 'react';

const services = [
  'Emergency plumbing',
  'Drain unblocking',
  'Leak detection',
  'Bathroom installation',
  'Boiler & heating',
  'Commercial support',
  'Other',
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  if (sent) {
    return (
      <div style={{
        padding: '4rem 0',
        borderTop: '1px solid var(--line)',
      }}>
        <span className="eyebrow">Message received</span>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          fontStyle: 'italic',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          color: 'var(--ink)',
          marginTop: '1rem',
          lineHeight: 1.1,
        }}>
          We will be in touch today.
        </p>
        <p style={{ color: 'var(--ash)', marginTop: '1rem', fontSize: '15px' }}>
          For emergencies, don&apos;t wait — call{' '}
          <a href="tel:01202080151" style={{ color: 'var(--copper)' }}>01202 080 151</a> right now.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field-row">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" required placeholder="Jane Smith" autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone number</label>
          <input id="phone" name="phone" type="tel" required placeholder="07xxx xxxxxx" autoComplete="tel" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" required placeholder="jane@email.com" autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="service">Service required</label>
        <select id="service" name="service" defaultValue="">
          <option value="" disabled>Select a service…</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Tell us what&apos;s happening</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Describe the issue, where it is in the property, and how urgent it is…"
        />
      </div>
      <button
        type="submit"
        className="btn btn--primary"
        style={{ justifySelf: 'start' }}
        disabled={loading}
      >
        {loading ? 'Sending…' : 'Send message'}
        {!loading && <span className="arrow">→</span>}
      </button>
    </form>
  );
}
