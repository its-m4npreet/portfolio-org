import './App.css'
import Hero from './components/hero'
import TwinklingBackground from './components/TwinklingBackground'
import Bio from './components/bio'
import Skills from './components/skills'
import { GiCoffeeMug } from 'react-icons/gi'

function App() {

  return (
    <>
      <TwinklingBackground />
      <a 
        href="https://buymeacoffee.com/yourname" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed top-5 right-5 md:top-6 md:right-6 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-medium px-4 py-2.5 md:px-5 md:py-3 rounded-xl flex items-center gap-2.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 z-50 border border-white/20 hover:border-white/30 group"
      >
        <GiCoffeeMug className="text-xl md:text-2xl group-hover:rotate-12 transition-transform duration-300" />
        <span className="hidden sm:inline text-sm md:text-base">Buy me a coffee</span>
      </a>
      <div className='flex flex-col'>
        <Hero />
      <Bio />
      <Skills />
      </div>
    </>
  )
}

export default App
