import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useParams, Navigate } from 'react-router-dom'
import { User, Box, Hash, Wrench, Leaf, Zap, Droplets, Sprout, MessageSquare, Heart, Trophy, ExternalLink } from 'lucide-react'
import { projects } from '../data/content'

const ease = [0.22, 1, 0.36, 1]

function sectionNumbers(project) {
  const order = ['overview']
  if (project.finalScreens) order.push('final-product')
  order.push('process')
  if (project.personas) order.push('personas')
  if (project.artifacts) order.push('artifacts')
  order.push('insights')
  if (project.testimonials) order.push('testimonials')
  order.push('outcome')
  return Object.fromEntries(order.map((id, i) => [id, String(i + 1).padStart(2, '0')]))
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)
  const index = projects.findIndex((p) => p.id === id)
  const next = projects[(index + 1) % projects.length]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) return <Navigate to="/" replace />

  const hasCaseStudy = Boolean(project.overview)
  const nums = hasCaseStudy ? sectionNumbers(project) : {}

  return (
    <article className="pb-20">
      <BannerHero project={project} />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="mt-16 md:mt-24 text-xl md:text-2xl text-ink-700 leading-relaxed max-w-3xl"
        >
          {project.blurb}
        </motion.p>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.45 }}
          className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-ink-900/15 pt-8"
        >
          <Meta icon={User} label="Role" value={project.role} accent={project.color} />
          <Meta icon={Box} label="Type" value={project.type || '–'} accent={project.color} />
          <Meta icon={Hash} label="Category" value={project.category} accent={project.color} />
          <Meta
            icon={Wrench}
            label="Tools"
            value={project.tools ? project.tools.join(' · ') : '–'}
            accent={project.color}
          />
        </motion.dl>

        {(project.demoUrl || project.videoUrl) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border font-mono text-xs uppercase tracking-[0.15em] transition-colors"
                style={{ borderColor: project.color, color: project.color }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = project.color; e.currentTarget.style.color = 'white' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = project.color }}
              >
                <ExternalLink size={13} />
                View live
              </a>
            )}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border font-mono text-xs uppercase tracking-[0.15em] transition-colors"
                style={{ borderColor: project.color, color: project.color }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = project.color; e.currentTarget.style.color = 'white' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = project.color }}
              >
                <ExternalLink size={13} />
                Project walkthrough
              </a>
            )}
          </motion.div>
        )}
      </div>

      {hasCaseStudy && <TableOfContents project={project} />}

      {hasCaseStudy ? (
        <>
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Section id="overview" number={nums.overview} title="Overview">
              <OverviewCards overview={project.overview} accent={project.color} />
            </Section>
          </div>

          {project.finalScreens && (
            <div className="mx-auto max-w-[1600px] px-6 md:px-10">
              <Section id="final-product" number={nums['final-product']} title="System overview">
                <Gallery section={project.finalScreens} />
              </Section>
            </div>
          )}

          <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Section id="process" number={nums.process} title="Process">
            <ProcessTimeline steps={project.process} accent={project.color} />
          </Section>

          {project.personas && project.personas.length > 0 && (
            <Section id="personas" number={nums.personas} title="Personas">
              <PersonasSection personas={project.personas} accent={project.color} />
            </Section>
          )}

          {project.artifacts && project.artifacts.length > 0 && (
            <Section id="artifacts" number={nums.artifacts} title="Design & artifacts">
              <div className="space-y-20 md:space-y-28">
                {project.artifacts.map((a) => (
                  <Gallery key={a.heading} section={a} />
                ))}
              </div>
            </Section>
          )}

          <Section id="insights" number={nums.insights} title="What it taught">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.insights.map((ins, i) => (
                <motion.div
                  key={ins.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                  className="p-7 md:p-8 rounded-xl bg-cream-50 border border-ink-900/10"
                >
                  <h3 className="font-serif text-2xl mb-3">{ins.title}</h3>
                  <p className="text-ink-700 leading-relaxed">{ins.body}</p>
                </motion.div>
              ))}
            </div>
          </Section>

          {project.testimonials && project.testimonials.length > 0 && (
            <Section id="testimonials" number={nums.testimonials} title="In their words">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {project.testimonials.map((t, i) => (
                  <motion.figure
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, ease, delay: i * 0.1 }}
                    className="relative"
                  >
                    <span className="absolute -top-8 -left-2 font-serif text-8xl text-accent/40 leading-none select-none">
                      &ldquo;
                    </span>
                    <blockquote className="font-serif text-3xl md:text-4xl italic leading-snug relative">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
                      {t.attribution}
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </Section>
          )}

          <Section id="outcome" number={nums.outcome} title="Outcome">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease }}
              className="font-serif text-3xl md:text-5xl leading-[1.15] tracking-tight max-w-4xl"
            >
              {project.outcome}
              {project.award && (
                project.awardUrl ? (
                  <a
                    href={project.awardUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mt-4 hover:opacity-75 transition-opacity"
                    style={{ color: project.color }}
                  >
                    <Trophy size={40} strokeWidth={1.5} />
                    {project.award}
                  </a>
                ) : (
                  <span className="flex items-center gap-2 mt-4" style={{ color: project.color }}>
                    <Trophy size={40} strokeWidth={1.5} />
                    {project.award}
                  </span>
                )
              )}
            </motion.p>
          </Section>
          </div>
        </>
      ) : (
        <div className="mx-auto max-w-7xl px-6 md:px-10 mt-24 md:mt-32">
          <div className="border border-ink-900/15 rounded-xl p-10 md:p-14 bg-cream-50">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500 mb-4">
              Case study in progress
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-3xl">
              A fuller write-up of <em className="text-accent">{project.title}</em> is
              being built out here.
            </h2>
            <p className="mt-6 text-ink-700 max-w-2xl leading-relaxed">
              In the meantime, reach out if you'd like to see the process, artifacts, or
              final designs.
            </p>
            <a
              href="mailto:mail2hania@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink-900 px-5 py-2 text-sm hover:bg-ink-900 hover:text-cream-100 transition-colors"
            >
              Ask for the deck
              <span>→</span>
            </a>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-6 md:px-10 mt-32 md:mt-44 pt-16 border-t border-ink-900/15">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500 mb-4">
          Next project
        </p>
        <Link
          to={`/projects/${next.id}`}
          className="group flex items-baseline justify-between gap-6 hover:text-accent transition-colors"
        >
          <span className="font-serif text-5xl md:text-8xl leading-[0.95] tracking-tightest">
            {next.title}
          </span>
          <span className="text-3xl md:text-5xl transition-transform group-hover:translate-x-2">
            →
          </span>
        </Link>
      </div>
    </article>
  )
}

function BannerHero({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease }}
      className="pt-24 md:pt-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 mb-6">
        <Link
          to="/#work"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-500 hover:text-ink-900 transition-colors"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          Back to work
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.2 }}
        className="relative w-full"
        style={{ backgroundColor: project.color }}
      >
        {project.heroImage ? (
          <img
            src={project.heroImage}
            alt={`${project.title} hero`}
            className="block w-full h-auto"
          />
        ) : (
          <div className="h-40 md:h-56" />
        )}

        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          <div className="w-full mx-auto max-w-7xl px-6 md:px-10 pt-6 md:pt-10 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.5 }}
              className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white"
            >
              <span className="h-2 w-2 rounded-full bg-white" />
              {project.category}
              {project.type && (
                <>
                  <span className="text-white/40">/</span>
                  {project.type}
                </>
              )}
            </motion.div>
          </div>

          <div className="w-full mx-auto max-w-7xl px-6 md:px-10 pb-6 md:pb-12 pointer-events-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.6 }}
              className="font-serif text-white text-5xl sm:text-6xl md:text-[77px] lg:text-[109px] leading-[0.9] tracking-tightest"
            >
              {project.title}
              <span className="text-white">.</span>
            </motion.h1>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function OverviewCards({ overview, accent }) {
  const cards = [
    { label: 'The problem', body: overview.problem, emoji: '⚑' },
    { label: 'The goal', body: overview.goal, emoji: '◎' },
    { label: "Who it's for", body: overview.audience, emoji: '◍' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {cards.map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease, delay: i * 0.12 }}
          whileHover={{ y: -6 }}
          className="group relative p-7 md:p-9 rounded-2xl bg-cream-50 border border-ink-900/10 transition-shadow hover:shadow-lg"
        >
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-opacity opacity-50 group-hover:opacity-100"
            style={{ backgroundColor: accent }}
          />
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">
              {c.label}
            </span>
            <span
              className="text-2xl transition-transform group-hover:rotate-12"
              style={{ color: accent }}
            >
              {c.emoji}
            </span>
          </div>
          <p className="text-base md:text-lg text-ink-900 leading-relaxed">{c.body}</p>
        </motion.div>
      ))}
    </div>
  )
}

function ProcessTimeline({ steps, accent }) {
  return (
    <div className="relative">
      <div
        className="absolute left-4 md:left-6 top-2 bottom-2 w-px"
        style={{ backgroundColor: accent, opacity: 0.25 }}
      />
      <div className="space-y-3 md:space-y-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.phase}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease, delay: i * 0.07 }}
            className="group relative flex items-start gap-6 md:gap-10 pl-12 md:pl-16"
          >
            <motion.span
              whileHover={{ scale: 1.2 }}
              className="absolute left-0 md:left-2 top-5 h-3 w-3 rounded-full ring-4 ring-cream-100 z-10"
              style={{ backgroundColor: accent }}
            />
            <div className="flex-1 p-5 md:p-6 rounded-xl border border-ink-900/10 bg-cream-50/60 backdrop-blur transition-all group-hover:border-ink-900/25 group-hover:bg-cream-50">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl">{step.phase}</h3>
              </div>
              <p className="text-ink-700 leading-relaxed">{step.summary}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function Gallery({ section }) {
  const figureClass = section.maxWidth
    ? `w-full ${section.maxWidth} mx-auto`
    : 'w-full'

  // Handle menu hierarchy layout
  if (section.layout === 'menu-hierarchy') {
    return (
      <div>
        {section.heading && (
          <h3 className="font-serif text-2xl md:text-3xl mb-6 md:mb-8">{section.heading}</h3>
        )}
        <div className="space-y-8">
          {section.caption && (
            <div>
              <p className="text-ink-700 leading-relaxed">{section.caption}</p>
            </div>
          )}
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {section.menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                  className="relative flex flex-col items-center p-4 rounded-lg border border-ink-900/10 bg-cream-50 hover:border-ink-900/25 hover:shadow-md cursor-pointer transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-ink-900/20 mb-3 bg-ink-900/5 flex items-center justify-center overflow-hidden">
                    {item.color ? (
                      <div
                        className="w-full h-full rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                    ) : (
                      <span className="font-mono text-xs font-semibold text-ink-700">
                        {item.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <h5 className="font-mono text-xs uppercase tracking-[0.1em] text-ink-900 mb-1 text-center">
                    {item.name}
                  </h5>
                  <p className="text-xs text-ink-700 text-center leading-tight">
                    {item.purpose}
                  </p>

                  {item.submenus && item.submenus.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      whileHover={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-3 bg-white rounded-lg border border-ink-900/15 shadow-lg z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto min-w-max"
                    >
                      <div className="text-xs font-mono uppercase tracking-[0.1em] text-ink-500 mb-2 text-center">
                        Options
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {item.submenus.map((submenu, subIndex) => (
                          <motion.div
                            key={submenu}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                            className="text-xs text-ink-700 bg-cream-50 px-2 py-1 rounded border hover:bg-ink-900/5 transition-colors text-center"
                          >
                            {submenu}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Handle visual-system layout
  if (section.layout === 'visual-system') {
    return (
      <div>
        {section.heading && (
          <h3 className="font-serif text-2xl md:text-3xl mb-6 md:mb-8">{section.heading}</h3>
        )}
        <div className="space-y-8">
          {section.caption && (
            <div>
              <p className="text-ink-700 leading-relaxed">{section.caption}</p>
            </div>
          )}
          <div className={`grid grid-cols-1 ${section.colors.length > 1 ? 'md:grid-cols-2' : ''} gap-8`}>
            {section.colors.map((palette, paletteIndex) => (
              <motion.div
                key={palette.section}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease, delay: paletteIndex * 0.1 }}
                className="space-y-4"
              >
                <h4 className="font-serif text-xl mb-4">{palette.section}</h4>
                <div className="grid grid-cols-2 gap-3">
                  {palette.entries.map((color, colorIndex) => (
                    <motion.div
                      key={color.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.4, ease, delay: (paletteIndex * 0.1) + (colorIndex * 0.05) }}
                      className="flex items-center gap-3 p-3 rounded-lg border border-ink-900/10 bg-cream-50"
                    >
                      <div
                        className="w-8 h-8 rounded-md border border-ink-900/20 flex-shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="font-mono text-xs text-ink-900">{color.hex}</div>
                        <div className="text-xs text-ink-700 truncate">{color.name}</div>
                        <div className="text-xs text-ink-500 truncate">{color.usage}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Handle sub-sectioned layout (e.g. system overview with Watch + Companion sections)
  if (section.sections) {
    return (
      <div className="space-y-20 md:space-y-28">
        {section.sections.map((sub, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            <div className="md:w-80 flex-shrink-0">
              {sub.subheading && (
                <h3 className="font-serif text-2xl md:text-3xl text-ink-900 mb-5">
                  {sub.subheading}
                </h3>
              )}
              {sub.description && (
                <p className="text-ink-700 leading-relaxed text-base border-t border-ink-900/15 pt-5">
                  {sub.description}
                </p>
              )}
            </div>
            <div className={`flex-1 min-w-0 ${sub.columns === 2 ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'flex flex-col gap-10'}`}>
                {sub.images.map((img, j) => (
                  <motion.figure
                    key={img.src}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, ease, delay: j * 0.06 }}
                    className={`cursor-pointer ${sub.imageMaxWidth ? `mx-auto w-full ${sub.imageMaxWidth}` : 'w-full'}`}
                  >
                    <motion.img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="block w-full h-auto drop-shadow-xl"
                      transition={{ duration: 0.35, ease }}
                    />
                    {img.caption && (
                      <figcaption className="mt-4 text-center text-sm text-ink-500 font-mono uppercase tracking-wider">
                        {img.caption}
                      </figcaption>
                    )}
                  </motion.figure>
                ))}
              </div>
            </div>
          ))}
        </div>
    )
  }

  // Default image layout
  return (
    <div>
      {(section.heading || section.caption) && (
        <div className="mb-6 md:mb-8">
          {section.heading && (
            <h3 className="font-serif text-2xl md:text-3xl mb-2">{section.heading}</h3>
          )}
          {section.caption && (
            <p className="text-ink-700 leading-relaxed">{section.caption}</p>
          )}
        </div>
      )}
      <div className="flex flex-col items-center gap-10 md:gap-14">
        {section.images.map((img, i) => (
          <motion.figure
            key={img.src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -4 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease, delay: i * 0.06 }}
            className={figureClass}
          >
            <motion.img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="block max-w-full h-auto mx-auto rounded-xl border border-ink-900/10 hover:border-ink-900/25 hover:shadow-lg cursor-pointer transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            />
            {img.caption && (
              <figcaption className="mt-4 text-center text-sm text-ink-500 font-mono uppercase tracking-wider">
                {img.caption}
              </figcaption>
            )}
          </motion.figure>
        ))}
      </div>
    </div>
  )
}

function Meta({ icon: Icon, label, value, accent }) {
  return (
    <div>
      <dt className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-2">
        {Icon && (
          <Icon
            size={14}
            strokeWidth={1.75}
            style={accent ? { color: accent } : undefined}
          />
        )}
        {label}
      </dt>
      <dd className="text-ink-900">{value}</dd>
    </div>
  )
}

function Section({ id, number, title, children }) {
  return (
    <section id={id} className="mt-28 md:mt-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease }}
        className="flex items-baseline gap-4 mb-12 md:mb-16"
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
          {number} / {title}
        </span>
        <span className="h-px flex-1 bg-ink-900/15" />
      </motion.div>
      {children}
    </section>
  )
}

function PersonasSection({ personas, accent }) {
  return (
    <div className={`grid grid-cols-1 ${personas.length > 1 ? 'md:grid-cols-2' : ''} gap-8 md:gap-10`}>
      {personas.map((persona, i) => {
        const IconComponent = getIconComponent(persona.icon)
        return (
          <motion.div
            key={persona.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            className="flex flex-col h-full p-7 md:p-8 rounded-xl border border-ink-900/15 bg-cream-50 hover:border-ink-900/25 transition-colors"
          >
            <div className="flex items-start justify-between mb-6 pb-6 border-b border-ink-900/10">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-ink-900 mb-1">
                  {persona.name}
                </h3>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-500">
                  {persona.age} · {persona.role}
                </p>
              </div>
              {IconComponent && (
                <div className="p-2.5 rounded-lg flex-shrink-0" style={{ backgroundColor: `${persona.color}15` }}>
                  <IconComponent size={28} style={{ color: persona.color }} strokeWidth={1.5} />
                </div>
              )}
            </div>

            <div className="mb-6 pb-6 border-b border-ink-900/10">
              <p className="font-serif text-lg md:text-xl italic leading-relaxed text-ink-900">
                "{persona.quote}"
              </p>
            </div>

            <div className="mb-6 pb-6 border-b border-ink-900/10">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-3">
                Goals
              </p>
              <ul className="space-y-2">
                {persona.goals.map((goal, idx) => (
                  <li key={idx} className="text-sm text-ink-700 leading-relaxed flex gap-2">
                    <span className="text-ink-500 flex-shrink-0">·</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 pb-6 border-b border-ink-900/10">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-3">
                Pain Points
              </p>
              <ul className="space-y-2">
                {persona.painPoints.map((pain, idx) => (
                  <li key={idx} className="text-sm text-ink-700 leading-relaxed flex gap-2">
                    <span className="text-ink-500 flex-shrink-0">×</span>
                    <span>{pain}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-3">
                Behaviors
              </p>
              <ul className="space-y-2">
                {persona.behaviors.map((behavior, idx) => (
                  <li key={idx} className="text-sm text-ink-700 leading-relaxed flex gap-2">
                    <span className="text-ink-500 flex-shrink-0">→</span>
                    <span>{behavior}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

function TableOfContents({ project }) {
  const sections = [{ id: 'overview', title: 'Overview' }]

  if (project.finalScreens) {
    sections.push({ id: 'final-product', title: 'System Overview' })
  }

  sections.push({ id: 'process', title: 'Process' })

  if (project.personas) {
    sections.push({ id: 'personas', title: 'Personas' })
  }

  if (project.artifacts) {
    sections.push({ id: 'artifacts', title: 'Design & Artifacts' })
  }

  sections.push({ id: 'insights', title: 'What It Taught' })

  if (project.testimonials) {
    sections.push({ id: 'testimonials', title: 'In Their Words' })
  }

  sections.push({ id: 'outcome', title: 'Outcome' })

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 mt-16 md:mt-20">
      <div className="border border-ink-900/15 rounded-xl p-6 md:p-8 bg-cream-50">
        <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500 mb-4">
          Table of Contents
        </h4>
        <nav>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {sections.map((section, index) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="group flex items-center gap-3 w-full text-left hover:text-accent transition-colors"
                >
                  <span className="font-mono text-xs text-ink-500 group-hover:text-accent transition-colors">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="text-sm text-ink-700 group-hover:text-accent transition-colors">
                    {section.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

function getIconComponent(iconName) {
  const icons = {
    Leaf,
    Zap,
    Droplets,
    Sprout,
    MessageSquare,
    Heart,
  }
  return icons[iconName] || null
}
