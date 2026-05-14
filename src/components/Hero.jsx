import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { profile, marqueeWords } from '../data/content'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const heroRef = useRef(null)
  const [marqueeHovered, setMarqueeHovered] = useState(false)

  const rawX = useMotionValue(-500)
  const rawY = useMotionValue(-500)
  const glowX = useSpring(rawX, { stiffness: 80, damping: 20 })
  const glowY = useSpring(rawY, { stiffness: 80, damping: 20 })

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect()
      rawX.set(e.clientX - rect.left)
      rawY.set(e.clientY - rect.top)
    }
    const handleMouseLeave = () => {
      rawX.set(-500)
      rawY.set(-500)
    }
    hero.addEventListener('mousemove', handleMouseMove)
    hero.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      hero.removeEventListener('mousemove', handleMouseMove)
      hero.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section ref={heroRef} id="top" className="relative pt-40 md:pt-52 pb-16 md:pb-24 overflow-hidden">
      <motion.div
        className="pointer-events-none absolute z-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(184,100,124,0.18) 0%, transparent 70%)',
          left: glowX,
          top: glowY,
          x: '-50%',
          y: '-50%',
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500 mb-10"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent mr-3 align-middle animate-pulse" />
          Portfolio · {new Date().getFullYear()}
        </motion.p>

        <h1 className="font-serif text-[14vw] md:text-[10vw] lg:text-[9rem] leading-[0.9] tracking-tightest text-ink-900">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="block"
          >
            Hania
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="block italic text-ink-700"
          >
            Guiagoussou<span className="text-accent">.</span>
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.5 }}
          className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
        >
          <p className="md:col-span-6 text-lg md:text-xl text-ink-700 leading-relaxed max-w-xl">
            {profile.role} working at the intersection of{' '}
            <span className="serif-italic text-accent">product</span>,{' '}
            <span className="serif-italic text-accent">design</span>, and{' '}
            <span className="serif-italic text-accent">data</span>. As an advocate for
            technology and education, I specialize in creating intuitive, tailored user
            experiences that put people first.
          </p>

          <div className="hero-stats md:col-span-4 md:col-start-9 flex-col gap-2 text-sm">
            <div className="flex justify-between border-t border-ink-900/15 pt-3">
              <span className="text-ink-500">Based in</span>
              <span className="text-ink-900">{profile.location}</span>
            </div>
            <div className="flex justify-between items-start border-t border-ink-900/15 pt-3">
              <span className="text-ink-500">Education</span>
              <span className="text-ink-900 text-right">
                Columbia University · Sciences Po
              </span>
            </div>
            <div className="flex justify-between border-t border-ink-900/15 pt-3">
              <span className="text-ink-500">Degree</span>
              <span className="text-ink-900">Computer Science & Economics</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        onMouseEnter={() => setMarqueeHovered(true)}
        onMouseLeave={() => setMarqueeHovered(false)}
        className="mt-24 md:mt-32 border-y border-ink-900/10 py-6 overflow-hidden cursor-default"
      >
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{
            animation: `marquee ${marqueeHovered ? '90s' : '30s'} linear infinite`,
            transition: 'animation-duration 0.8s ease',
          }}
        >
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span
              key={i}
              className="font-serif italic text-4xl md:text-6xl text-ink-900/80 flex items-center gap-12"
            >
              {w}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
