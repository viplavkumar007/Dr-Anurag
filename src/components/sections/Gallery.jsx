import { motion } from 'framer-motion'
import { Camera, Brain, Activity, ScanLine } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import migraineConsultation from '../../assets/gallery-migraine-consultation.png'
import neuroDiagnostics from '../../assets/gallery-neuro-diagnostics.png'
import strokeReview from '../../assets/gallery-stroke-review.png'
import movementCare from '../../assets/gallery-movement-care.png'

const galleryItems = [
  {
    title: 'Headache & Migraine Care',
    desc: 'Focused consultation for recurring headaches and migraine patterns.',
    image: migraineConsultation,
    icon: Brain,
  },
  {
    title: 'EEG, EMG & NCV Testing',
    desc: 'Modern diagnostic support for brain, muscle, and nerve function.',
    image: neuroDiagnostics,
    icon: ScanLine,
  },
  {
    title: 'Stroke Evaluation',
    desc: 'Timely neurological review and prevention-focused planning.',
    image: strokeReview,
    icon: Activity,
  },
  {
    title: 'Movement Disorder Care',
    desc: 'Supportive management for tremors, Parkinsonian symptoms, and balance.',
    image: movementCare,
    icon: Camera,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 bg-white"
      aria-label="Neurology care gallery"
    >
      <div className="section-container">
        <ScrollReveal className="text-center mb-14">
          <span className="section-eyebrow justify-center">
            <span className="w-6 h-px bg-medical-sky inline-block" />
            Care Gallery
            <span className="w-6 h-px bg-medical-sky inline-block" />
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-medical-blue leading-tight mt-1">
            Services in Focus
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm lg:text-base">
            A visual look at consultation, diagnostic testing, stroke review, and movement disorder care.
          </p>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5"
        >
          {galleryItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                variants={cardVariants}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-medical-light">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-900/70 to-transparent" />
                  <div className="absolute left-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 text-medical-sky shadow-card backdrop-blur">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-medical-blue text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
