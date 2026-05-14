import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }

    setError('')
    setSubmitted(true)
    setTimeout(() => navigate('/', { replace: true }), 1200)
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-cream-100 text-ink-900">
      <div className="w-full max-w-lg rounded-[2rem] border border-ink-900/10 bg-white/95 p-10 shadow-[0_40px_80px_rgba(17,24,39,0.08)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-500/70 mb-4">Account</p>
            <h1 className="font-serif text-5xl tracking-tight text-ink-900">Login</h1>
            <p className="mt-4 text-ink-700/80 leading-relaxed">
              Enter your credentials to continue. This is a demo login page and does not connect to a backend.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-ink-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-3xl border border-ink-900/10 bg-cream-100 px-5 py-4 text-sm text-ink-900 outline-none focus:border-ink-900 focus:ring-2 focus:ring-accent/20"
                placeholder="hello@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-ink-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-3xl border border-ink-900/10 bg-cream-100 px-5 py-4 text-sm text-ink-900 outline-none focus:border-ink-900 focus:ring-2 focus:ring-accent/20"
                placeholder="********"
              />
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}
            {submitted && !error && (
              <p className="text-sm text-emerald-700">Login successful — redirecting home…</p>
            )}

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-ink-900 px-6 py-4 text-sm font-semibold text-cream-100 transition hover:bg-ink-700"
            >
              Sign in
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
