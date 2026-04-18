'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Phone, Mail, User, MessageSquare, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const urgencies = [
  { value: 'emergency', label: 'Emergency', hint: 'Now' },
  { value: 'same-week', label: 'This week', hint: '1–7 days' },
  { value: 'planned', label: 'Planned', hint: 'Schedule' },
];

function Field({ label, icon: Icon, children, hint }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-ash">
        {Icon && <Icon className="h-3.5 w-3.5 text-copper" strokeWidth={1.8} />}
        {label}
        {hint && <span className="ml-auto normal-case tracking-normal text-ash-light">{hint}</span>}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  'w-full border-0 border-b border-line bg-transparent px-0 py-3 font-body text-[15px] text-ink placeholder:text-ash-light outline-none transition-colors duration-300 focus:border-copper';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', urgency: 'same-week', message: '' });
  const [sent, setSent] = useState(false);
  const [touched, setTouched] = useState({});

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const onBlur = (k) => () => setTouched((t) => ({ ...t, [k]: true }));

  const nameError = touched.name && !form.name.trim();
  const contactError = touched.phone && touched.email && !form.phone.trim() && !form.email.trim();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || (!form.phone.trim() && !form.email.trim())) {
      setTouched({ name: true, phone: true, email: true });
      return;
    }
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-start gap-4 border border-copper/30 bg-copper/5 p-10"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-copper text-paper">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-light leading-[1.1] tracking-[-0.02em]">
          Message <em className="italic text-copper">received.</em>
        </h3>
        <p className="max-w-[46ch] text-[15px] leading-[1.6] text-ash">
          Thanks {form.name || 'there'} — we&apos;ve got your details and will be in touch today.
          If it&apos;s urgent, call{' '}
          <a className="border-b border-copper text-copper" href="tel:01202080151">
            01202 080 151
          </a>
          .
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8 border border-line bg-paper p-8 md:p-10">
      <div>
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-copper">
          Send a message
        </span>
        <h3 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.4rem)] font-light leading-[1.05] tracking-[-0.02em]">
          We reply <em className="italic text-copper">the same day.</em>
        </h3>
      </div>

      <Field label="Your name" icon={User} hint="Required">
        <input
          type="text"
          required
          value={form.name}
          onChange={onChange('name')}
          onBlur={onBlur('name')}
          placeholder="Jane Smith"
          className={cn(inputCls, nameError && 'border-red-500/60')}
        />
        {nameError && (
          <span className="mt-1 flex items-center gap-1 text-[11px] text-red-500">
            <AlertCircle className="h-3 w-3" /> We need a name to address you.
          </span>
        )}
      </Field>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Phone" icon={Phone} hint="Preferred">
          <input
            type="tel"
            value={form.phone}
            onChange={onChange('phone')}
            onBlur={onBlur('phone')}
            placeholder="01202 080 151"
            className={inputCls}
          />
        </Field>
        <Field label="Email" icon={Mail}>
          <input
            type="email"
            value={form.email}
            onChange={onChange('email')}
            onBlur={onBlur('email')}
            placeholder="jane@example.co.uk"
            className={inputCls}
          />
        </Field>
      </div>
      {contactError && (
        <span className="-mt-4 flex items-center gap-1 text-[11px] text-red-500">
          <AlertCircle className="h-3 w-3" /> Give us at least one way to reach you.
        </span>
      )}

      <div>
        <span className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-ash">
          Urgency
        </span>
        <div className="grid grid-cols-3 gap-2">
          {urgencies.map((u) => (
            <button
              key={u.value}
              type="button"
              onClick={() => setForm((f) => ({ ...f, urgency: u.value }))}
              className={cn(
                'flex flex-col items-start border px-4 py-3 text-left transition-all duration-300',
                form.urgency === u.value
                  ? 'border-copper bg-copper/5'
                  : 'border-line bg-paper hover:border-copper/40'
              )}
            >
              <span
                className={cn(
                  'font-mono text-[11px] uppercase tracking-[0.1em]',
                  form.urgency === u.value ? 'text-copper' : 'text-ink'
                )}
              >
                {u.label}
              </span>
              <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ash-light">
                {u.hint}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Field label="Tell us what's happening" icon={MessageSquare}>
        <textarea
          rows={4}
          value={form.message}
          onChange={onChange('message')}
          placeholder="Slow drip under the kitchen sink, getting worse since Friday..."
          className={cn(inputCls, 'resize-none pt-3')}
        />
      </Field>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
        <p className="max-w-[34ch] text-[12px] leading-[1.5] text-ash">
          Or skip the form entirely —{' '}
          <a href="tel:01202080151" className="border-b border-copper text-copper">
            01202 080 151
          </a>
          , 24/7.
        </p>
        <button
          type="submit"
          className="group inline-flex items-center gap-3 rounded-full bg-copper px-7 py-4 font-mono text-[13px] uppercase tracking-[0.05em] text-paper transition-all duration-500 hover:-translate-y-0.5 hover:bg-copper-deep hover:shadow-[0_20px_40px_-20px_rgba(200,125,60,0.8)]"
        >
          Send message
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </form>
  );
}
