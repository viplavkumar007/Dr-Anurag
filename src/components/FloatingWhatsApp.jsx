import { MessageCircle } from 'lucide-react'
import { brand } from '../data/siteContent'

export default function FloatingWhatsApp() {
  const waUrl = `https://wa.me/91${brand.phone}?text=${encodeURIComponent(brand.whatsappMessage)}`

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="float-wa"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  )
}
