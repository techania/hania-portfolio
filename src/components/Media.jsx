import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const typeColors = {
  Article: '#B8647C',
  YouTube: '#FF0000',
  TikTok: '#010101',
  Instagram: '#C13584',
  Webinar: '#4F46E5',
}

const headingWords = ['Out', 'in', 'the', 'world.']

const items = [
  {
    type: 'YouTube',
    title: 'Coding with Hania',
    source: 'YouTube',
    year: 'Ongoing',
    description:
      'A channel covering coding, product design, and tech, built for students and curious builders who want to see what a career at the intersection of design and engineering actually looks like.',
    url: 'https://www.youtube.com/@codingwithhania',
    cta: 'Visit channel',
  },
  {
    type: 'Article',
    title: "A Teenage Girl's Journey to Change the World with Code",
    source: 'Make: Magazine',
    year: '2016',
    description:
      '"Programming is like art: you use creativity, imagination, and critical thinking to create a functioning piece of code." Published after winning the Oracle Duke\'s Choice Award among 9 million Java developers, as the youngest recipient, and delivering a keynote at JavaOne for Kids.',
    url: 'https://makezine.com/article/maker-news/teenage-girls-journey-change-world-code/',
    cta: 'Read article',
  },
  {
    type: 'Instagram',
    title: 'CS Girl Columbia',
    source: 'Instagram',
    year: '2022',
    description:
      'A digital ethnography documenting the experience of a Black woman studying computer science at Columbia. Raw, honest posts covering the struggles and the wins, with the goal of showing women and people of color that a CS degree is hard but worth it and open to anyone.',
    url: 'https://www.instagram.com/csgirlcolumbia?igshid=YmMyMTA2M2Y%3D',
    cta: 'View page',
  },
  {
    type: 'Webinar',
    title: 'Comparing Ivy League Colleges: Brown, Columbia & Cornell',
    source: 'CollegeAdvisor',
    year: '2022',
    description:
      'Panelist on a CollegeAdvisor webinar comparing the student experience across three Ivy League schools, drawing on firsthand experience as a Columbia University student.',
    url: 'https://www.collegeadvisor.com/webinars/comparing-ivy-league-colleges-brown-columbia-cornell/',
    cta: 'Watch webinar',
  },
  {
    type: 'Article',
    title: 'Dublin High School Coder Wins Oracle Duke\'s Choice Award for Water Saver Project',
    source: 'OneDublin.org',
    year: '2015',
    description:
      '"Coding is all about creativity, it\'s all about problem-solving, it\'s about not giving up." A profile of the Water Saver project and its recognition as the youngest winner at the Oracle Duke\'s Choice Award.',
    url: 'https://onedublin.org/2015/11/08/dublin-high-school-coder-hania-guiagoussou-wins-oracle-dukes-choice-award-for-java-based-water-saver-project/',
    cta: 'Read article',
  },
  {
    type: 'TikTok',
    title: 'Coding with Hania: TikTok',
    source: 'TikTok',
    year: 'Ongoing',
    description:
      'Short videos showcasing CS and coding through projects built around personal interests like the environment and fashion. Aimed at sparking curiosity in young girls by showing what coding can actually make.',
    url: 'https://www.tiktok.com/@hania_guia?_t=8ZJSGzwP8i5&_r=1',
    cta: 'Visit channel',
  },
  {
    type: 'Article',
    title: 'My Coding Journey',
    source: 'Google Blog',
    year: '2015',
    description:
      '"Programming is like art: you use creativity, imagination, and critical thinking to create a functioning piece of code." Written for Google\'s official blog, covering the path from skeptical teen to award-winning programmer and advocate for women in tech.',
    url: 'https://blog.google/products-and-platforms/products/education/my-coding-journey/',
    cta: 'Read article',
  },
]

export default function Media() {
  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500 mb-4"
          >
            Media
          </motion.p>

          <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tightest mb-6 text-accent flex flex-wrap gap-x-4">
            {headingWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.1 + i * 0.1 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.55 }}
            className="text-ink-700 text-lg max-w-xl leading-relaxed"
          >
            Projects, press, and the spaces I've built to bring more people into tech.{' '}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
              className="inline-block"
            >
              🩷
            </motion.span>
          </motion.p>
        </div>

        <div className="mt-20 md:mt-28 space-y-6">
          {items.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease, delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group flex flex-col md:flex-row md:items-start gap-6 md:gap-10 p-8 md:p-10 rounded-2xl bg-cream-50 border border-ink-900/10 hover:border-ink-900/25 hover:shadow-xl transition-all duration-300 block"
            >
              <div className="md:w-48 flex-shrink-0 flex flex-col gap-2">
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.2em] flex items-center gap-1.5"
                  style={{ color: typeColors[item.type] || '#6B7280' }}
                >
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full inline-block"
                    style={{ backgroundColor: typeColors[item.type] || '#6B7280' }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: i * 0.5, ease: 'easeInOut' }}
                  />
                  {item.type}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
                  {item.source}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="font-serif text-2xl md:text-3xl text-ink-900 mb-4 leading-snug group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h2>
                <p className="text-ink-700 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>

              <div className="md:self-center flex-shrink-0">
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-500 group-hover:text-accent transition-colors duration-300">
                  {item.cta}
                  <motion.span
                    className="inline-block"
                    animate={{}}
                    whileHover={{ x: 4 }}
                  >
                    →
                  </motion.span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}
