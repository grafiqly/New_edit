import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Calendar, Send, Check, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@grafiqly.com',
    href: 'mailto:hello@grafiqly.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: MapPin,
    title: 'Visit Studio',
    value: 'Bandra Kurla Complex (BKC), Mumbai, India',
    href: 'https://maps.google.com',
  },
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background ambient accents */}
      <div
        className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #D4FF00, transparent 60%)' }}
      />
      <div
        className="absolute bottom-10 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #6366F1, transparent 60%)' }}
      />

      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title={
            <span>
              Let&apos;s Start a <span className="gradient-text">Conversation</span>
            </span>
          }
          description="Have a question, proposal, or want to discuss a new venture? Reach out and we will respond promptly."
        />

        <div className="grid gap-10 lg:grid-cols-12 items-start max-w-5xl mx-auto">
          {/* Left Form: Clean and Direct (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-strong rounded-3xl p-7 sm:p-9 border border-white/10"
          >
            <h3 className="font-display text-xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs text-subtext mb-6">
              Fill out the details below and a strategist will get in touch shortly.
            </p>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary shadow-[0_0_24px_rgba(212,255,0,0.35)]">
                    <Check size={28} className="stroke-[3]" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-white">Message Sent Successfully</h4>
                  <p className="text-xs text-subtext max-w-sm mx-auto">
                    Thank you for reaching out. We have received your note and will reply within 2 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormState({ name: '', email: '', subject: '', message: '' })
                    }}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name *"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-[border-color,background-color] focus:border-accent focus:bg-white/[0.06]"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email *"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-[border-color,background-color] focus:border-accent focus:bg-white/[0.06]"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject / Project Interest"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-[border-color,background-color] focus:border-accent focus:bg-white/[0.06]"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      required
                      rows="4"
                      placeholder="How can we help you? *"
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-[border-color,background-color] focus:border-accent focus:bg-white/[0.06] resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent text-primary py-3.5 font-display font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:bg-[#e0ff33] hover:shadow-[0_0_24px_rgba(212,255,0,0.35)] cursor-pointer"
                  >
                    <Send size={15} />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Cards: Contact Info & Strategy Call CTA (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Quick response badge */}
            <div className="flex items-center gap-2.5 rounded-2xl border border-green-500/20 bg-green-500/5 px-4 py-3 text-xs text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="font-semibold uppercase tracking-wider">Fast Response</span>
              <span className="ml-auto text-slate-400">Typically &lt; 2 hrs</span>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {contactMethods.map((method) => {
                const Icon = method.icon
                return (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-secondary/50 p-4 transition-all duration-200 hover:border-accent/30 hover:bg-secondary/80 group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:scale-105 transition-transform">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-mono uppercase text-subtext">{method.title}</p>
                      <p className="text-xs sm:text-sm font-medium text-slate-200 truncate group-hover:text-white transition-colors">
                        {method.value}
                      </p>
                    </div>
                    <ArrowUpRight size={14} className="text-slate-500 group-hover:text-accent transition-colors" />
                  </a>
                )
              })}
            </div>

            {/* Book a Strategy Call Action Box */}
            <div className="glass-strong rounded-2xl p-5 border border-highlight/25 relative overflow-hidden">
              <div className="flex items-center gap-2 text-highlight mb-2">
                <Calendar size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">Prefer to Talk?</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Schedule a 15-minute scoping call directly on our calendar to discuss deliverables and timeline.
              </p>
              <a
                href="#schedule"
                className="flex items-center justify-center gap-2 rounded-xl border border-highlight/40 bg-highlight/15 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-highlight/25 hover:border-highlight/60"
              >
                <span>Book 15-Min Strategy Call</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
