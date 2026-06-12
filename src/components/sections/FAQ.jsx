import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className="rounded-2xl border transition-all duration-300 overflow-hidden"
      style={{
        borderColor: isOpen ? 'rgba(14,165,233,0.35)' : 'rgba(226,232,240,1)',
        background: isOpen
          ? 'linear-gradient(135deg, rgba(240,247,255,0.95) 0%, rgba(255,255,255,0.98) 100%)'
          : 'rgba(255,255,255,0.95)',
        boxShadow: isOpen ? '0 4px 20px rgba(14,165,233,0.1)' : '0 1px 6px rgba(26,60,110,0.04)',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={`font-semibold text-sm leading-snug transition-colors duration-200 ${
            isOpen ? 'text-medical-blue' : 'text-slate-700'
          }`}
        >
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="shrink-0"
        >
          <ChevronDown
            size={18}
            className={`transition-colors duration-200 ${isOpen ? 'text-medical-sky' : 'text-slate-400'}`}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-sky-100 pt-3">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      id="faq"
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)' }}
      aria-label="Frequently asked questions"
    >
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <span className="section-eyebrow justify-center">
              <span className="w-6 h-px bg-medical-sky inline-block" />
              Got Questions?
              <span className="w-6 h-px bg-medical-sky inline-block" />
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-medical-blue leading-tight mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
              Common questions about appointments, treatments, and what to expect at your consultation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
