'use client';

import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-mono text-[13px] uppercase tracking-[0.05em] transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-copper text-paper hover:bg-copper-deep hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_var(--color-copper)]',
        ghost:
          'border border-current bg-transparent hover:bg-cream hover:text-ink hover:border-cream',
        ghostDark:
          'border border-ink bg-transparent text-ink hover:bg-ink hover:text-paper',
        outline:
          'border border-cream/30 bg-white/5 text-cream backdrop-blur-sm hover:bg-cream hover:text-ink hover:border-cream',
      },
      size: {
        default: 'px-7 py-4',
        sm: 'px-4 py-2.5 text-[11px]',
        lg: 'px-9 py-5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, children, ...props }, ref) => {
  const Comp = asChild ? 'span' : 'button';
  return (
    <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </Comp>
  );
});
Button.displayName = 'Button';

export { Button, buttonVariants };
