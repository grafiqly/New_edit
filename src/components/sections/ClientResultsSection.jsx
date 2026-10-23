import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'

const results = [
  {
    value: 28,
    prefix: '$',
    suffix: 'M+',
    label: 'Client Revenue Generated',
    caption: 'Directly attributed across client digital launches and sales funnels.',
  },
  {
    value: 340,
    prefix: '+',
    suffix: '%',
    label: 'Average Pipeline Growth',
    caption: 'Measured increase in qualified inbound leads within 6 months.',
  },
  {
    value: 12.5,
    prefix: '',
    suffix: 'M+',
    label: 'Campaign Reach',
    caption: 'High-intent audience impressions generated across digital channels.',
  },
  {
    value: 5.2,
    prefix: '',
    suffix: 'x',
    label: 'Average Return on Ad Spend',
    caption: 'Sustained cross-platform ROAS on performance marketing campaigns.',
  },
]

function AnimatedNumber({ value, prefix = '', suffix = '', isInView }) {
  const spanRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current || !spanRef.current) return
    hasAnimated.current = true

    const duration = 1600
    const startTime = performance.now()
    const isFloat = value % 1 !== 0

    function step(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * value

      if (spanRef.current) {
        spanRef.current.textContent = `${prefix}${isFloat ? current.toFixed(1) : Math.round(current)}${suffix}`
      }

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [isInView, value, prefix, suffix])

  return (
    <span ref={spanRef}>
      {prefix}0{suffix}
    </span>
  )
}

function ResultItem({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="p-6 sm:p-8 rounded-3xl border border-white/5 bg-secondary/40 backdrop-blur-sm relative overflow-hidden group hover:border-accent/25 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top subtle accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight tabular-nums mb-3">
          <AnimatedNumber
            value={item.value}
            prefix={item.prefix}
            suffix={item.suffix}
            isInView={isInView}
          />
        </div>
        <h3 className="font-display text-base sm:text-lg font-bold text-slate-100 mb-2">
          {item.label}
        </h3>
      </div>

      <p className="text-xs text-subtext leading-relaxed">
        {item.caption}
      </p>
    </motion.div>
  )
}

export function ClientResultsSection() {
  return (
    <section id="results" className="section-padding relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #D4FF00, transparent 65%)' }}
      />

      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="MEASURABLE IMPACT"
          title={
            <span>
              Real Numbers. <span className="gradient-text">Verifiable Growth.</span>
            </span>
          }
          description="Proven performance metrics achieved across high-growth startups and category leaders."
        />

        {/* 4 Clean, Bold Result Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-12">
          {results.map((item, index) => (
            <ResultItem key={item.label} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
