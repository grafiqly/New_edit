import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const headlineWords = ['Future-Proof', 'Your', 'Brand']

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.15,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

function LightStreak({ className, delay, duration }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: '200%', opacity: [0, 0.6, 0.6, 0] }}
      transition={{
        delay,
        duration,
        repeat: Infinity,
        repeatDelay: duration * 1.5,
        ease: 'linear',
      }}
    >
      <div className="h-[1px] w-[300px] md:w-[500px] bg-gradient-to-r from-transparent via-accent/40 to-transparent rotate-[-25deg]" />
    </motion.div>
  )
}

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 1 }}
    >
      <span className="text-xs text-subtext tracking-widest uppercase font-light">
        Scroll to explore
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="w-5 h-5 text-accent/60" />
      </motion.div>
    </motion.div>
  )
}

export function HeroSection() {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.05 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const opacityFade = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ═══ Video Background ═══ */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        >
          <source src="/hero_g.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay instead of CSS filter — zero per-frame GPU cost */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20 z-[1]" />

      {/* Radial glow accents — use large gradients instead of blur() for zero GPU cost */}
      <div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none z-[1] opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, var(--tw-gradient-from, #D4FF00), transparent 60%)' }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none z-[1] opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, var(--tw-gradient-from, #6366F1), transparent 60%)' }}
      />

      {/* Light streaks */}
      <LightStreak className="top-[20%] left-0" delay={1} duration={4} />
      <LightStreak className="top-[50%] left-0" delay={3} duration={5} />
      <LightStreak className="top-[75%] left-0" delay={5.5} duration={3.5} />

      {/* Main content — centered */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center"
        style={{ opacity: opacityFade, y: contentY, willChange: 'transform, opacity' }}
      >
        {/* Eyebrow */}
        <motion.div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/5 backdrop-blur-md mb-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_20px_rgba(0,229,255,0.1)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-accent text-xs tracking-[0.25em] uppercase font-semibold font-display">
            GRAFIQLY DIGITAL MEDIA 2.0
          </span>
        </motion.div>

        {/* Headline with staggered word animation */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
          {headlineWords.map((word, i) => (
            <motion.span
              key={word}
              className="inline-block mr-4 lg:mr-6"
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              {word === 'Future-Proof' ? (
                <span className="text-accent">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 [text-wrap:pretty]"
          initial="hidden"
          animate="visible"
          custom={1.3}
        >
          We blend creativity, strategy and technology to build
          unforgettable digital experiences that drive real business growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 pt-2"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.6}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-primary font-bold text-sm tracking-wider uppercase rounded-xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_0_24px_rgba(0,229,255,0.25)] transition-[transform,box-shadow,background-color] duration-200 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_0_36px_rgba(0,229,255,0.45)] hover:bg-[#1cf0ff] active:scale-[0.97] min-h-[46px]"
          >
            <span className="relative z-10">Start Your Project</span>
          </a>
          <a
            href="#portfolio"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/15 bg-white/[0.04] text-white font-semibold text-sm tracking-wider uppercase rounded-xl transition-[transform,border-color,background-color,box-shadow] duration-200 hover:border-accent/50 hover:bg-white/[0.08] hover:shadow-[0_0_24px_rgba(0,229,255,0.15)] active:scale-[0.97] min-h-[46px]"
          >
            <span>Explore Our Work</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 text-accent">
              →
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  )
}
