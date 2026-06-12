import { brand } from '../data/siteContent'

function WhatsAppLogo() {
  return (
    <svg
      viewBox="0 0 32 32"
      width="30"
      height="30"
      aria-hidden="true"
      focusable="false"
      className="relative z-10"
    >
      <path
        fill="currentColor"
        d="M16.04 3.2C9.02 3.2 3.31 8.86 3.31 15.83c0 2.22.59 4.4 1.71 6.31L3.2 28.8l6.86-1.79a12.9 12.9 0 0 0 5.98 1.51c7.02 0 12.73-5.66 12.73-12.63S23.06 3.2 16.04 3.2Zm0 23.18c-1.86 0-3.68-.5-5.27-1.45l-.38-.23-4.06 1.06 1.08-3.94-.25-.41a10.16 10.16 0 0 1-1.57-5.58c0-5.79 4.69-10.49 10.45-10.49 5.77 0 10.45 4.7 10.45 10.49 0 5.84-4.69 10.55-10.45 10.55Zm5.73-7.85c-.31-.16-1.86-.91-2.15-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1 1.22-.19.21-.37.24-.69.08-.31-.16-1.32-.48-2.52-1.53-.93-.82-1.56-1.84-1.74-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.19.21-.31.31-.52.11-.21.05-.4-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.31-1.1 1.07-1.1 2.6s1.13 3.02 1.29 3.23c.16.21 2.22 3.36 5.39 4.71.75.32 1.34.51 1.8.65.76.24 1.45.2 1.99.12.61-.09 1.86-.76 2.12-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.61-.37Z"
      />
    </svg>
  )
}

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
      <WhatsAppLogo />
    </a>
  )
}
