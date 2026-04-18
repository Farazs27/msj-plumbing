'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Phone, ArrowUpRight, MapPin, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

function CopperBeam({ className, delay = 0, width = 520, height = 120, rotate = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -80, rotate: rotate - 12 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 2.2, delay, ease: [0.23, 0.86, 0.39, 0.96] }}
      className={cn('absolute pointer-events-none', className)}
    >
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-gradient-to-r from-copper/25 via-copper/10 to-transparent',
            'backdrop-blur-[3px] border border-copper/20',
            'shadow-[0_8px_48px_0_rgba(200,125,60,0.18)]',
            'after:absolute after:inset-0 after:rounded-full',
            'after:bg-[radial-gradient(circle_at_50%_50%,rgba(200,125,60,0.35),transparent_70%)]'
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function PipelineGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.08]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,125,60,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(200,125,60,0.6) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />
    </div>
  );
}

function Drip({ left, delay }) {
  return (
    <motion.div
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: [0, 30, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 3.4, repeat: Infinity, delay, ease: 'easeInOut' }}
      className="absolute top-0 h-1.5 w-1.5 rounded-full bg-copper/80 blur-[1px]"
      style={{ left, boxShadow: '0 0 12px rgba(200,125,60,0.6)' }}
    />
  );
}

export default function PremiumHero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.4 + i * 0.15, ease: [0.25, 0.4, 0.25, 1] },
    }),
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-ink text-cream">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85"
          alt="Copper pipework detail"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
          style={{ filter: 'grayscale(0.35) contrast(1.1)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,14,15,0.65) 0%, rgba(14,14,15,0.35) 45%, rgba(14,14,15,0.95) 100%)',
          }}
        />
      </div>

      <PipelineGrid />

      <div className="absolute inset-0">
        <CopperBeam delay={0.2} width={620} height={150} rotate={14} className="left-[-8%] top-[18%]" />
        <CopperBeam delay={0.5} width={480} height={120} rotate={-14} className="right-[-5%] top-[68%]" />
        <CopperBeam delay={0.4} width={300} height={80} rotate={-8} className="left-[8%] bottom-[6%]" />
        <CopperBeam delay={0.7} width={200} height={60} rotate={22} className="right-[20%] top-[10%]" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 20%, rgba(200,125,60,0.22), transparent 55%), linear-gradient(180deg, rgba(14,14,15,0.5) 0%, rgba(14,14,15,0.15) 40%, rgba(14,14,15,0.9) 100%)',
        }}
      />

      <Drip left="22%" delay={0} />
      <Drip left="58%" delay={1.2} />
      <Drip left="82%" delay={2.4} />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[var(--max)] items-end gap-16 px-[var(--gutter)] pb-20 pt-40 md:grid-cols-[1fr_auto]">
        <div>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-copper/25 bg-copper/5 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-copper opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-copper" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream/80">
              Dorset · Poole · Bournemouth
            </span>
          </motion.div>

          <h1
            className="mb-8 font-display text-[clamp(3rem,9vw,8.5rem)] font-light leading-[0.9] tracking-[-0.04em]"
          >
            <motion.span
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="block overflow-hidden"
            >
              <span className="block">Plumbing</span>
            </motion.span>
            <motion.span
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="block overflow-hidden"
            >
              <span className="block">as it was</span>
            </motion.span>
            <motion.span
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="block overflow-hidden"
            >
              <span className="block italic text-copper">meant to be.</span>
            </motion.span>
          </h1>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-10 max-w-[42ch] text-[clamp(16px,1.3vw,19px)] font-light leading-[1.55] text-ash-light"
          >
            A decade of copper, calm hands, and a 45-minute promise. We handle the burst at 2am
            and the slow drip on Sunday morning with the same unhurried precision.
          </motion.p>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="tel:01202080151"
              className="group inline-flex items-center gap-3 rounded-full bg-copper px-7 py-4 font-mono text-[13px] uppercase tracking-[0.05em] text-paper transition-all duration-500 hover:-translate-y-0.5 hover:bg-copper-deep hover:shadow-[0_20px_40px_-20px_rgba(200,125,60,0.8)]"
            >
              <Phone className="h-4 w-4 transition-transform group-hover:rotate-[-12deg]" />
              Call the 24/7 line
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 rounded-full border border-cream/30 bg-white/5 px-7 py-4 font-mono text-[13px] uppercase tracking-[0.05em] text-cream backdrop-blur-sm transition-all duration-500 hover:border-cream hover:bg-cream hover:text-ink"
            >
              Our craft
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>

          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-14 flex flex-wrap gap-8 border-t border-cream/10 pt-8"
          >
            <div className="flex items-center gap-2.5 text-ash-light">
              <MapPin className="h-4 w-4 text-copper" />
              <span className="font-mono text-[11px] uppercase tracking-[0.15em]">
                8–10 Yarmouth Rd · BH12
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-ash-light">
              <Clock className="h-4 w-4 text-copper" />
              <span className="font-mono text-[11px] uppercase tracking-[0.15em]">
                24 / 7 · 365 days a year
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative hidden md:block"
        >
          <div className="relative rounded-sm border border-cream/10 bg-ink-soft/60 p-6 backdrop-blur-md">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ash-light">
              Response time
            </div>
            <div className="mt-2 font-display text-[72px] font-light italic leading-none tracking-[-0.03em] text-cream">
              45<span className="text-copper">min</span>
            </div>
            <div className="mt-6 flex items-center gap-2 border-t border-cream/10 pt-4">
              <span className="h-px w-8 bg-copper" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash-light">
                Core zone guarantee
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
