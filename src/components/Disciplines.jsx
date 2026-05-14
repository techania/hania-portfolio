import { motion } from 'framer-motion'
import { disciplines } from '../data/content'

const ease = [0.22, 1, 0.36, 1]

export default function Disciplines() {
  return (
    <section id="disciplines" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease }}
          className="flex items-baseline gap-4 mb-14 md:mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
            03 / Practice
          </span>
          <span className="h-px flex-1 bg-ink-900/15" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tightest mb-16 md:mb-20 max-w-3xl"
        >
          Four hats, <em>one</em> compass.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 border-t border-ink-900/15">
          {disciplines.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="group py-10 border-b border-ink-900/15 flex items-start gap-6"
            >
              <span className="font-mono text-xs text-ink-500 pt-2">0{i + 1}</span>
              <div className="flex-1">
                <h3 className="font-serif text-2xl md:text-3xl mb-3 group-hover:text-accent transition-colors">
                  {d.title}
                </h3>
                <p className="text-ink-700 leading-relaxed max-w-md">{d.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
