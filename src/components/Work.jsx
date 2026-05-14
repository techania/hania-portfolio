import { motion } from 'framer-motion'
import { projects } from '../data/content'
import ProjectCard from './ProjectCard'

const ease = [0.22, 1, 0.36, 1]

export default function Work() {
  return (
    <section id="work" className="py-28 md:py-40 bg-cream-50">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease }}
          className="flex items-baseline gap-4 mb-14 md:mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
            02 / Selected work
          </span>
          <span className="h-px flex-1 bg-ink-900/15" />
          <span className="font-mono text-xs text-ink-500">{projects.length} projects</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tightest mb-16 md:mb-24 max-w-4xl"
        >
          Things I've <em className="text-accent">made</em> <br className="hidden md:block" />
          with care.
        </motion.h2>

        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
