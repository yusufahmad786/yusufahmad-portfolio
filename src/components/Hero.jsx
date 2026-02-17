import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, BadgeCheck, Linkedin, Mail, Phone } from 'lucide-react'
import { profile } from '../data/profile'
import { Badge } from './Badge'
import { Button } from './Button'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: 'easeOut' }
  })
}

export default function Hero(){
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/70 via-white/40 to-transparent dark:from-white/10 dark:via-white/5 p-6 shadow-glow sm:p-10">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.14]" />
      <div className="pointer-events-none absolute -top-24 right-[-120px] h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-[-120px] h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />
      <div className="pointer-events-none absolute top-10 left-10 h-10 w-10 rounded-2xl bg-white/40 dark:bg-white/10 animate-floaty" />
      <div className="pointer-events-none absolute bottom-14 right-14 h-12 w-12 rounded-full bg-indigo-500/15 blur-sm animate-floatySlow" />

      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div className="flex flex-col gap-5">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>
                <BadgeCheck className="h-3.5 w-3.5" />
                {profile.availability}
              </Badge>
              <Badge>
                <MapPin className="h-3.5 w-3.5" />
                {profile.location}
              </Badge>
              <Badge>{profile.pronouns}</Badge>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            {profile.name}
            <span className="block bg-gradient-to-r from-indigo-200 via-white to-fuchsia-200 bg-[length:200%_200%] bg-clip-text text-transparent animate-shimmer">
              {profile.headline}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="max-w-xl text-sm leading-relaxed text-slate-700 dark:text-white/75 sm:text-base"
          >
            {profile.subheadline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="flex flex-wrap gap-2"
          >
            {profile.badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-white/10 bg-slate-900/5 dark:bg-white/5 px-3 py-1 text-xs font-semibold text-slate-800 dark:text-white/85 hover:bg-slate-900/10 dark:hover:bg-white/10 transition"
              >
                {b}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <Button as="a" href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
              Email
            </Button>
            <Button
              as="a"
              href={`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
            >
              <Phone className="h-4 w-4" />
              WhatsApp
            </Button>
            <Button
              as="a"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Button>
            <Button as="a" href="#contact" variant="soft">
              Contact
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-2 rounded-[28px] border border-white/10 bg-white/70 dark:bg-white/5 p-4"
          >
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-white/55">
              Worked with
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              {[
                { src: '/assets/capita.webp', alt: 'Capita' },
                { src: '/assets/dunnes.webp', alt: 'Dunnes Stores' },
                { src: '/assets/everise.webp', alt: 'Everise' },
                { src: '/assets/tcs.webp', alt: 'Tata Consultancy Services' },
                { src: '/assets/ul_logo.webp', alt: 'University of Limerick' },
                { src: '/assets/integral_logo.webp', alt: 'Integral University' }
              ].map((l) => (
                <div
                  key={l.alt}
                  className="grid h-11 w-24 place-items-center rounded-2xl border border-white/10 bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 hover:scale-[1.02] transition"
                  title={l.alt}
                >
                  <img src={l.src} alt={l.alt} className="h-7 w-20 object-contain" loading="lazy" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.55, ease: 'easeOut' }}
          className="grid gap-3 sm:grid-cols-2"
        >
          {profile.quickStats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-[28px] p-5 shadow-glow hover:translate-y-[-2px] transition"
            >
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-white/55">
                {s.label}
              </div>
              <div className="mt-2 text-2xl font-extrabold">{s.value}</div>
              <div className="mt-2 text-sm text-slate-600 dark:text-white/65">{s.hint}</div>
            </div>
          ))}
          <div className="sm:col-span-2">
            <div className="glass rounded-[28px] p-6 shadow-glow">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-200">
                What I bring
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <Item title="Quality first mindset" text="Clear test strategy, strong coverage, and disciplined defect triage." />
                <Item title="Automation that matters" text="Reliable suites that reduce regression time and unblock releases." />
                <Item title="API and data checks" text="Postman, Rest Assured, SQL validation, logs and root cause analysis." />
                <Item title="Agile collaboration" text="Fast feedback loops in sprints, crisp communication, and ownership." />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function Item({ title, text }){
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/5 dark:bg-white/5 p-4">
      <div className="text-sm font-extrabold">{title}</div>
      <div className="mt-1 text-sm text-slate-600 dark:text-white/70">{text}</div>
    </div>
  )
}
