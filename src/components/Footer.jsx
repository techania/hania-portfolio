import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-100/60 border-t border-cream-100/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm">
        <div className="flex items-center gap-3">
          <span className="font-serif italic text-xl text-cream-100">hania</span>
          <span className="h-1 w-1 rounded-full bg-accent" />
          <span>© {new Date().getFullYear()} {profile.name}</span>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.15em]">
          <span>Designed & built with care</span>
          <a href="#top" className="hover:text-cream-100 transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
