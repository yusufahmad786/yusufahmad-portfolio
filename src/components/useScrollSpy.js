import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds, options = {}){
  const [active, setActive] = useState(sectionIds[0] || 'home')

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        if (visible[0]?.target?.id) setActive(visible[0].target.id)
      },
      {
        root: null,
        threshold: [0.12, 0.2, 0.35, 0.5, 0.75],
        rootMargin: '-25% 0px -60% 0px',
        ...options
      }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [sectionIds.join('|')])

  return active
}
