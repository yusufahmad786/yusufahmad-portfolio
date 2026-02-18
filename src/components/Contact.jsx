import React, { useMemo, useState } from 'react'
import { SectionHeader } from './Section'
import { profile } from '../data/profile'
import { Button } from './Button'
import { Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'

export default function Contact(){
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Website enquiry for ${profile.name}`)
    const body = encodeURIComponent(
      `Hi Yusuf,\n\n${message}\n\nFrom: ${name || 'Anonymous'}\n` 
    )
    return `mailto:${profile.email}?subject=${subject}&body=${body}`
  }, [name, message])

  return (
    <div>
      <SectionHeader
        kicker="Contact"
        title="Let’s talk"
        subtitle="If you are hiring for QA or SDET roles, I am open to connect." 
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="glass rounded-[32px] p-7 shadow-glow lg:col-span-1">
          <div className="text-sm font-extrabold">Contact details</div>

          <div className="mt-5 grid gap-3">
            <Info icon={<Mail className="h-5 w-5" />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <Info
              icon={<Phone className="h-5 w-5" />}
              label="WhatsApp"
              value={profile.whatsapp}
              href={`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`}
            />
            <Info icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" value="linkedin.com/in/yusufahmad786" href={profile.linkedin} />
            <Info icon={<MapPin className="h-5 w-5" />} label="Location" value={profile.location} />
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
            Prefer email? Send a message and I will reply quickly.
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/70 via-white/35 to-transparent dark:from-white/10 dark:via-white/5 p-7 shadow-glow lg:col-span-2">
          <div className="pointer-events-none absolute -top-16 right-[-80px] h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl" />
          <div className="relative">
            <div className="text-sm font-extrabold">Quick message</div>
            <div className="mt-1 text-sm text-slate-600 dark:text-white/65">
              This opens your email client with a pre filled subject and message.
            </div>

            <div className="mt-6 grid gap-4">
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-white/55">Your name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="focus-ring h-12 rounded-2xl border border-white/10 bg-white/80 dark:bg-white/5 px-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/35"
                  placeholder="Jane Recruiter"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-white/55">Message</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="focus-ring min-h-[140px] resize-y rounded-2xl border border-white/10 bg-white/80 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/35"
                  placeholder="Hi Yusuf, we have a QA role that matches your Selenium and API testing background. Can we talk this week?"
                />
              </label>

              <div className="flex flex-wrap items-center gap-3">
                <Button as="a" href={mailto}>
                  <Send className="h-4 w-4" />
                  Open email
                </Button>
                <Button
                  as="a"
                  href={`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hi Yusuf, I found your website and would like to connect about a QA role.')}`}
                  target="_blank"
                  rel="noreferrer"
                  variant="ghost"
                >
                  <Phone className="h-4 w-4" />
                  WhatsApp message
                </Button>
              </div>

              <div className="text-xs text-slate-500 dark:text-white/55">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Info({ icon, label, value, href }){
  const content = (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/70 dark:bg-white/5 p-4 hover:bg-white dark:hover:bg-white/10 transition">
      <div className="mt-0.5 text-indigo-600 dark:text-indigo-200">{icon}</div>
      <div>
        <div className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-white/55">{label}</div>
        <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-white/80">{value}</div>
      </div>
    </div>
  )

  if (href) {
    return (
      <a className="focus-ring block rounded-2xl" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
        {content}
      </a>
    )
  }

  return content
}
