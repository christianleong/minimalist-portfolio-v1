import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Hero from './pages/Hero'
import Projects from './pages/Projects'


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
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </main>
        </Router>
      </div>
    </>
  )
}

export default App
