import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import SocialSidebar from './components/SocialSidebar'
import New from './pages/New'
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import MenuOverlay from './components/MenuOverlay'

function App() {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
      function handleResize() {
          setScreenHeight(window.innerHeight)
      }
      window.addEventListener('resize', handleResize)
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  },[])

  return (
    <>
      <div className='flex flex-col'>
          <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
          <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
          <main className={`fullpage-wrapper ${ isMobile ? 'p-9' : '' }`}>
            {/* <div> */}
              <div className='mb-20'>
                <Hero screenHeight={screenHeight}/>
              </div>
              <About screenHeight={screenHeight}/>
              {/* <Experience /> */}
              {/* <New /> */}
              {/* <Projects /> */}
              {/* <Contact /> */}
              <SocialSidebar />
            {/* </div> */}
          </main>
      </div>
    </>
  )
}

export default App
