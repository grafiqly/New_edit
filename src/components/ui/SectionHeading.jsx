import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, description, align = 'center', gradient = true }) {
  const alignClasses = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
  }

  const renderTitle = () => {
    if (!gradient) return title
    return title
  }

  return (
    <div className={`max-w-3xl mb-14 md:mb-18 flex flex-col ${alignClasses[align]}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-accent/25 bg-accent/5 backdrop-blur-md mb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-accent text-[11px] font-semibold tracking-[0.2em] uppercase font-display">
            {eyebrow}
          </span>
        </motion.div>
      )}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] [text-wrap:balance]"
        >
          {renderTitle()}
        </motion.h2>
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-sm sm:text-base md:text-lg mt-4 leading-relaxed [text-wrap:pretty] max-w-2xl"
        >
          {description}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-px mt-6 w-24 bg-gradient-to-r from-transparent via-accent/50 to-transparent origin-center"
      />
    </div>
  )
}
