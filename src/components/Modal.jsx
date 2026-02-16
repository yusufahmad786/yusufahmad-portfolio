import React, { useEffect } from 'react'
import { X } from 'lucide-react'

export default function Modal({ open, onClose, title, children }){
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-16 mx-auto w-[min(1100px,92vw)]">
        <div className="glass rounded-[28px] border border-white/10 shadow-glow">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="text-sm font-extrabold">{title}</div>
            <button
              onClick={onClose}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="max-h-[75vh] overflow-auto p-4 sm:p-6">{children}</div>
        </div>
      </div>
    </div>
  )
}
