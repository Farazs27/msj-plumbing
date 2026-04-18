'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { motion } from 'motion/react';
import {
  Siren,
  Wrench,
  Droplets,
  Bath,
  Flame,
  Building2,
  ArrowUpRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    n: '01',
    title: 'Emergency',
    em: 'Plumbing',
    tag: '24 / 7',
    span: 'md:col-span-2 md:row-span-2',
    desc: 'Burst pipes, overflowing tanks, no hot water at midnight. On the road within minutes.',
    icon: Siren,
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1400&q=85',
    alt: 'Plumber at work on emergency repair',
    featured: true,
  },
  {
    n: '02',
    title: 'Drain',
    em: 'Unblocking',
    tag: 'Same-day',
    desc: 'High-pressure jetting, CCTV surveys, soil stacks and mains cleared properly.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=85',
    alt: 'Drain pipe close-up',
  },
  {
    n: '03',
    title: 'Leak',
    em: 'Detection',
    tag: 'Non-invasive',
    desc: 'Thermal imaging and acoustic gear to find the leak without tearing walls apart.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85',
    alt: 'Copper pipework detail',
  },
  {
    n: '04',
    title: 'Bathrooms &',
    em: 'Installations',
    tag: 'Bespoke',
    span: 'md:col-span-2',
    desc: 'Full suite rebuilds to single tap swaps — copper, brass, ceramics done properly.',
    icon: Bath,
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1400&q=85',
    alt: 'Luxury bathroom with freestanding bath',
  },
  {
    n: '05',
    title: 'Boiler &',
    em: 'Heating',
    tag: 'Gas Safe',
    desc: 'Radiator balancing, pressure faults, power-flushes. Heating kept running.',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&q=85',
    alt: 'Boiler and heating system',
  },
  {
    n: '06',
    title: 'Commercial',
    em: 'Support',
    tag: 'For business',
    desc: 'Landlords, offices, cafés. Scheduled maintenance and priority callouts.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=900&q=85',
    alt: 'Commercial pipe infrastructure',
  },
];

function Spotlight({ containerRef }) {
  const onMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };
  return { onMouseMove };
}

function BentoCard({ service, index }) {
  const ref = useRef(null);
  const Icon = service.icon;

  const onMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className={cn('group', service.span)}
    >
      <Link
        ref={ref}
        href="/services"
        onMouseMove={onMouseMove}
        className={cn(
          'relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-sm border border-line bg-paper p-8 transition-all duration-500',
          'hover:border-copper/40 hover:-translate-y-1',
          'md:p-10',
          service.featured && 'bg-ink text-cream hover:border-copper'
        )}
      >
        {service.image && (
          <>
            <Image
              src={service.image}
              alt={service.alt || ''}
              fill
              sizes={service.featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
              className={cn(
                'absolute inset-0 object-cover transition-all duration-700 ease-out group-hover:scale-[1.04]',
                service.featured ? 'opacity-30 group-hover:opacity-45' : 'opacity-[0.22] group-hover:opacity-40'
              )}
              style={{ filter: service.featured ? 'grayscale(0.3) contrast(1.1)' : 'grayscale(0.4) contrast(1.05)' }}
            />
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: service.featured
                  ? 'linear-gradient(180deg, rgba(14,14,15,0.55) 0%, rgba(14,14,15,0.85) 100%)'
                  : 'linear-gradient(180deg, rgba(249,246,240,0.92) 0%, rgba(249,246,240,0.98) 100%)',
              }}
            />
          </>
        )}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          style={{
            background: service.featured
              ? 'radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgba(200,125,60,0.22), transparent 60%)'
              : 'radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgba(200,125,60,0.14), transparent 60%)',
          }}
        />

        {service.featured && (
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(200,125,60,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(200,125,60,0.4) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(ellipse at 30% 30%, black 0%, transparent 70%)',
              }}
            />
          </div>
        )}

        <div className="relative z-10 flex items-start justify-between">
          <div
            className={cn(
              'flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500',
              service.featured
                ? 'border-copper/40 bg-copper/10 text-copper group-hover:bg-copper group-hover:text-paper'
                : 'border-line bg-cream/30 text-ink group-hover:border-copper group-hover:bg-copper group-hover:text-paper'
            )}
          >
            <Icon className="h-5 w-5" strokeWidth={1.4} />
          </div>
          <div className="flex items-center gap-3">
            <span
              className={cn(
                'font-mono text-[10px] uppercase tracking-[0.15em]',
                service.featured ? 'text-copper' : 'text-copper'
              )}
            >
              {service.n} · {service.tag}
            </span>
          </div>
        </div>

        <div className="relative z-10 mt-auto pt-10">
          <h3
            className={cn(
              'font-display font-light leading-[1] tracking-[-0.02em]',
              service.featured
                ? 'text-[clamp(2rem,3.5vw,3rem)]'
                : 'text-[clamp(1.5rem,2.2vw,2rem)]'
            )}
          >
            {service.title}{' '}
            <em
              className={cn('italic', service.featured ? 'text-copper' : 'text-copper')}
            >
              {service.em}
            </em>
          </h3>
          <p
            className={cn(
              'mt-3 max-w-[44ch] text-[14px] leading-[1.6]',
              service.featured ? 'text-ash-light' : 'text-ash'
            )}
          >
            {service.desc}
          </p>

          <div className="mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.15em]">
            <span
              className={cn(
                'transition-colors duration-500',
                service.featured
                  ? 'text-cream group-hover:text-copper'
                  : 'text-ink group-hover:text-copper'
              )}
            >
              Read more
            </span>
            <ArrowUpRight
              className={cn(
                'h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1',
                service.featured ? 'text-copper' : 'text-ink group-hover:text-copper'
              )}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesBento() {
  return (
    <section className="relative bg-cream py-[clamp(4rem,10vw,9rem)]">
      <div className="mx-auto max-w-[var(--max)] px-[var(--gutter)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 grid items-start gap-12 md:grid-cols-[1fr_2fr]"
        >
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-copper">
            What we do
          </span>
          <div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-none tracking-[-0.03em]">
              Six disciplines, <em className="italic text-copper">one phone number.</em>
            </h2>
            <p className="mt-6 max-w-[52ch] text-[17px] font-light leading-[1.6] text-ash">
              From a midnight emergency to a planned bathroom refit — every job backed
              by a decade of craft and the unhurried precision of people who care about getting it right.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3 md:auto-rows-[minmax(240px,auto)]">
          {services.map((s, i) => (
            <BentoCard key={s.n} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
