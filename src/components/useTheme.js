import { useEffect, useMemo, useState } from 'react'

const KEY = 'ya_theme'

export function useTheme(){
  const getInitial = () => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem(KEY) : null
    if (saved === 'light' || saved === 'dark') return saved
    const prefersDark = typeof window !== 'undefined'
      ? window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      : true
    return prefersDark ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState(getInitial)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.classList.toggle('light', theme === 'light')
    window.localStorage.setItem(KEY, theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return useMemo(() => ({ theme, setTheme, toggle }), [theme])
}
