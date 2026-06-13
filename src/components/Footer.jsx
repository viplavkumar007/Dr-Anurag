import { Brain, Phone, Mail, MapPin, MessageCircle, ExternalLink, Instagram, Youtube } from 'lucide-react'
import { brand } from '../data/siteContent'

const QUICK_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Why Choose Us', id: 'why-us' },
  { label: 'Blog', id: 'blog' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' },
]

const SERVICE_LINKS = [
  'Headache & Migraine',
  'Epilepsy & Seizures',
  'Stroke Evaluation',
  'Vertigo Treatment',
  "Parkinson's Disease",
  'Memory & Dementia',
]

export default function Footer() {
  const waUrl = `https://wa.me/91${brand.phone}?text=${encodeURIComponent(brand.whatsappMessage)}`

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer
      style={{ background: 'linear-gradient(180deg, #071829 0%, #050e1a 100%)' }}
      aria-label="Footer"
    >
      {/* Top WhatsApp CTA */}
      <div
        className="border-b"
        style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-sm">Ready to book your consultation?</p>
            <p className="text-sky-300/60 text-xs mt-0.5">Get expert neurological care today.</p>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl font-semibold text-white text-sm whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #128c7e 0%, #25d366 100%)',
              boxShadow: '0 4px 16px rgba(37,211,102,0.35)',
              transition: 'all 0.25s',
            }}
          >
            <MessageCircle size={16} />
            Book Appointment on WhatsApp
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="section-container py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-2xl text-white"
                style={{ background: 'linear-gradient(135deg, #1a3c6e 0%, #0ea5e9 100%)' }}
              >
                <Brain size={20} />
              </div>
              <div>
                <div className="text-white font-display font-bold text-base leading-tight">{brand.name}</div>
                <div className="text-sky-400/80 text-[10px] font-semibold tracking-widest uppercase">{brand.tagline}</div>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Expert neurological care with 10+ years of experience. Treating brain, nerve, and spine disorders with compassion and precision.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <a href={`tel:${brand.phone}`} className="flex items-center gap-2 text-sky-300/80 hover:text-sky-300 text-xs transition-colors">
                <Phone size={12} /> {brand.phoneDisplay}
              </a>
              <a href={`mailto:${brand.email}`} className="flex items-center gap-2 text-sky-300/80 hover:text-sky-300 text-xs transition-colors">
                <Mail size={12} /> {brand.email}
              </a>
              <a href={brand.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sky-300/80 hover:text-sky-300 text-xs transition-colors">
                <MapPin size={12} /> Get Directions <ExternalLink size={10} />
              </a>
              <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sky-300/80 hover:text-pink-300 text-xs transition-colors">
                <Instagram size={12} /> Instagram <ExternalLink size={10} />
              </a>
              <a href={brand.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sky-300/80 hover:text-red-300 text-xs transition-colors">
                <Youtube size={12} /> YouTube <ExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-slate-400 hover:text-sky-300 text-xs transition-colors text-left relative group"
                  >
                    <span className="relative after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-sky-400 group-hover:after:w-full after:transition-all after:duration-200">
                      {link.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 tracking-wide">Services</h3>
            <ul className="flex flex-col gap-2">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="text-slate-400 hover:text-sky-300 text-xs transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 tracking-wide">Book Appointment</h3>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${brand.phone}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-white text-xs font-semibold"
                style={{
                  background: 'rgba(14,165,233,0.15)',
                  border: '1px solid rgba(14,165,233,0.25)',
                  transition: 'all 0.2s',
                }}
              >
                <Phone size={13} /> Call Now
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-white text-xs font-semibold"
                style={{
                  background: 'rgba(37,211,102,0.15)',
                  border: '1px solid rgba(37,211,102,0.25)',
                  transition: 'all 0.2s',
                }}
              >
                <MessageCircle size={13} /> WhatsApp
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-white text-xs font-semibold"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  transition: 'all 0.2s',
                }}
              >
                <Mail size={13} /> Email Doctor
              </a>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-white text-xs font-semibold"
                style={{
                  background: 'rgba(225,48,108,0.15)',
                  border: '1px solid rgba(225,48,108,0.28)',
                  transition: 'all 0.2s',
                }}
              >
                <Instagram size={13} /> Instagram
              </a>
              <a
                href={brand.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-white text-xs font-semibold"
                style={{
                  background: 'rgba(255,0,51,0.15)',
                  border: '1px solid rgba(255,0,51,0.28)',
                  transition: 'all 0.2s',
                }}
              >
                <Youtube size={13} /> YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} {brand.name} · {brand.tagline}. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">{brand.domain}</p>
        </div>
      </div>
    </footer>
  )
}
