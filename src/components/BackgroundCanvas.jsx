import React, { useEffect, useRef } from 'react'

const DEFAULT_WORDS = [
  'Manual Testing',
  'Automation',
  'Selenium',
  'Java',
  'TestNG',
  'Cucumber BDD',
  'Postman',
  'Rest Assured',
  'API Testing',
  'CI/CD',
  'Jenkins',
  'Maven',
  'Git',
  'Agile',
  'SDLC',
  'STLC',
  'SQL',
  'Jira',
  'Confluence',
  'AI in Testing'
]

export default function BackgroundCanvas({ words = DEFAULT_WORDS, theme = 'dark' }){
  const ref = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const DPR = Math.min(2, window.devicePixelRatio || 1)
    canvas.width = Math.floor(w * DPR)
    canvas.height = Math.floor(h * DPR)
    canvas.style.width = w + 'px'
    canvas.style.height = h + 'px'
    ctx.scale(DPR, DPR)

    const items = Array.from({ length: Math.min(34, words.length) }).map((_, i) => {
      const text = words[i % words.length]
      return {
        text,
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.35,
        size: 11 + Math.random() * 8,
        a: 0.15 + Math.random() * 0.18
      }
    })

    const dots = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: 0.7 + Math.random() * 1.1,
      a: 0.06 + Math.random() * 0.08
    }))

    const onResize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.floor(w * DPR)
      canvas.height = Math.floor(h * DPR)
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }

    const onMouse = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouse)

    let raf = 0
    const tick = () => {
      raf = requestAnimationFrame(tick)
      ctx.clearRect(0, 0, w, h)

      const isDark = theme === 'dark'

      // faint gradient wash
      const g = ctx.createRadialGradient(
        mouse.current.x,
        mouse.current.y,
        10,
        mouse.current.x,
        mouse.current.y,
        Math.max(w, h) * 0.7
      )
      g.addColorStop(0, isDark ? 'rgba(99,102,241,0.12)' : 'rgba(99,102,241,0.10)')
      g.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      // dots
      ctx.fillStyle = isDark ? 'rgba(255,255,255,0.35)' : 'rgba(15,23,42,0.18)'
      for (const d of dots){
        d.x += d.vx
        d.y += d.vy
        if (d.x < -20) d.x = w + 20
        if (d.x > w + 20) d.x = -20
        if (d.y < -20) d.y = h + 20
        if (d.y > h + 20) d.y = -20
        ctx.globalAlpha = d.a
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // links
      ctx.globalAlpha = isDark ? 0.07 : 0.05
      ctx.strokeStyle = isDark ? '#ffffff' : '#0f172a'
      for (let i = 0; i < dots.length; i++){
        for (let j = i + 1; j < dots.length; j++){
          const a = dots[i]
          const b = dots[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < 130){
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // words
      ctx.textBaseline = 'middle'
      for (const it of items){
        if (!isReduced){
          const dx = mouse.current.x - it.x
          const dy = mouse.current.y - it.y
          const dist = Math.max(90, Math.hypot(dx, dy))
          it.vx += (dx / dist) * 0.002
          it.vy += (dy / dist) * 0.0015
        }

        it.x += it.vx
        it.y += it.vy
        it.vx *= 0.985
        it.vy *= 0.985

        if (it.x < -120) it.x = w + 120
        if (it.x > w + 120) it.x = -120
        if (it.y < -60) it.y = h + 60
        if (it.y > h + 60) it.y = -60

        ctx.font = `600 ${it.size}px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial`
        ctx.globalAlpha = it.a
        ctx.fillStyle = isDark ? 'rgba(255,255,255,0.80)' : 'rgba(15,23,42,0.55)'
        ctx.fillText(it.text, it.x, it.y)
      }

      ctx.globalAlpha = 1
    }

    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [words.join('|'), theme])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 opacity-35"
    />
  )
}
