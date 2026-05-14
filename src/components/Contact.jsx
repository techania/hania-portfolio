import { motion } from 'framer-motion'
import { profile } from '../data/content'

const ease = [0.22, 1, 0.36, 1]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 bg-ink-900 text-cream-100 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease }}
          className="flex items-baseline gap-4 mb-14 md:mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream-100/50">
            04 / Contact
          </span>
          <span className="h-px flex-1 bg-cream-100/20" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="font-serif text-6xl md:text-[10rem] lg:text-[12rem] leading-[0.88] tracking-tightest"
        >
          Get <br />
          <em className="text-accent-soft">in</em> <br />
          <span className="text-cream-100/60">touch.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-10"
        >
          <div className="md:col-span-6">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 font-serif text-3xl md:text-5xl italic hover:text-accent-soft transition-colors"
            >
              {profile.email}
              <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 not-italic">
                →
              </span>
            </a>
            <p className="mt-6 text-cream-100/70 max-w-md leading-relaxed">
              Always up for a good conversation about design, strategy, or whatever you're
              building.
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-9 space-y-4 text-sm">
            <p className="font-mono uppercase tracking-[0.2em] text-cream-100/50 text-xs mb-4">
              Elsewhere
            </p>
            {[
              { label: 'LinkedIn', href: profile.linkedin, handle: '/haniaguiagoussou' },
              { label: 'Instagram', href: profile.instagram, handle: '@csgirlcolumbia' },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-t border-cream-100/15 pt-3 hover:text-accent-soft transition-colors"
              >
                <span className="text-cream-100/60">{l.label}</span>
                <span className="flex items-center gap-2">
                  {l.handle}
                  <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
