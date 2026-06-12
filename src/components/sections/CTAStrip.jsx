import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail } from 'lucide-react'
import { brand } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

export default function CTAStrip() {
  const waUrl = `https://wa.me/91${brand.phone}?text=${encodeURIComponent(brand.whatsappMessage)}`

  return (
    <section
      id="cta"
      className="py-20 overflow-hidden relative"
      aria-label="Book appointment CTA"
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, #071829 0%, #0f2035 30%, #1a3c6e 65%, #0369a1 100%)',
        }}
      />

      {/* Pulse blob */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl -z-10"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.4) 0%, transparent 70%)' }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] -z-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="section-container text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-sky-300 border border-sky-500/30 bg-sky-500/10 mb-4">
            Neurological Care
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Need Neurology Consultation?
          </h2>
          <p className="text-sky-100/70 text-base mt-4 max-w-xl mx-auto">
            Book your appointment with Dr Arunav today. Prompt, accurate, and patient-friendly neurological care.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href={`tel:${brand.phone}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white text-sm"
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1.5px solid rgba(255,255,255,0.25)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <Phone size={16} />
              Call: {brand.phoneDisplay}
            </a>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white text-sm"
              style={{
                background: 'linear-gradient(135deg, #128c7e 0%, #25d366 100%)',
                boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,211,102,0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.4)'
              }}
            >
              <MessageCircle size={16} />
              WhatsApp Appointment
            </a>

            <a
              href={`mailto:${brand.email}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white text-sm"
              style={{
                background: 'linear-gradient(135deg, #1a3c6e 0%, #0ea5e9 100%)',
                boxShadow: '0 4px 20px rgba(14,165,233,0.4)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <Mail size={16} />
              Email Doctor
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
