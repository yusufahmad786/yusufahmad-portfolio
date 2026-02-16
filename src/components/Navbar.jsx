import React, { useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './Button'
import { cn } from '../lib/cn'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ activeId, theme, onToggleTheme }){
  const [open, setOpen] = useState(false)

  const items = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Selected work' },
      { id: 'education', label: 'Education' },
      { id: 'recognition', label: 'Recognition' },
      { id: 'contact', label: 'Contact' }
    ],
    []
  )

  const go = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="backdrop-blur border-b border-white/10 dark:bg-ink-900/70 bg-white/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <button
            onClick={() => go('home')}
            className="focus-ring flex items-center gap-3 rounded-2xl px-2 py-1"
            aria-label="Go to top"
          >
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-ink-900 font-extrabold">
              YA
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-extrabold tracking-tight">Yusuf Ahmad</div>
              <div className="text-xs text-slate-600 dark:text-white/60">Software Test Engineer</div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {items.map((it) => (
              <button
                key={it.id}
                onClick={() => go(it.id)}
                className={cn(
                  'focus-ring rounded-2xl px-4 py-2 text-sm font-semibold transition',
                  'text-slate-700 hover:text-slate-900 hover:bg-slate-900/5',
                  'dark:text-white/75 dark:hover:text-white dark:hover:bg-white/5',
                  activeId === it.id && 'bg-white/10 dark:bg-white/10 bg-slate-900/5 text-slate-900 dark:text-white'
                )}
              >
                {it.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} className="hidden lg:inline-flex" />
            <button
              className="focus-ring lg:hidden inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 dark:bg-white/5 dark:hover:bg-white/10 bg-white/70 hover:bg-white"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div
        className={cn(
          'lg:hidden overflow-hidden border-b border-white/10 backdrop-blur transition-[max-height] duration-300 dark:bg-ink-900/85 bg-white/80',
          open ? 'max-h-[420px]' : 'max-h-0'
        )}
      >
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid gap-2">
            {items.map((it) => (
              <button
                key={it.id}
                onClick={() => go(it.id)}
                className={cn(
                  'focus-ring rounded-2xl px-4 py-3 text-left text-sm font-semibold transition',
                  'bg-slate-900/5 hover:bg-slate-900/10 text-slate-800',
                  'dark:bg-white/5 dark:hover:bg-white/10 dark:text-white',
                  activeId === it.id && 'bg-slate-900/10 dark:bg-white/10'
                )}
              >
                {it.label}
              </button>
            ))}
            <div className="flex items-center justify-between gap-3 pt-2">
              <div className="text-xs font-semibold text-slate-600 dark:text-white/60">Theme</div>
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            </div>
            <Button as="a" href="#contact" variant="soft" className="mt-2">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
