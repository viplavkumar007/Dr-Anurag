import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import WhyChoose from './components/sections/WhyChoose'
import Testimonials from './components/sections/Testimonials'
import Blog from './components/sections/Blog'
import FAQ from './components/sections/FAQ'
import CTAStrip from './components/sections/CTAStrip'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Toast from './components/ui/Toast'

let toastId = 0

export default function App() {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((toast) => {
    const id = ++toastId
    setToasts((prev) => [...prev, { ...toast, id }])
  }, [])

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <>
      <Toast toasts={toasts} removeToast={removeToast} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Testimonials />
        <Blog />
        <FAQ />
        <CTAStrip />
        <Contact addToast={addToast} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
