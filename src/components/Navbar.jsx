import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Brain, Phone } from 'lucide-react'
import { brand } from '../data/siteContent'
import { useScrollBlur } from '../hooks/useScrollBlur'
import { useScrollSpy } from '../hooks/useScrollSpy'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const scrolled = useScrollBlur(20)
  const activeId = useScrollSpy(NAV_LINKS.map((l) => l.id))
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_2px_24px_rgba(26,60,110,0.10)] border-b border-slate-100'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
            aria-label="Go to top"
          >
            <div
              className="flex items-center justify-center w-10 h-10 rounded-2xl text-white"
              style={{ background: 'linear-gradient(135deg, #1a3c6e 0%, #0ea5e9 100%)' }}
            >
              <Brain size={20} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-base text-medical-blue tracking-tight">
                {brand.name}
              </span>
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-medical-sky">
                {brand.tagline}
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeId === link.id
                    ? 'text-medical-blue bg-sky-50'
                    : 'text-slate-600 hover:text-medical-blue hover:bg-slate-50'
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-medical-sky"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${brand.phone}`}
              className="flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-semibold text-medical-blue border-2 border-medical-blue/20 hover:bg-sky-50 transition-all duration-200"
            >
              <Phone size={14} />
              {brand.phoneDisplay}
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary"
            >
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-700"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.22 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl shadow-xl border-b border-slate-100 lg:hidden"
          >
            <nav className="section-container py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="flex items-center px-4 py-3 rounded-2xl text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-medical-blue transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-slate-100">
                <a
                  href={`tel:${brand.phone}`}
                  className="btn-outline justify-center"
                >
                  <Phone size={14} />
                  Call Now
                </a>
                <button
                  onClick={() => scrollTo('contact')}
                  className="btn-primary"
                >
                  <span>Book Appointment</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
