import { motion } from 'framer-motion'

export function GlowButton({ children, variant = 'primary', size = 'md', className = '', onClick, href, ...props }) {
  const baseClasses = 'relative inline-flex items-center justify-center font-display font-semibold tracking-wide rounded-xl overflow-hidden group select-none transition-[transform,background-color,border-color,box-shadow] duration-200'
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs sm:text-sm min-h-[36px]',
    md: 'px-7 py-3 text-sm sm:text-base min-h-[44px]',
    lg: 'px-9 py-3.5 text-base sm:text-lg min-h-[50px]',
  }

  const variantClasses = {
    primary: 'bg-accent text-primary font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_0_20px_rgba(0,229,255,0.25)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_0_30px_rgba(0,229,255,0.45)] hover:bg-[#1cf0ff]',
    secondary: 'bg-highlight text-white font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_0_20px_rgba(138,43,226,0.25)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_0_30px_rgba(138,43,226,0.45)]',
    outline: 'bg-accent/5 text-accent border border-accent/35 hover:border-accent hover:bg-accent/15 hover:shadow-[0_0_24px_rgba(0,229,255,0.2)]',
    ghost: 'bg-white/5 text-slate-200 border border-white/10 hover:border-white/25 hover:bg-white/10 hover:text-white',
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {/* Subtle shimmer sweep on hover */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      
      {/* Content with optical centering */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  )
}
