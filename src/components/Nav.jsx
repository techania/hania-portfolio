import { useEffect, useState } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

function SayHiButton({ href, isLink }) {
  const waveControls = useAnimation()

  const handleHover = () => {
    waveControls.start({
      rotate: [0, -20, 20, -15, 15, -5, 5, 0],
      transition: { duration: 0.7, ease: 'easeInOut' },
    })
  }

  const inner = (
    <>
      <motion.span animate={waveControls} className="inline-block origin-bottom-right text-sm">
        👋🏾
      </motion.span>
      <span className="text-sm text-ink-900">Say Hi!</span>
    </>
  )

  const cls = "inline-flex items-center gap-1.5 rounded-full border border-ink-900/20 px-3 py-1 text-sm hover:border-ink-900/40 transition-all duration-200"

  if (isLink) {
    return <Link to={href} className={cls} onMouseEnter={handleHover}>{inner}</Link>
  }
  return <a href={href} className={cls} onMouseEnter={handleHover}>{inner}</a>
}

const links = [
  { hash: '#about', label: 'About' },
  { hash: '#work', label: 'Work' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-3 bg-cream-100/80 backdrop-blur-md border-b border-ink-900/5' : 'py-6'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2">
          <span className="font-serif text-2xl italic tracking-tight">hania</span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            onHome ? (
              <a
                key={l.hash}
                href={l.hash}
                className="text-sm text-ink-700 hover:text-ink-900 transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-ink-900 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </a>
            ) : (
              <Link
                key={l.hash}
                to={`/${l.hash}`}
                className="text-sm text-ink-700 hover:text-ink-900 transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-ink-900 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </Link>
            )
          )}
          <Link
            to="/media"
            className="text-sm text-ink-700 hover:text-ink-900 transition-colors relative group"
          >
            Media
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-ink-900 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <SayHiButton href={onHome ? '#contact' : '/#contact'} isLink={!onHome} />
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              className="block h-px w-5 bg-ink-900 origin-center"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block h-px w-5 bg-ink-900"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              className="block h-px w-5 bg-ink-900 origin-center"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-cream-100/95 backdrop-blur-md border-t border-ink-900/5 px-6 py-6 flex flex-col gap-5"
          >
            {links.map((l) =>
              onHome ? (
                <a
                  key={l.hash}
                  href={l.hash}
                  onClick={() => setMenuOpen(false)}
                  className="text-base text-ink-700 hover:text-ink-900 transition-colors"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.hash}
                  to={`/${l.hash}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-base text-ink-700 hover:text-ink-900 transition-colors"
                >
                  {l.label}
                </Link>
              )
            )}
            <Link
              to="/media"
              onClick={() => setMenuOpen(false)}
              className="text-base text-ink-700 hover:text-ink-900 transition-colors"
            >
              Media
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
