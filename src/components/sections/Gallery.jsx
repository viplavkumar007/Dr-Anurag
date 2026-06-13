import { motion } from 'framer-motion'
import { Camera, Users, Stethoscope, Presentation, Globe2, HeartHandshake } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import clinicReview from '../../assets/gallery-01-clinic-review.jpeg'
import conferenceGroup from '../../assets/gallery-02-conference-group.jpeg'
import ihcSpeaker from '../../assets/gallery-03-ihc-speaker.jpeg'
import neurotechDemo from '../../assets/gallery-04-neurotech-demo.jpeg'
import saoPaulo from '../../assets/gallery-05-sao-paulo.jpeg'
import medicalMural from '../../assets/gallery-06-medical-mural.jpeg'
import hospitalCare from '../../assets/gallery-07-hospital-care.jpeg'
import patientCare from '../../assets/gallery-08-patient-care.jpeg'
import academicSession from '../../assets/gallery-09-academic-session.jpeg'
import investigatorMeeting from '../../assets/gallery-10-investigator-meeting.jpeg'

const galleryItems = [
  {
    title: 'Clinical Review',
    desc: 'Focused case review and treatment planning in clinic.',
    image: clinicReview,
    icon: Stethoscope,
  },
  {
    title: 'International Conference',
    desc: 'Professional exchange with global neurology peers.',
    image: conferenceGroup,
    icon: Users,
  },
  {
    title: 'IHC 2025',
    desc: 'Academic participation at the International Headache Congress.',
    image: ihcSpeaker,
    icon: Presentation,
  },
  {
    title: 'Neurotechnology Demo',
    desc: 'Exploring patient-focused innovation in neurological care.',
    image: neurotechDemo,
    icon: Camera,
  },
  {
    title: 'Sao Paulo Visit',
    desc: 'Representing neurology practice at an international venue.',
    image: saoPaulo,
    icon: Globe2,
  },
  {
    title: 'Medical Travel',
    desc: 'Learning and collaboration beyond the clinic.',
    image: medicalMural,
    icon: Globe2,
  },
  {
    title: 'Hospital Care',
    desc: 'Hands-on neurological assessment in the hospital setting.',
    image: hospitalCare,
    icon: HeartHandshake,
  },
  {
    title: 'Patient Interaction',
    desc: 'Compassionate bedside care and clear communication.',
    image: patientCare,
    icon: HeartHandshake,
  },
  {
    title: 'Academic Session',
    desc: 'Continuing medical education and specialist collaboration.',
    image: academicSession,
    icon: Presentation,
  },
  {
    title: 'Investigator Meeting',
    desc: 'Clinical research discussion with international colleagues.',
    image: investigatorMeeting,
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
            Clinical & Academic Moments
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm lg:text-base">
            A visual look at patient care, conferences, academic sessions, and professional milestones.
          </p>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {galleryItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                variants={cardVariants}
                className="group self-start overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="bg-slate-50 p-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-auto w-full rounded-2xl object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-medical-sky">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>
                    <h3 className="font-semibold text-medical-blue text-base leading-snug">
                      {item.title}
                    </h3>
                  </div>
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
