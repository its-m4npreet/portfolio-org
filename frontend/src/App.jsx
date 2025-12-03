import './App.css'
import TwinklingBackground from './components/TwinklingBackground'
import Hero from './components/Hero'
import Bio from './components/bio'

function App() {

  return (
    <>
      <TwinklingBackground />
      <div className='flex flex-col'>
        <Hero />
      <Bio />
      </div>
    </>
  )
}

export default App
