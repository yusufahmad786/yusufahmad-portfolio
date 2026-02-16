import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from './Section'
import { profile } from '../data/profile'
import { ArrowUpRight } from 'lucide-react'

export default function Projects(){
  const [active, setActive] = useState(profile.projects?.[0] ?? null)
  const isTFI = active?.org === 'Capita'

  return (
    <div>
      <SectionHeader
        kicker="Work"
        title="Selected work"
        subtitle="A few projects that show how I think and how I deliver." 
      />

      <div className="grid gap-6 lg:grid-cols-[.95fr_1.05fr]">
        <div className="grid gap-3">
          {profile.projects.map((p) => (
            <button
              key={p.title}
              onClick={() => setActive(p)}
              className={
                'focus-ring group rounded-[26px] border border-white/10 dark:bg-white/5 dark:hover:bg-white/10 bg-white/70 hover:bg-white p-5 text-left transition shadow-sm hover:shadow-glow'
              }
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-extrabold">{p.title}</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-white/65">{p.org}</div>
                </div>
                <div className="text-xs font-bold text-slate-500 dark:text-white/55">{p.dates}</div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-slate-900/5 dark:bg-white/5 px-3 py-1 text-[11px] font-semibold text-slate-700 dark:text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-200 opacity-0 transition group-hover:opacity-100">
                Open details
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </button>
          ))}
        </div>

        <motion.div
          key={active?.title ?? 'selected'}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/60 via-white/30 to-transparent dark:from-white/10 dark:via-white/5 p-7 shadow-glow"
        >
          <div className="pointer-events-none absolute -top-20 right-[-100px] h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-[-100px] h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-30 bg-grid" />

          <div className="relative">
            {active ? (
              <>
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-white/55">
                  Selected project
                </div>
                <div className="mt-2 text-2xl font-extrabold tracking-tight">{active.title}</div>
                <div className="mt-2 text-sm font-semibold text-slate-600 dark:text-white/70">{active.org}</div>

                {isTFI ? (
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <Stat k="Role" v="L2 QA escalation" />
                    <Stat k="Automation" v="10 hours saved weekly" />
                    <Stat k="AI testing" v="Virtual Agent flow checks" />
                  </div>
                ) : null}

                <div className="mt-5 text-sm leading-relaxed text-slate-700 dark:text-white/75 sm:text-base">
                  {active.description}
                </div>
              </>
            ) : (
              <>
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-white/55">Selected work</div>
                <div className="mt-2 text-2xl font-extrabold tracking-tight">Add your projects</div>
                <div className="mt-4 text-sm text-slate-600 dark:text-white/70">
                  When you add projects in profile data, they will appear here automatically.
                </div>
              </>
            )}

            {active ? (
              <div className="mt-6">
                <div className="text-sm font-extrabold">Tech and methods</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-900 dark:text-indigo-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <Mini title="My role" text="Quality mindset in the loop: test design, risk based checks, automation where it saved the most time." />
              <Mini title="How I measure" text="Fewer escaped defects, quicker feedback cycles, stable suites, and calmer release days." />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function Mini({ title, text }){
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/5 dark:bg-white/5 p-4">
      <div className="text-sm font-extrabold">{title}</div>
      <div className="mt-1 text-sm text-slate-600 dark:text-white/70">{text}</div>
    </div>
  )
}

function Stat({ k, v }){
  return (
    <div className="rounded-2xl border border-white/10 bg-white/70 dark:bg-white/5 p-4 shadow-sm">
      <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-white/55">{k}</div>
      <div className="mt-1 text-sm font-extrabold text-slate-900 dark:text-white">{v}</div>
    </div>
  )
}
