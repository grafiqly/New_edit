import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { SvgOrbitFrame } from '../ui/SvgOrbitFrame'

const stats = [
  { value: 150, suffix: '+', label: 'Brands Scaled' },
  { value: 4.8, suffix: 'x', label: 'Avg ROI', decimals: 1 },
  { value: 500, suffix: '+', label: 'Campaigns Launched' },
  { value: 98, suffix: '%', label: 'Client Retention' },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

function AnimatedCounter({ value, suffix, decimals = 0, isInView }) {
  const spanRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current || !spanRef.current) return
    hasAnimated.current = true

    const duration = 2000
    const startTime = performance.now()

    function step(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * value
      const display = decimals > 0 ? current.toFixed(decimals) : Math.round(current)
      if (spanRef.current) spanRef.current.textContent = `${display}${suffix}`
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [isInView, value, suffix, decimals])

  const initial = decimals > 0 ? (0).toFixed(decimals) : '0'

  return (
    <span
      ref={spanRef}
      className="font-display text-2xl sm:text-3xl xl:text-4xl font-bold leading-none gradient-text tabular-nums tracking-tight"
    >
      {initial}{suffix}
    </span>
  )
}

export function AboutSection() {
  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accents — radial gradients instead of blur() for zero compositor cost */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #D4FF00, transparent 55%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #6366F1, transparent 55%)' }}
      />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text content */}
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <SectionHeading
                eyebrow="WHO WE ARE"
                title={
                  <>
                    Crafting <span className="gradient-text">Digital Dominance</span>
                  </>
                }
              />
            </motion.div>

            <motion.p
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-lg [text-wrap:pretty]"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.1}
            >
              We are a full-spectrum digital agency obsessed with pushing
              creative boundaries. From strategy to execution, we architect
              brand experiences that resonate, convert, and scale.
            </motion.p>

            <motion.p
              className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg [text-wrap:pretty]"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.2}
            >
              Every pixel, every campaign, every line of code — we engineer it
              with purpose. Our team of strategists, designers, and technologists
              work at the intersection of art and data to deliver measurable impact.
            </motion.p>

            {/* Key statement */}
            <motion.h3
              className="font-display text-2xl md:text-3xl font-bold gradient-text leading-tight pt-2 [text-wrap:balance]"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.3}
            >
              Transforming Ideas Into
              <br />
              Digital Dominance
            </motion.h3>

            {/* Stats grid */}
            <motion.div
              ref={statsRef}
              className="grid grid-cols-4 gap-2 pt-4 sm:gap-3 lg:gap-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.4}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card group min-w-0 rounded-2xl px-2.5 py-4 text-center sm:p-5"
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                    isInView={isStatsInView}
                  />
                  <p className="mt-2 text-[10px] uppercase leading-tight tracking-[0.1em] text-slate-400 font-medium sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — 2D SVG orbit decoration */}
          <motion.div
            className="relative flex h-[400px] items-center justify-center lg:h-[550px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <SvgOrbitFrame />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
