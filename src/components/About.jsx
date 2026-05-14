import { motion } from 'framer-motion'
import { about } from '../data/content'

const ease = [0.22, 1, 0.36, 1]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease }}
          className="flex items-baseline gap-4 mb-14 md:mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
            01 / About
          </span>
          <span className="h-px flex-1 bg-ink-900/15" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="md:col-span-7 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight"
          >
            {about.intro}
          </motion.h2>

          <div className="md:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease, delay: 0.2 }}
              className="relative w-44 md:w-52"
            >
              <div className="relative aspect-square rounded-full overflow-hidden bg-cream-200">
                <img
                  src={about.headshot}
                  alt="Hania Guiagoussou"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement.setAttribute('data-missing', 'true')
                  }}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 h-5 w-5 rounded-full bg-accent" />
            </motion.div>

            {about.body.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease, delay: 0.3 + i * 0.1 }}
                className="text-base md:text-lg text-ink-700 leading-relaxed"
              >
                {p}
              </motion.p>
            ))}

            {about.highlights.length > 0 && (
              <motion.dl
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease, delay: 0.5 }}
                className="pt-6 border-t border-ink-900/15 space-y-3"
              >
                {about.highlights.map((h) => (
                  <div key={h.label} className="flex justify-between text-sm">
                    <dt className="text-ink-500 font-mono uppercase tracking-wider text-xs">
                      {h.label}
                    </dt>
                    <dd className="text-ink-900 text-right">{h.value}</dd>
                  </div>
                ))}
              </motion.dl>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
