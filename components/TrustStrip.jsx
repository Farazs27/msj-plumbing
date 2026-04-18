'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Clock, Star, Phone } from 'lucide-react';

const items = [
  { icon: ShieldCheck, label: 'Gas Safe Registered', sub: 'Certified engineers' },
  { icon: Clock, label: '45-Min Emergency Response', sub: 'Across core zones' },
  { icon: Star, label: '5-Star Rated · 10+ Years', sub: 'Consistent reviews' },
  { icon: Phone, label: '24 / 7 · 365 Days', sub: 'Always listening' },
];

export default function TrustStrip() {
  return (
    <div className="relative border-y border-line bg-paper">
      <div className="mx-auto grid max-w-[var(--max)] grid-cols-2 md:grid-cols-4">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex items-center gap-4 px-6 py-6 transition-colors duration-500 hover:bg-cream md:px-8 md:py-7 ${
                i !== 0 ? 'md:border-l border-line' : ''
              } ${i === 1 ? 'border-l border-line md:border-l' : ''} ${
                i === 2 ? 'border-t border-line md:border-t-0' : ''
              } ${i === 3 ? 'border-t border-l border-line md:border-t-0' : ''}`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-copper/30 bg-copper/5 text-copper transition-all duration-500 group-hover:scale-110 group-hover:bg-copper group-hover:text-paper">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <div className="min-w-0">
                <div className="truncate font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-ink">
                  {it.label}
                </div>
                <div className="truncate font-mono text-[10px] uppercase tracking-[0.15em] text-ash">
                  {it.sub}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
