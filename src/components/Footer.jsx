import React from 'react'
import { profile } from '../data/profile'

export default function Footer(){
  return (
    <footer className="px-4 pb-12 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-sm text-white/70">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-extrabold text-white">{profile.name}</div>
              <div className="text-white/65">{profile.headline}</div>
            </div>
            <div className="text-white/55">© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
