// ─────────────────────────────────────────────
//  src/data/siteContent.js  — Single source of truth
// ─────────────────────────────────────────────

export const brand = {
  name: 'Dr Arunav',
  tagline: 'Neurologist',
  domain: 'drarunavgarg.com',
  phone: '7678585127',
  phoneDisplay: '+91 76785 85127',
  email: 'drarunavgarg@gmail.com',
  whatsappMessage: 'Hello Dr Arunav, I want to book a neurology consultation.',
  mapLink: 'https://share.google/aCoRxyrAdJOeHmY3y',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zDr+Arunav+Neurology!5e0!3m2!1sen!2sin!4v1234567890',
}

export const hero = {
  eyebrow: 'Trusted Neurology Care',
  headline: 'Expert Neurology Care',
  headlineAccent: 'by Dr Arunav',
  subheadline:
    '10+ Years of Experience in Treating Brain, Nerve & Neurological Disorders. Evidence-based diagnosis and patient-centred treatment you can trust.',
  stats: [
    { value: '10+', label: 'Years Experience' },
    { value: '5000+', label: 'Patients Treated' },
    { value: '10', label: 'Specialised Services' },
    { value: '98%', label: 'Patient Satisfaction' },
  ],
}

export const about = {
  eyebrow: 'About the Doctor',
  heading: 'About Dr Arunav',
  paragraphs: [
    'Dr Arunav is an experienced neurologist with over 10 years of medical expertise, providing accurate diagnosis and comprehensive treatment for brain, nerve, spine, and neurological disorders.',
    'He is known for patient-friendly consultations, clear explanations, and evidence-based treatment planning. Dr Arunav combines advanced diagnostic techniques with compassionate care to deliver outcomes that truly matter.',
  ],
  highlights: [
    { icon: 'Award', label: '10+ Years Experience', desc: 'Clinical excellence across neurology' },
    { icon: 'Brain', label: 'Neurology Specialist', desc: 'Brain, nerve & spine disorders' },
    { icon: 'Heart', label: 'Patient-Centered Care', desc: 'Compassionate consultations' },
    { icon: 'Microscope', label: 'Advanced Diagnostics', desc: 'EEG, EMG, NCV studies' },
  ],
}

export const services = [
  {
    id: 1,
    icon: 'Zap',
    title: 'Headache & Migraine Treatment',
    desc: 'Diagnosis and treatment for chronic headaches, migraine attacks, and recurring pain patterns.',
    color: 'from-amber-400/20 to-orange-400/10',
    iconColor: 'text-amber-500',
  },
  {
    id: 2,
    icon: 'Activity',
    title: 'Epilepsy & Seizure Treatment',
    desc: 'Management of seizures, epilepsy diagnosis, medication planning, and long-term follow-up care.',
    color: 'from-purple-400/20 to-violet-400/10',
    iconColor: 'text-purple-500',
  },
  {
    id: 3,
    icon: 'HeartPulse',
    title: 'Stroke Evaluation & Prevention',
    desc: 'Stroke risk assessment, prevention guidance, and comprehensive neurological evaluation.',
    color: 'from-red-400/20 to-rose-400/10',
    iconColor: 'text-rose-500',
  },
  {
    id: 4,
    icon: 'RotateCcw',
    title: 'Vertigo & Balance Disorders',
    desc: 'Treatment for dizziness, vertigo, imbalance, and related neurological causes.',
    color: 'from-cyan-400/20 to-sky-400/10',
    iconColor: 'text-cyan-500',
  },
  {
    id: 5,
    icon: 'Hand',
    title: "Parkinson's & Tremor Management",
    desc: "Care for Parkinson's disease, tremors, stiffness, and long-term movement disorder management.",
    color: 'from-teal-400/20 to-emerald-400/10',
    iconColor: 'text-teal-500',
  },
  {
    id: 6,
    icon: 'Waves',
    title: 'Neuropathy & Nerve Disorders',
    desc: 'Treatment for nerve pain, numbness, tingling, weakness, and peripheral nerve disorders.',
    color: 'from-blue-400/20 to-indigo-400/10',
    iconColor: 'text-blue-500',
  },
  {
    id: 7,
    icon: 'Brain',
    title: 'Memory Loss & Dementia',
    desc: 'Evaluation of forgetfulness, dementia, Alzheimer-related symptoms, and cognitive decline.',
    color: 'from-pink-400/20 to-fuchsia-400/10',
    iconColor: 'text-pink-500',
  },
  {
    id: 8,
    icon: 'Shield',
    title: 'Multiple Sclerosis & Neuroimmunology',
    desc: 'Consultation for MS and immune-related neurological conditions with personalised care.',
    color: 'from-sky-400/20 to-blue-400/10',
    iconColor: 'text-sky-500',
  },
  {
    id: 9,
    icon: 'Dumbbell',
    title: 'Neuromuscular Disorders',
    desc: 'Treatment for Myasthenia Gravis, muscle weakness, and nerve-muscle conditions.',
    color: 'from-lime-400/20 to-green-400/10',
    iconColor: 'text-lime-600',
  },
  {
    id: 10,
    icon: 'Stethoscope',
    title: 'EEG, EMG & Nerve Conduction — NCV',
    desc: 'Diagnostic testing for brain activity, muscle function, and nerve conduction studies.',
    color: 'from-indigo-400/20 to-violet-400/10',
    iconColor: 'text-indigo-500',
  },
]

export const whyChoose = [
  { icon: 'BadgeCheck', title: '10+ Years Clinical Experience', desc: 'A decade of neurological expertise across complex cases.' },
  { icon: 'Stethoscope', title: 'Expert Neurology Consultation', desc: 'In-depth evaluation tailored to each patient\'s condition.' },
  { icon: 'ClipboardList', title: 'Accurate Diagnosis & Treatment', desc: 'Evidence-based protocols for precise care plans.' },
  { icon: 'MessageCircle', title: 'Patient-Friendly Explanations', desc: 'Complex medical information made clear and understandable.' },
  { icon: 'ScanLine', title: 'Advanced Neurological Evaluation', desc: 'Modern diagnostic tools including EEG, EMG, and NCV.' },
  { icon: 'Brain', title: 'Brain, Nerve & Muscle Disorders', desc: 'Comprehensive coverage across the full neurological spectrum.' },
]

export const conditions = [
  'Migraine', 'Epilepsy', 'Stroke', 'Vertigo',
  "Parkinson's Disease", 'Tremors', 'Neuropathy', 'Dementia',
  'Memory Loss', 'Multiple Sclerosis', 'Myasthenia Gravis',
  'Muscle Disorders', 'Nerve Pain', 'Balance Problems',
]

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Delhi',
    rating: 5,
    text: 'Dr Arunav diagnosed my migraine condition accurately after years of suffering. His treatment plan has dramatically reduced my episodes. Highly recommend!',
    condition: 'Chronic Migraine',
    initials: 'PS',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Noida',
    rating: 5,
    text: 'My father had a stroke and Dr Arunav\'s quick evaluation and treatment plan made all the difference. Very professional and compassionate doctor.',
    condition: 'Stroke Recovery',
    initials: 'RK',
  },
  {
    id: 3,
    name: 'Anita Verma',
    location: 'Gurgaon',
    rating: 5,
    text: 'Suffering from vertigo for months, Dr Arunav\'s diagnosis was spot-on. Within weeks of treatment I was back to normal life. Exceptional doctor!',
    condition: 'Vertigo Treatment',
    initials: 'AV',
  },
  {
    id: 4,
    name: 'Suresh Patel',
    location: 'Faridabad',
    rating: 5,
    text: 'My son has epilepsy and Dr Arunav has been managing his care brilliantly. His patience in explaining the treatment plan gave our family great confidence.',
    condition: 'Epilepsy Management',
    initials: 'SP',
  },
]

export const faqs = [
  {
    q: 'What conditions does Dr Arunav treat?',
    a: 'Dr Arunav treats a wide range of neurological conditions including migraine, epilepsy, stroke, vertigo, Parkinson\'s disease, dementia, neuropathy, multiple sclerosis, and neuromuscular disorders.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'You can book an appointment by calling +91 76785 85127, sending a WhatsApp message, or filling in the contact form on this page. We typically respond within a few hours.',
  },
  {
    q: 'What diagnostic tests are available?',
    a: 'Diagnostic support includes EEG (electroencephalogram), EMG (electromyography), and NCV (nerve conduction velocity) studies for comprehensive neurological evaluation.',
  },
  {
    q: 'Is an online/teleconsultation available?',
    a: 'Yes, teleconsultation is available for follow-up visits and patients who cannot visit in person. Please contact us via WhatsApp or phone to arrange a teleconsultation.',
  },
  {
    q: 'How long does a first consultation typically take?',
    a: 'First consultations are thorough — usually 30–45 minutes — to allow for complete history taking, examination, and explanation of findings and next steps.',
  },
  {
    q: 'Should I bring previous medical reports to the consultation?',
    a: 'Yes, please bring any previous reports, MRI/CT scans, blood test results, and a list of current medications. This helps Dr Arunav provide a thorough and accurate assessment.',
  },
]

export const blogPosts = [
  {
    id: 1,
    title: 'Common Causes of Frequent Headaches',
    excerpt: 'Not all headaches are the same. Understand the triggers, types, and when to seek specialist advice from a neurologist.',
    category: 'Headache',
    readTime: '4 min read',
    color: 'from-amber-50 to-orange-50',
    badge: 'text-amber-600 bg-amber-100',
  },
  {
    id: 2,
    title: 'When Should You Visit a Neurologist?',
    excerpt: 'Learn the warning signs that indicate you need specialist neurological evaluation — and why early diagnosis matters.',
    category: 'General',
    readTime: '3 min read',
    color: 'from-blue-50 to-sky-50',
    badge: 'text-blue-600 bg-blue-100',
  },
  {
    id: 3,
    title: 'Early Signs of Stroke You Should Never Ignore',
    excerpt: 'The FAST method and other critical warning signs that could save a life. Know what to look for and act quickly.',
    category: 'Stroke',
    readTime: '5 min read',
    color: 'from-red-50 to-rose-50',
    badge: 'text-rose-600 bg-rose-100',
  },
  {
    id: 4,
    title: 'Understanding Epilepsy and Seizures',
    excerpt: 'A comprehensive guide to epilepsy — types of seizures, treatment options, and living well with the condition.',
    category: 'Epilepsy',
    readTime: '6 min read',
    color: 'from-purple-50 to-violet-50',
    badge: 'text-purple-600 bg-purple-100',
  },
  {
    id: 5,
    title: 'Memory Loss: Normal Aging or Dementia?',
    excerpt: 'Discover the key differences between normal age-related forgetfulness and early signs of dementia or Alzheimer\'s.',
    category: 'Memory',
    readTime: '4 min read',
    color: 'from-pink-50 to-fuchsia-50',
    badge: 'text-pink-600 bg-pink-100',
  },
  {
    id: 6,
    title: 'How to Manage Migraine Triggers',
    excerpt: 'Practical strategies for identifying and managing your personal migraine triggers for a better quality of life.',
    category: 'Migraine',
    readTime: '5 min read',
    color: 'from-teal-50 to-emerald-50',
    badge: 'text-teal-600 bg-teal-100',
  },
]

export const contact = {
  phone: brand.phone,
  phoneDisplay: brand.phoneDisplay,
  email: brand.email,
  mapLink: brand.mapLink,
  services: services.map((s) => s.title),
}
