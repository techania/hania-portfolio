import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ease = [0.22, 1, 0.36, 1]

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const hasCaseStudy = Boolean(project.overview)
  const flip = index % 2 === 1

  return (
    <motion.article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease, delay: 0.05 }}
      className="group"
    >
      <Link
        to={`/projects/${project.id}`}
        className="block grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
      >
        <div
          className={`md:col-span-7 ${flip ? 'md:order-2' : ''}`}
        >
          {project.thumbnail ? (
            <div
              className="relative rounded-xl overflow-hidden"
              style={project.framed ? { backgroundColor: project.color } : {}}
            >
              <div className={project.framed ? 'p-8 md:p-14 lg:p-20' : ''}>
                <motion.img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  animate={{ scale: hovered ? 1.02 : 1 }}
                  transition={{ duration: 0.7, ease }}
                  className={`block w-full h-auto ${project.framed ? 'rounded-md shadow-2xl' : ''}`}
                />
              </div>
              {!project.framed && (
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent pointer-events-none rounded-xl" />
              )}
              <div className={`absolute top-5 left-5 text-xs font-mono uppercase tracking-wider ${project.framed ? 'text-cream-100/80' : 'text-cream-100'}`}>
                {project.category}
              </div>
              <motion.div
                animate={{ y: hovered ? 0 : 8, opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.4, ease }}
                className="absolute bottom-5 right-5 h-11 w-11 rounded-full bg-cream-100 text-ink-900 flex items-center justify-center"
              >
                <span className="text-xl">→</span>
              </motion.div>
            </div>
          ) : (
            <div
              className="relative aspect-[4/3] rounded-xl overflow-hidden"
              style={{ backgroundColor: project.color }}
            >
              <motion.div
                animate={{ scale: hovered ? 1.04 : 1 }}
                transition={{ duration: 0.7, ease }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span
                  className="font-serif italic text-white/90 text-[20vw] md:text-[12vw] leading-none tracking-tightest select-none"
                  style={{ mixBlendMode: 'overlay' }}
                >
                  {project.title.charAt(0)}
                </span>
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-5 left-5 text-cream-100 text-xs font-mono uppercase tracking-wider">
                {project.category}
              </div>
              <motion.div
                animate={{ y: hovered ? 0 : 8, opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.4, ease }}
                className="absolute bottom-5 right-5 h-11 w-11 rounded-full bg-cream-100 text-ink-900 flex items-center justify-center"
              >
                <span className="text-xl">→</span>
              </motion.div>
            </div>
          )}
        </div>

        <div className="md:col-span-5">
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight group-hover:text-accent transition-colors leading-[1.05]">
            {project.title}
          </h3>
          <p className="mt-4 text-base md:text-lg text-ink-700 max-w-xl leading-relaxed">
            {project.blurb}
          </p>

          <dl className="card-meta mt-6 grid-cols-2 gap-x-6 gap-y-4 max-w-md text-sm border-t border-ink-900/10 pt-5">
            {project.role && (
              <div className="col-span-2 sm:col-span-1">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-1">
                  Role
                </dt>
                <dd className="text-ink-900">{project.role}</dd>
              </div>
            )}
            {project.type && (
              <div className="col-span-2 sm:col-span-1">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-1">
                  Type
                </dt>
                <dd className="text-ink-900">{project.type}</dd>
              </div>
            )}
          </dl>

          {project.tools && project.tools.length > 0 && (
            <div className="card-tools mt-4 flex-wrap gap-2 max-w-md">
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full border border-ink-900/15 text-ink-700"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <span className="mt-6 inline-flex items-center gap-2 text-sm text-ink-900 group-hover:text-accent transition-colors">
            {hasCaseStudy ? 'Read case study' : 'View project'}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
