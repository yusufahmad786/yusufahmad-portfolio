import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '../lib/cn'

export default function ThemeToggle({ theme, onToggle, className }){
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        'focus-ring inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition',
        'dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10',
        'border-slate-200/70 bg-white/70 hover:bg-white',
        className
      )}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}
