import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from './Section'
import { profile } from '../data/profile'

const LEVELS = [
  { key: 'testing', label: 'Testing', score: 92 },
  { key: 'automation', label: 'Automation', score: 88 },
  { key: 'api', label: 'API', score: 84 },
  { key: 'cicd', label: 'CI/CD', score: 78 },
  { key: 'data', label: 'SQL and data', score: 80 },
  { key: 'waysOfWorking', label: 'Agile delivery', score: 86 }
]

export default function Skills(){
  return (
    <div>
      <SectionHeader
        kicker="Toolbox"
        title="Skills that ship quality"
        subtitle="Manual coverage plus automation and API checks, backed by strong release discipline." 
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="glass rounded-[32px] p-6 shadow-glow lg:col-span-2"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-extrabold">Skill matrix</div>
              <div className="mt-1 text-sm text-slate-600 dark:text-white/65">
                A quick view of where I spend most of my time.
              </div>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
              Manual + Automation
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            {LEVELS.map((l) => (
              <Row key={l.key} label={l.label} value={l.score} items={profile.coreSkills[l.key]} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-indigo-500/15 via-white/70 to-transparent dark:via-white/5 p-6 shadow-glow"
        >
          <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-indigo-500/25 blur-3xl" />
          <div className="relative">
            <div className="text-sm font-extrabold">Daily drivers</div>
            <div className="mt-1 text-sm text-slate-600 dark:text-white/65">Tools and methods I use on repeat.</div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                'Selenium WebDriver',
                'Java',
                'Postman',
                'TestNG',
                'Cucumber BDD',
                'Jenkins',
                'Maven',
                'Git',
                'Rest Assured',
                'SQL',
                'Jira',
                'Confluence'
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-white/10 bg-slate-900/5 dark:bg-white/5 p-4 text-sm font-semibold text-slate-800 dark:text-white/80 hover:bg-slate-900/10 dark:hover:bg-white/10 transition"
                >
                  {t}
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/55">
                Bonus
              </div>
              <div className="mt-2 text-sm text-slate-700 dark:text-white/75">
                Python and PowerShell scripts for faster validation and cleaner investigations.
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card title="Automation approach" items={profile.coreSkills.automation} />
        <Card title="API and data checks" items={[...profile.coreSkills.api, ...profile.coreSkills.data]} />
        <Card title="Ways of working" items={profile.coreSkills.waysOfWorking} />
      </div>
    </div>
  )
}

function Row({ label, value, items }){
  return (
    <div className="rounded-2xl border border-white/10 bg-white/70 dark:bg-white/5 p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-extrabold">{label}</div>
        <div className="text-xs font-bold text-slate-500 dark:text-white/60">{value}%</div>
      </div>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-300"
          style={{ width: `${value}%` }}
        />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.slice(0, 6).map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-slate-900/5 dark:bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:text-white/75"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

function Card({ title, items }){
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="glass rounded-[32px] p-6 shadow-glow"
    >
      <div className="text-sm font-extrabold">{title}</div>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-slate-900/5 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-slate-800 dark:text-white/80 hover:bg-slate-900/10 dark:hover:bg-white/10 transition"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
