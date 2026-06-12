import { motion } from 'framer-motion'
import {
  BadgeCheck, Stethoscope, ClipboardList, MessageCircle, ScanLine, Brain,
} from 'lucide-react'
import { whyChoose, conditions } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

const iconMap = { BadgeCheck, Stethoscope, ClipboardList, MessageCircle, ScanLine, Brain }

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}
const tagVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
}

export default function WhyChoose() {
  return (
    <section
      id="why-us"
      className="py-24"
      aria-label="Why choose Dr Arunav"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Why Choose */}
          <div>
            <ScrollReveal>
              <span className="section-eyebrow">
                <span className="w-6 h-px bg-medical-sky inline-block" />
                Our Advantage
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-medical-blue leading-tight mt-1">
                Why Choose<br />
                <span className="text-gradient">Dr Arunav?</span>
              </h2>
              <p className="text-slate-500 mt-4 text-sm leading-relaxed max-w-md">
                A decade of dedicated neurological expertise combined with a patient-first approach that makes complex care feel clear and accessible.
              </p>
            </ScrollReveal>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-4 mt-8"
            >
              {whyChoose.map((item, i) => {
                const Icon = iconMap[item.icon] || BadgeCheck
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 hover:border-sky-200 transition-all duration-300 group"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,247,255,0.7) 100%)',
                      boxShadow: '0 2px 12px rgba(26,60,110,0.05)',
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-11 h-11 rounded-2xl shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(14,165,233,0.12) 0%, rgba(6,182,212,0.18) 100%)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)',
                      }}
                    >
                      <Icon size={18} className="text-medical-sky group-hover:text-medical-blue transition-colors" />
                    </div>
                    <div>
                      <div className="font-semibold text-medical-blue text-sm">{item.title}</div>
                      <div className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.desc}</div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Conditions Treated */}
          <div>
            <ScrollReveal>
              <span className="section-eyebrow">
                <span className="w-6 h-px bg-medical-sky inline-block" />
                Conditions We Treat
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-medical-blue leading-tight mt-1">
                Neurological<br />
                <span className="text-gradient">Conditions</span>
              </h2>
              <p className="text-slate-500 mt-4 text-sm leading-relaxed max-w-md">
                From common headaches to rare neuromuscular disorders — comprehensive care across the full spectrum of neurology.
              </p>
            </ScrollReveal>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-wrap gap-2.5 mt-8"
            >
              {conditions.map((cond, i) => (
                <motion.span
                  key={i}
                  variants={tagVariants}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border cursor-default transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, rgba(240,247,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
                    borderColor: 'rgba(14,165,233,0.25)',
                    color: '#1a3c6e',
                    boxShadow: '0 1px 8px rgba(14,165,233,0.1), inset 0 1px 0 rgba(255,255,255,0.9)',
                  }}
                >
                  {cond}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA card */}
            <ScrollReveal delay={0.3} className="mt-8">
              <div
                className="p-6 rounded-3xl text-white"
                style={{
                  background: 'linear-gradient(135deg, #1a3c6e 0%, #0369a1 60%, #0ea5e9 100%)',
                  boxShadow: '0 12px 40px rgba(26,60,110,0.25)',
                }}
              >
                <h3 className="font-display font-bold text-lg">Not sure if you need a neurologist?</h3>
                <p className="text-sky-100 text-sm mt-1 mb-4">
                  Get a prompt consultation and let Dr Arunav evaluate your symptoms.
                </p>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold bg-white text-medical-blue hover:bg-sky-50 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
                >
                  Book a Consultation
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
