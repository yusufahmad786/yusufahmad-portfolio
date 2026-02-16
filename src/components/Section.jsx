import React from 'react'
import { cn } from '../lib/cn'

export function Section({ id, className, children }){
  return (
    <section id={id} className={cn('scroll-mt-24 px-4 sm:px-6 lg:px-8', className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}

export function SectionHeader({ kicker, title, subtitle, align = 'left' }){
  const alignCls =
    align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={cn('mb-7 flex flex-col gap-3', alignCls)}>
      {kicker ? (
        <div className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-300">
          {kicker}
        </div>
      ) : null}
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-white/70 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
