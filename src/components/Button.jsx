import React from 'react'
import { cn } from '../lib/cn'

export function Button({
  as: Comp = 'button',
  className,
  variant = 'primary',
  size = 'md',
  ...props
}){
  const base =
    'focus-ring inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition active:scale-[.98] disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    primary:
      'bg-white text-ink-900 hover:bg-white/90 shadow-glow',
    ghost:
      'border border-white/10 bg-white/5 hover:bg-white/10 dark:bg-white/5 dark:hover:bg-white/10 bg-slate-900/5 hover:bg-slate-900/10',
    soft:
      'border border-indigo-400/25 bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-900 dark:text-white',
    link: 'bg-transparent hover:bg-white/5'
  }

  const sizes = {
    sm: 'h-10 px-4 text-sm',
    md: 'h-12 px-5 text-sm',
    lg: 'h-14 px-6 text-base'
  }

  return (
    <Comp
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
}
