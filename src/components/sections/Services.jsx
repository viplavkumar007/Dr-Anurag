import { motion } from 'framer-motion'
import {
  Zap, Activity, HeartPulse, RotateCcw, Hand, Waves,
  Brain, Shield, Dumbbell, Stethoscope, CalendarCheck,
} from 'lucide-react'
import { services } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

const iconMap = { Zap, Activity, HeartPulse, RotateCcw, Hand, Waves, Brain, Shield, Dumbbell, Stethoscope }

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Services() {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="services"
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)' }}
      aria-label="Services"
    >
      <div className="section-container">
        <ScrollReveal className="text-center mb-14">
          <span className="section-eyebrow justify-center">
            <span className="w-6 h-px bg-medical-sky inline-block" />
            What We Treat
            <span className="w-6 h-px bg-medical-sky inline-block" />
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-medical-blue leading-tight mt-1">
            Neurology Services
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm lg:text-base">
            Comprehensive neurological care covering diagnosis, treatment, and long-term management across all major brain and nerve conditions.
          </p>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map((svc) => {
            const Icon = iconMap[svc.icon] || Brain
            return (
              <motion.div
                key={svc.id}
                variants={cardVariants}
                className="service-card group cursor-default"
              >
                {/* Icon */}
                <div
                  className={`flex items-center justify-center w-13 h-13 w-12 h-12 rounded-2xl bg-gradient-to-br ${svc.color} shrink-0`}
                  style={{
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 8px rgba(14,165,233,0.12)',
                  }}
                >
                  <Icon size={22} className={svc.iconColor} strokeWidth={1.8} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5 flex-1">
                  <h3 className="font-semibold text-medical-blue text-sm leading-snug group-hover:text-sky-600 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{svc.desc}</p>
                </div>

                {/* Book button */}
                <button
                  onClick={scrollToContact}
                  className="flex items-center gap-1.5 text-xs font-semibold text-medical-sky hover:text-medical-blue transition-colors mt-auto group/btn"
                >
                  <CalendarCheck size={13} />
                  <span className="relative after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-medical-sky group-hover/btn:after:w-full after:transition-all after:duration-200">
                    Book Appointment
                  </span>
                </button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
