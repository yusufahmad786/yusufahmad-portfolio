import React from 'react'
import Navbar from './components/Navbar'
import BackgroundCanvas from './components/BackgroundCanvas'
import { Section } from './components/Section'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Recognition from './components/Recognition'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollSpy } from './components/useScrollSpy'
import { useTheme } from './components/useTheme'

export default function App(){
  const { theme, toggle } = useTheme()
  const sections = [
    'home',
    'about',
    'experience',
    'skills',
    'projects',
    'education',
    'recognition',
    'contact'
  ]

  const active = useScrollSpy(sections)

  return (
    <div className="min-h-screen text-slate-900 dark:text-white">
      {/* background layers */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-aurora" />
      <div className="pointer-events-none fixed inset-0 -z-20 opacity-30 noise" />
      <BackgroundCanvas theme={theme} />
      <Navbar activeId={active} theme={theme} onToggleTheme={toggle} />

      <main className="pt-24 sm:pt-24">
        <Section id="home" className="pb-16">
          <Hero />
        </Section>

        <Section id="about" className="py-12">
          <About />
        </Section>

        <Section id="experience" className="py-12">
          <Experience />
        </Section>

        <Section id="skills" className="py-12">
          <Skills />
        </Section>

        <Section id="projects" className="py-12">
          <Projects />
        </Section>

        <Section id="education" className="py-12">
          <Education />
        </Section>

        <Section id="recognition" className="py-12">
          <Recognition />
        </Section>

        <Section id="contact" className="py-12">
          <Contact />
        </Section>
      </main>

      <Footer />
    </div>
  )
}
