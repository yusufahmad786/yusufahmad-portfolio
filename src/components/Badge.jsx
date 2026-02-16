import React from 'react'
import { cn } from '../lib/cn'

export function Badge({ className, children }){
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-white/10 bg-slate-900/5 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-slate-800 dark:text-white/90',
        className
      )}
    >
      {children}
    </span>
  )
}
