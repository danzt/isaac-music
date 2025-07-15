import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import MusicPortfolio from './components/MusicPortfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <About />
        <MusicPortfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
