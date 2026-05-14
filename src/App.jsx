import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import ProjectDetail from './components/ProjectDetail'
import Media from './components/Media'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen noise">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/media" element={<Media />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
