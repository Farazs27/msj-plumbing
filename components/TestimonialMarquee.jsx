'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

function Stars({ n = 5 }) {
  return (
    <div className="mb-4 flex items-center gap-1">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-copper text-copper" />
      ))}
    </div>
  );
}

function TestimonialCard({ text, name, place, job }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: '0 30px 60px -30px rgba(200,125,60,0.25)',
        transition: { type: 'spring', stiffness: 260, damping: 20 },
      }}
      className="relative w-full max-w-sm shrink-0 select-none border border-line bg-paper p-8 transition-colors duration-500 hover:border-copper/30"
    >
      <Quote className="absolute right-6 top-6 h-8 w-8 text-copper/20" />
      <Stars n={5} />
      <p className="mb-6 font-display text-[19px] font-light leading-[1.45] tracking-[-0.01em] text-ink">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center gap-3 border-t border-line pt-4 font-mono text-[11px] uppercase tracking-[0.1em]">
        <span className="h-px w-5 bg-copper" />
        <strong className="font-medium text-ink">{name}</strong>
        <span className="text-ash">· {place}</span>
      </div>
      {job && (
        <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-copper">
          {job}
        </div>
      )}
    </motion.div>
  );
}

function Column({ items, direction = 'up', duration = 22 }) {
  const content = [...items, ...items];
  return (
    <div className="relative h-[680px] overflow-hidden">
      <motion.div
        animate={{ y: direction === 'up' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        className="flex flex-col gap-6"
      >
        {content.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} {...t} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialMarquee({ testimonials, heading = true, className }) {
  const cols = [
    testimonials.slice(0, Math.ceil(testimonials.length / 3)),
    testimonials.slice(Math.ceil(testimonials.length / 3), Math.ceil((2 * testimonials.length) / 3)),
    testimonials.slice(Math.ceil((2 * testimonials.length) / 3)),
  ];

  return (
    <section className={cn('relative overflow-hidden py-24', className)}>
      <div className="mx-auto max-w-[var(--max)] px-[var(--gutter)]">
        {heading && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 grid items-start gap-12 md:grid-cols-[1fr_2fr]"
          >
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-copper">
              Kind words
            </span>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-none tracking-[-0.03em]">
              From the <em className="italic text-copper">doorsteps</em> of Dorset.
            </h2>
          </motion.div>
        )}

        <div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <Column items={cols[0]} direction="up" duration={26} />
          <div className="hidden md:block">
            <Column items={cols[1]} direction="down" duration={32} />
          </div>
          <div className="hidden lg:block">
            <Column items={cols[2]} direction="up" duration={28} />
          </div>
        </div>
      </div>
    </section>
  );
}
