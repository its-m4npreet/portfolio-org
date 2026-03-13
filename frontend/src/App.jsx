import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Hero from './components/hero'
import TwinklingBackground from './components/TwinklingBackground'
import Bio from './components/bio'
import Skills from './components/skills'
import Projects from './components/Projects'
import SocialMedia from './components/SocialMedia'
import Footer from './components/Footer'
import AllProjects from './pages/AllProjects'
import { GiCoffeeMug } from 'react-icons/gi'

function App() {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let scrollTimeout

    const handleScroll = () => {
      setIsScrolling(true)

      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 180)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
      <TwinklingBackground />
      <a 
        href={import.meta.env.VITE_PAY_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`fixed top-5 right-5 md:top-6 md:right-6 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-medium ${isScrolling ? 'px-3 py-2.5 md:px-3.5 md:py-3 gap-1.5' : 'px-4 py-2.5 md:px-5 md:py-3 gap-2.5'} rounded-xl flex items-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 z-50 border border-white/20 hover:border-white/30 group`}
      >
        <GiCoffeeMug className="text-xl md:text-2xl group-hover:rotate-12 transition-transform duration-300" />
        <span
          className={`hidden sm:inline-block text-sm md:text-base whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${isScrolling ? 'max-w-0 opacity-0 -translate-x-1' : 'max-w-40 opacity-100 translate-x-0'}`}
        >
          Buy me a coffee
        </span>
      </a>
      
      <Routes>
        <Route path="/" element={
          <div className='flex flex-col'>
            <Hero />
            <Bio />
            <Skills />
            <Projects />
            <SocialMedia />
            <Footer />
          </div>
        } />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </Router>
  )
}

export default App
