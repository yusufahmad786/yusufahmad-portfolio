import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { SectionHeader } from './Section'

export default function About(){
  return (
    <div className="relative">
      <SectionHeader
        kicker="Profile"
        title="How I work"
        subtitle="I keep testing practical: clear risks, clear evidence, and fast feedback for developers and stakeholders." 
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <div className="relative overflow-hidden glass rounded-[32px] p-6 shadow-glow sm:p-8">
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

          <div className="relative space-y-4 text-sm leading-relaxed text-slate-700 dark:text-white/75 sm:text-base">
            {profile.about.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
            <Step n="01" t="Read the risk" d="I start from user impact and failure modes, then pick the strongest checks." />
            <Step n="02" t="Prove it" d="Repro steps, logs, SQL evidence, and clean Jira tickets that speed fixes." />
            <Step n="03" t="Keep it stable" d="Automation is only useful if it stays reliable in CI and in real releases." />
          </div>
        </div>

        <div className="grid gap-6">
          <Card title="Testing focus" items={profile.coreSkills.testing} accent="from-indigo-500/20 to-transparent" />
          <Card title="Automation and tools" items={[...profile.coreSkills.automation.slice(0, 5), 'Jenkins', 'Maven', 'Git']} accent="from-fuchsia-500/18 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/70 to-transparent dark:from-white/8 p-6 shadow-glow"
          >
            <div className="text-sm font-extrabold">What recruiters usually ask me</div>
            <div className="mt-4 grid gap-3">
              <QA q="Do you only do manual testing?" a="No. I ship value with both: solid manual coverage and automation that stays stable." />
              <QA q="Have you tested APIs?" a="Yes. Postman and Rest Assured for validation, plus SQL to cross check data in DB." />
              <QA q="Do you understand AI testing?" a="Yes. I have validated AI Virtual Agent flows in production systems and keep learning AI testing patterns." />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function Card({ title, items, accent }){
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/70 dark:bg-white/5 p-6 shadow-glow"
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="relative">
        <div className="text-sm font-extrabold">{title}</div>
        <div className="mt-4 flex flex-wrap gap-2">
          {items.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-slate-900/5 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-slate-800 dark:text-white/80"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function QA({ q, a }){
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/5 dark:bg-white/5 p-4">
      <div className="text-sm font-extrabold">{q}</div>
      <div className="mt-1 text-sm text-slate-600 dark:text-white/70">{a}</div>
    </div>
  )
}

function Step({ n, t, d }){
  return (
    <div className="rounded-2xl border border-white/10 bg-white/70 dark:bg-white/5 p-4">
      <div className="flex items-center justify-between">
        <div className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-white/55">{n}</div>
        <div className="h-2 w-2 rounded-full bg-indigo-500" />
      </div>
      <div className="mt-2 text-sm font-extrabold">{t}</div>
      <div className="mt-1 text-sm text-slate-600 dark:text-white/70">{d}</div>
    </div>
  )
}
