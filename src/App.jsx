import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import SocialSidebar from './components/SocialSidebar'

function App() {
  return (
    <>
      <div className='app-wrapper'>
          <Navbar />
          <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
            <SocialSidebar />
          </main>
      </div>
    </>
  )
}

export default App
