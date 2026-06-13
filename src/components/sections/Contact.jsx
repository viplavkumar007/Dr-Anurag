import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Send, Loader2, Instagram, Youtube } from 'lucide-react'
import { brand, contact } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

const INITIAL = { name: '', phone: '', email: '', service: '', message: '' }
const ERRORS = { name: '', phone: '', email: '', service: '', message: '' }

function validate(fields) {
  const errs = { ...ERRORS }
  if (!fields.name.trim()) errs.name = 'Name is required.'
  if (!fields.phone.trim()) errs.phone = 'Phone number is required.'
  else if (!/^\d{10}$/.test(fields.phone.trim())) errs.phone = 'Enter a valid 10-digit phone number.'
  if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = 'Enter a valid email address.'
  if (!fields.message.trim()) errs.message = 'Please briefly describe your concern.'
  return errs
}

export default function Contact({ addToast }) {
  const [fields, setFields] = useState(INITIAL)
  const [errors, setErrors] = useState(ERRORS)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const waUrl = `https://wa.me/91${brand.phone}?text=${encodeURIComponent(brand.whatsappMessage)}`

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(fields)
    if (Object.values(errs).some(Boolean)) {
      setErrors(errs)
      return
    }
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1600))
    setSubmitting(false)
    setSuccess(true)
    setFields(INITIAL)
    addToast({
      type: 'success',
      title: 'Enquiry Sent!',
      message: "We'll contact you shortly to confirm your appointment.",
    })
    setTimeout(() => setSuccess(false), 5000)
  }

  return (
    <section
      id="contact"
      className="py-24 bg-white"
      aria-label="Contact and appointment"
    >
      <div className="section-container">
        <ScrollReveal className="text-center mb-14">
          <span className="section-eyebrow justify-center">
            <span className="w-6 h-px bg-medical-sky inline-block" />
            Get In Touch
            <span className="w-6 h-px bg-medical-sky inline-block" />
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-medical-blue leading-tight mt-1">
            Book an Appointment
          </h2>
          <p className="text-slate-500 mt-3 max-w-lg mx-auto text-sm">
            Reach out via phone, WhatsApp, or the enquiry form and we'll confirm your appointment promptly.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Info + Map */}
          <ScrollReveal>
            {/* Contact cards */}
            <div className="flex flex-col gap-4 mb-8">
              {[
                {
                  icon: Phone,
                  label: 'Call Us',
                  value: brand.phoneDisplay,
                  href: `tel:${brand.phone}`,
                  color: 'from-blue-400/20 to-sky-400/15',
                  iconColor: 'text-sky-600',
                },
                {
                  icon: MessageCircle,
                  label: 'WhatsApp',
                  value: 'Click to message',
                  href: waUrl,
                  color: 'from-emerald-400/20 to-green-400/15',
                  iconColor: 'text-emerald-600',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: brand.email,
                  href: `mailto:${brand.email}`,
                  color: 'from-amber-400/20 to-orange-400/15',
                  iconColor: 'text-amber-600',
                },
                {
                  icon: Instagram,
                  label: 'Instagram',
                  value: '@neurobeast_drarunav',
                  href: brand.instagram,
                  color: 'from-pink-400/20 to-orange-400/15',
                  iconColor: 'text-pink-600',
                },
                {
                  icon: Youtube,
                  label: 'YouTube',
                  value: '@drarunavgarg',
                  href: brand.youtube,
                  color: 'from-red-400/20 to-rose-400/15',
                  iconColor: 'text-red-600',
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'Get Directions',
                  href: brand.mapLink,
                  color: 'from-rose-400/20 to-red-400/15',
                  iconColor: 'text-rose-600',
                },
              ].map(({ icon: Icon, label, value, href, color, iconColor }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-sky-200 transition-all duration-300 group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,247,255,0.7) 100%)',
                    boxShadow: '0 2px 12px rgba(26,60,110,0.05)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,60,110,0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(26,60,110,0.05)'
                  }}
                >
                  <div
                    className={`flex items-center justify-center w-11 h-11 rounded-xl shrink-0 bg-gradient-to-br ${color}`}
                    style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)' }}
                  >
                    <Icon size={18} className={iconColor} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-wide uppercase text-slate-400">{label}</div>
                    <div className="text-medical-blue font-semibold text-sm mt-0.5 group-hover:text-sky-600 transition-colors">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Map embed */}
            <div
              className="rounded-3xl overflow-hidden border border-slate-100"
              style={{ boxShadow: '0 4px 24px rgba(26,60,110,0.08)' }}
            >
              <div
                className="h-64 bg-gradient-to-br from-sky-50 to-blue-100 flex flex-col items-center justify-center gap-3 cursor-pointer"
                onClick={() => window.open(brand.mapLink, '_blank')}
              >
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #1a3c6e 0%, #0ea5e9 100%)' }}
                >
                  <MapPin size={24} className="text-white" />
                </div>
                <div className="text-medical-blue font-semibold text-sm">View on Google Maps</div>
                <div className="text-slate-400 text-xs">Click to open directions</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal delay={0.15}>
            <div
              className="p-8 rounded-3xl border border-sky-100"
              style={{
                background: 'linear-gradient(135deg, rgba(240,247,255,0.8) 0%, rgba(255,255,255,0.95) 100%)',
                boxShadow: '0 4px 32px rgba(26,60,110,0.08)',
              }}
            >
              <h3 className="font-display font-bold text-xl text-medical-blue mb-6">
                Appointment Enquiry
              </h3>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={fields.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="form-input"
                    autoComplete="name"
                  />
                  {errors.name && <p className="text-rose-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Phone + Email grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Phone Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={fields.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile"
                      className="form-input"
                      autoComplete="tel"
                    />
                    {errors.phone && <p className="text-rose-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={fields.email}
                      onChange={handleChange}
                      placeholder="Optional"
                      className="form-input"
                      autoComplete="email"
                    />
                    {errors.email && <p className="text-rose-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Service select */}
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Select Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={fields.service}
                    onChange={handleChange}
                    className="form-input cursor-pointer"
                  >
                    <option value="">— Select a service —</option>
                    {contact.services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Message / Symptoms <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={fields.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Briefly describe your symptoms or the reason for your appointment..."
                    className="form-input resize-none"
                  />
                  {errors.message && <p className="text-rose-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: submitting ? 1 : 1.02 }}
                  whileTap={{ scale: submitting ? 1 : 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-white text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background: submitting
                      ? 'linear-gradient(135deg, #64748b 0%, #94a3b8 100%)'
                      : 'linear-gradient(135deg, #1a3c6e 0%, #0ea5e9 100%)',
                    boxShadow: submitting ? 'none' : '0 4px 20px rgba(14,165,233,0.35), inset 0 1px 0 rgba(255,255,255,0.2)',
                    transition: 'all 0.25s',
                  }}
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending Enquiry…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Book Appointment
                    </>
                  )}
                </motion.button>

                {success && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-emerald-600 text-sm font-medium"
                  >
                    ✓ Your enquiry was received. We'll be in touch shortly!
                  </motion.p>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
