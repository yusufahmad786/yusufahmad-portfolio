import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from './Section'
import { profile } from '../data/profile'

export default function Education(){
  const masters = profile.education[0]
  const bachelors = profile.education[1]

  return (
    <div>
      <SectionHeader
        kicker="Academics"
        title="Education"
        subtitle="Masters highlighted first, because that is where I sharpened modern software engineering and AI testing thinking." 
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-indigo-500/15 via-white/50 to-transparent dark:via-white/5 p-7 shadow-glow"
        >
          <div className="pointer-events-none absolute -top-20 -right-24 h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl" />
          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5">
                  <img
                    src={masters.logo}
                    alt="University of Limerick logo"
                    className="h-10 w-10 object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-lg font-extrabold">{masters.degree}</div>
                  <div className="mt-1 text-sm font-semibold text-white/70">
                    {masters.school}
                  </div>
                </div>
              </div>
              <div className="text-sm text-white/60 text-right">
                <div className="font-semibold text-white/70">{masters.dates}</div>
                <div>{masters.location}</div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-200">
                {masters.highlight}
              </div>
              <div className="mt-3 grid gap-3">
                <img
                  src="/assets/degrees/ul_degree.png"
                  alt="University of Limerick degree summary"
                  className="w-full rounded-2xl border border-white/10 shadow-glow"
                  loading="lazy"
                />
                <div className="space-y-2 text-sm text-slate-700 dark:text-white/75">
                  {masters.details.map((d) => (
                    <p key={d}>{d}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-extrabold">Why this matters for QA</div>
              <div className="mt-2 text-sm text-slate-700 dark:text-white/75">
                Strong architecture thinking makes systems more testable. The AI testing module pushed me to validate ML driven features with clear risks, solid oracles, and measurable outcomes.
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Mini title="AI in Software Testing" text="Risk, evaluation, and practical validation mindset for ML driven features." />
              <Mini title="Architecture" text="Clean boundaries, clear interfaces, and testable services." />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="glass rounded-[32px] p-7 shadow-glow"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5">
                <img
                  src={bachelors.logo}
                  alt="Integral University logo"
                  className="h-10 w-10 object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="text-lg font-extrabold">{bachelors.degree}</div>
                <div className="mt-1 text-sm font-semibold text-white/70">
                  {bachelors.school}
                </div>
              </div>
            </div>
            <div className="text-sm text-white/60 text-right">
              <div className="font-semibold text-white/70">{bachelors.dates}</div>
              <div>{bachelors.location}</div>
            </div>
          </div>

          <div className="mt-5 grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/55">
                {bachelors.highlight}
              </div>
              <div className="mt-3 grid gap-3">
                <img
                  src="/assets/degrees/integral_degree.png"
                  alt="Integral University degree summary"
                  className="w-full rounded-2xl border border-white/10 shadow-glow"
                  loading="lazy"
                />
                <div className="text-sm text-slate-700 dark:text-white/75">{bachelors.details[0]}</div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-extrabold">Strong CS fundamentals</div>
              <div className="mt-2 text-sm text-slate-700 dark:text-white/75">
                A solid base in programming, data structures, and problem solving. This is where I built the technical depth that later made automation and debugging feel natural.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function Mini({ title, text }){
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm font-extrabold">{title}</div>
      <div className="mt-1 text-sm text-white/70">{text}</div>
    </div>
  )
}
