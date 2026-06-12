import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { blogPosts } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Blog() {
  return (
    <section
      id="blog"
      className="py-24 bg-white"
      aria-label="Health blog"
    >
      <div className="section-container">
        <ScrollReveal className="text-center mb-14">
          <span className="section-eyebrow justify-center">
            <span className="w-6 h-px bg-medical-sky inline-block" />
            Neurology Awareness
            <span className="w-6 h-px bg-medical-sky inline-block" />
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-medical-blue leading-tight mt-1">
            Health Blog
          </h2>
          <p className="text-slate-500 mt-3 max-w-lg mx-auto text-sm">
            Insights, tips, and awareness articles from Dr Arunav to help you better understand neurological health.
          </p>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              className="group flex flex-col rounded-3xl overflow-hidden border border-slate-100 hover:border-sky-200 transition-all duration-300 cursor-pointer"
              style={{
                boxShadow: '0 2px 16px rgba(26,60,110,0.06)',
                transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 20px 48px rgba(26,60,110,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(26,60,110,0.06)'
              }}
            >
              {/* Card top color strip */}
              <div
                className={`h-2 bg-gradient-to-r ${post.color.replace('from-', 'from-').replace('to-', 'to-')}`}
                style={{
                  background:
                    post.id === 1
                      ? 'linear-gradient(90deg, #fbbf24, #f97316)'
                      : post.id === 2
                      ? 'linear-gradient(90deg, #38bdf8, #0ea5e9)'
                      : post.id === 3
                      ? 'linear-gradient(90deg, #f87171, #e11d48)'
                      : post.id === 4
                      ? 'linear-gradient(90deg, #a78bfa, #7c3aed)'
                      : post.id === 5
                      ? 'linear-gradient(90deg, #f472b6, #db2777)'
                      : 'linear-gradient(90deg, #34d399, #059669)',
                }}
              />

              {/* Body */}
              <div className={`flex flex-col gap-3 p-6 flex-1 bg-gradient-to-br ${post.color}`}>
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${post.badge}`}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 text-xs">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-display font-bold text-medical-blue text-base leading-snug group-hover:text-sky-700 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed flex-1">{post.excerpt}</p>

                <button className="flex items-center gap-1.5 text-sm font-semibold text-medical-sky hover:text-medical-blue transition-colors mt-auto group/btn self-start">
                  <span className="relative after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-current group-hover/btn:after:w-full after:transition-all after:duration-200">
                    Read More
                  </span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
