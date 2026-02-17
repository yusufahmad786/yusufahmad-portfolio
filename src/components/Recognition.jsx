import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from './Section'
import { profile } from '../data/profile'
import { Award, BadgeCheck, Quote } from 'lucide-react'

export default function Recognition(){
  const certs = profile.certifications
  const awards = profile.awards

  const marquee = useMemo(() => {
    const items = [...profile.recommendations, ...profile.recommendations]
    return items
  }, [])

  return (
    <div>
      <SectionHeader
        kicker="Trust"
        title="Certifications, awards, and recommendations"
        subtitle="Recognition is nice. What matters more is consistent delivery. These are a few signals." 
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="glass rounded-[32px] p-6 shadow-glow lg:col-span-2"
        >
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-indigo-200" />
            <div className="text-sm font-extrabold">Licenses and certifications</div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {certs.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
              >
                <div className="text-sm font-extrabold text-slate-900 dark:text-white">{c.title}</div>
                <div className="mt-1 text-sm text-slate-700 dark:text-white/70">{c.issuer}</div>
                <div className="mt-3 text-xs font-bold text-slate-500 dark:text-white/55">Issued {c.year}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-fuchsia-500/15 via-white/5 to-transparent p-6 shadow-glow"
        >
          <div className="pointer-events-none absolute -top-16 -right-20 h-60 w-60 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-fuchsia-200" />
              <div className="text-sm font-extrabold">Awards</div>
            </div>

            <div className="mt-5 grid gap-3">
              {awards.map((a) => (
                <div
                  key={a.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left hover:bg-white/10 transition"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-extrabold">{a.title}</div>
                      <div className="mt-1 text-sm text-white/70">{a.issuer}</div>
                    </div>
                    <div className="text-xs font-bold text-white/55">{a.year}</div>
                  </div>
                  <div className="mt-2 text-sm text-white/70">{a.details}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* recommendations marquee */}
      <div className="mt-6 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-glow">
        <div className="flex items-center gap-2 border-b border-white/10 px-6 py-4">
          <Quote className="h-5 w-5 text-indigo-200" />
          <div className="text-sm font-extrabold">Recommendations</div>
          <div className="ml-auto text-xs font-bold text-white/55">Auto scrolling. Hover to pause.</div>
        </div>
        <Marquee items={marquee} />
      </div>

    </div>
  )
}

function Marquee({ items }){
  return (
    <div className="group relative">
      <div className="animate-[marquee_35s_linear_infinite] group-hover:[animation-play-state:paused]">
        <div className="flex w-max gap-4 px-6 py-5">
          {items.map((r, i) => (
            <Card key={r.name + i} rec={r} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

function Card({ rec }){
  return (
    <div className="w-[320px] shrink-0 rounded-[26px] border border-white/10 bg-ink-800/40 p-5">
      <div className="text-sm font-extrabold">{rec.name}</div>
      <div className="mt-1 text-sm text-white/65">{rec.title}</div>
      <div className="mt-4 text-sm leading-relaxed text-white/75">{rec.quote}</div>
    </div>
  )
}
