import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { SectionHeader } from './Section'

export default function Experience(){
  return (
    <div>
      <SectionHeader
        kicker="Career"
        title="Experience"
        subtitle="A mix of product quality, automation delivery, and production investigation." 
      />

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-slate-200 dark:bg-white/10 sm:left-8" />

        <div className="grid gap-8">
          {profile.experience.map((job, idx) => (
            <motion.div
              key={job.company + job.role}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.03 }}
              className="relative pl-12 sm:pl-20"
            >
              <div className="absolute left-0 top-3 sm:left-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 shadow-glow">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="h-8 w-8 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="glass rounded-[32px] p-6 shadow-sm dark:shadow-glow sm:p-7">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-lg font-extrabold">{job.role}</div>
                    <div className="text-sm font-semibold text-slate-700 dark:text-white/70">{job.company}</div>
                  </div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-white/60 sm:mt-0 sm:text-right">

                    <div className="font-semibold text-slate-700 dark:text-white/70">{job.dates}</div>
                    <div>{job.location}</div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {job.highlights.map((h) => (
                    <div
  key={h}
  className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5"
>
  <div className="text-sm text-slate-700 dark:text-white/80">{h}</div>
</div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:border-white/10 dark:bg-indigo-500/10 dark:text-indigo-100"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
