import { motion } from 'framer-motion'
import { Award, Brain, Heart, Microscope, CheckCircle } from 'lucide-react'
import { about } from '../../data/siteContent'
import doctorImg from '../../assets/doctor.jpeg'
import ScrollReveal from '../ui/ScrollReveal'

const iconMap = { Award, Brain, Heart, Microscope }

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-white bg-medical-pattern" aria-label="About">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <ScrollReveal>
            <div className="relative flex justify-center">
              {/* Background decoration */}
              <div
                className="absolute top-8 left-8 right-8 bottom-8 rounded-3xl -z-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(26,60,110,0.06) 100%)',
                  border: '1px dashed rgba(14,165,233,0.2)',
                }}
              />
              <div className="relative">
                <div
                  className="p-1.5 rounded-[2.5rem]"
                  style={{
                    background: 'linear-gradient(135deg, #1a3c6e 0%, #0ea5e9 50%, #06b6d4 100%)',
                    boxShadow: '0 20px 60px rgba(26,60,110,0.2)',
                  }}
                >
                  <img
                    src={doctorImg}
                    alt="Dr Arunav — Neurologist"
                    className="w-72 sm:w-80 lg:w-96 rounded-[2rem] object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Floating credential badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-6 -right-4 px-5 py-4 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #1a3c6e 0%, #0369a1 100%)',
                    boxShadow: '0 12px 36px rgba(26,60,110,0.35)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/15">
                      <Brain size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm font-display">Neurologist</div>
                      <div className="text-sky-200 text-[11px]">MD, DM Neurology</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content Column */}
          <div className="flex flex-col gap-6">
            <ScrollReveal>
              <span className="section-eyebrow">
                <span className="w-6 h-px bg-medical-sky inline-block" />
                {about.eyebrow}
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-medical-blue leading-tight">
                {about.heading}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-4">
                {about.paragraphs.map((p, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed">{p}</p>
                ))}
              </div>
            </ScrollReveal>

            {/* Checklist */}
            <ScrollReveal delay={0.15}>
              <div className="flex flex-col gap-2">
                {['MBBS, MD, DM (Neurology)', 'Senior Consultant Neurologist', 'Evidence-Based Treatment Protocols', 'Teleconsultation Available'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                      style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)' }}
                    >
                      <CheckCircle size={12} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Highlight Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="grid grid-cols-2 gap-3 mt-2"
            >
              {about.highlights.map((h) => {
                const Icon = iconMap[h.icon] || Award
                return (
                  <motion.div
                    key={h.label}
                    variants={cardVariants}
                    className="flex items-start gap-3 p-4 rounded-2xl border border-sky-100 hover:border-sky-300/60 transition-all duration-300 cursor-default group"
                    style={{
                      background: 'linear-gradient(135deg, rgba(240,247,255,0.8) 0%, rgba(255,255,255,0.9) 100%)',
                      boxShadow: '0 2px 12px rgba(26,60,110,0.06)',
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(14,165,233,0.15) 0%, rgba(6,182,212,0.2) 100%)',
                      }}
                    >
                      <Icon size={18} className="text-medical-sky" />
                    </div>
                    <div>
                      <div className="text-medical-blue font-semibold text-sm leading-tight">{h.label}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{h.desc}</div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
