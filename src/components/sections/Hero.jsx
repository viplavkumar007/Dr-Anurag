import { motion } from 'framer-motion'
import { Phone, MessageCircle, CalendarCheck, Star, ArrowDown } from 'lucide-react'
import { brand, hero } from '../../data/siteContent'
import doctorImg from '../../assets/doctor.jpeg'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}
const item = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  const waUrl = `https://wa.me/91${brand.phone}?text=${encodeURIComponent(brand.whatsappMessage)}`

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #071829 0%, #0f2035 35%, #1a3c6e 65%, #0c4a7a 85%, #0369a1 100%)',
          }}
        />
        {/* Decorative blobs */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="section-container w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-sky-300 border border-sky-500/30 bg-sky-500/10">
                <Star size={10} fill="currentColor" />
                {hero.eyebrow}
              </span>
            </motion.div>

            <motion.div variants={item} className="flex flex-col gap-2">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                {hero.headline}
                <br />
                <span
                  className="block"
                  style={{
                    background: 'linear-gradient(90deg, #38bdf8 0%, #06b6d4 60%, #10b981 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {hero.headlineAccent}
                </span>
              </h1>
            </motion.div>

            <motion.p variants={item} className="text-sky-100/80 text-base lg:text-lg leading-relaxed max-w-xl">
              {hero.subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white text-sm"
                style={{
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
                  boxShadow: '0 4px 24px rgba(14,165,233,0.45), inset 0 1px 0 rgba(255,255,255,0.25)',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <CalendarCheck size={16} />
                Book Appointment
              </button>

              <a
                href={`tel:${brand.phone}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white text-sm"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: '1.5px solid rgba(255,255,255,0.25)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
              >
                <Phone size={16} />
                Call Now
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white text-sm"
                style={{
                  background: 'linear-gradient(135deg, #128c7e 0%, #25d366 100%)',
                  boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2"
            >
              {hero.stats.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center py-3 px-2 rounded-2xl text-center"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span
                    className="font-display font-bold text-2xl"
                    style={{
                      background: 'linear-gradient(90deg, #38bdf8, #06b6d4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {s.value}
                  </span>
                  <span className="text-sky-200/70 text-[11px] font-medium mt-0.5">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Doctor Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-40"
                style={{ background: 'radial-gradient(circle, #0ea5e9 0%, #06b6d4 40%, transparent 70%)' }}
              />

              {/* Outer ring */}
              <div
                className="relative p-1.5 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(14,165,233,0.6) 0%, rgba(6,182,212,0.3) 50%, rgba(16,185,129,0.4) 100%)',
                }}
              >
                <div
                  className="p-1 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(4px)' }}
                >
                  <img
                    src={doctorImg}
                    alt="Dr Arunav Garg — Neurologist"
                    className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full object-cover"
                    style={{
                      boxShadow: '0 8px 48px rgba(14,165,233,0.3)',
                    }}
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating badge — Experience */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-6 top-1/4 px-4 py-2.5 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px rgba(26,60,110,0.2)',
                }}
              >
                <div className="text-center">
                  <div className="font-display font-bold text-xl text-medical-blue leading-none">10+</div>
                  <div className="text-[10px] font-semibold text-sky-600 tracking-wide mt-0.5">Years Exp.</div>
                </div>
              </motion.div>

              {/* Floating badge — Patients */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-4 bottom-1/4 px-4 py-2.5 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px rgba(26,60,110,0.2)',
                }}
              >
                <div className="text-center">
                  <div className="font-display font-bold text-xl text-medical-blue leading-none">5K+</div>
                  <div className="text-[10px] font-semibold text-sky-600 tracking-wide mt-0.5">Patients</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-sky-300/60 hover:text-sky-300 transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] tracking-widest uppercase font-medium">Scroll</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  )
}
