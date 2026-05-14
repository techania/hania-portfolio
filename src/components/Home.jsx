import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from './Hero'
import About from './About'
import Work from './Work'
import Disciplines from './Disciplines'
import Contact from './Contact'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <>
      <Hero />
      <About />
      <Work />
      <Disciplines />
      <Contact />
    </>
  )
}
