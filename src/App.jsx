import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
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
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Hero />} />
              <Route path='/about' element={<About />} />
              <Route path='/experience' element={<Experience />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
            <SocialSidebar />
          </main>
        </Router>
      </div>
    </>
  )
}

export default App
