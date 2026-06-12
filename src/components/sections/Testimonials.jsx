import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #e8f4ff 100%)' }}
      aria-label="Patient testimonials"
    >
      <div className="section-container">
        <ScrollReveal className="text-center mb-14">
          <span className="section-eyebrow justify-center">
            <span className="w-6 h-px bg-medical-sky inline-block" />
            Patient Stories
            <span className="w-6 h-px bg-medical-sky inline-block" />
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-medical-blue leading-tight mt-1">
            What Patients Say
          </h2>
          <p className="text-slate-500 mt-3 max-w-lg mx-auto text-sm">
            Real stories from patients who have experienced compassionate, expert neurological care.
          </p>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              className="glass-card p-6 flex flex-col gap-4"
            >
              {/* Quote icon */}
              <div
                className="flex items-center justify-center w-10 h-10 rounded-xl"
                style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.12) 0%, rgba(6,182,212,0.18) 100%)' }}
              >
                <Quote size={18} className="text-medical-sky" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1 italic">"{t.text}"</p>

              {/* Badge */}
              <span
                className="inline-flex self-start text-[10px] font-semibold px-2.5 py-1 rounded-full"
                style={{
                  background: 'rgba(14,165,233,0.1)',
                  color: '#0369a1',
                }}
              >
                {t.condition}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-sky-100">
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-full text-white text-xs font-bold"
                  style={{ background: 'linear-gradient(135deg, #1a3c6e 0%, #0ea5e9 100%)' }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-medical-blue font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
