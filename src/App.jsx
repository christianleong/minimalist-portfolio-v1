import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import SocialSidebar from './components/SocialSidebar'
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import MenuOverlay from './components/MenuOverlay'
import ReactFullpage from "@fullpage/react-fullpage";
import Contact from './pages/Contact'

const FullpageKey = import.meta.env.VITE_SOME_KEY_FULLPAGE_JS

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
        { !isMobile // desktop pages
          ? <ReactFullpage
            debug /* Debug logging */
            // fullpage options
            licenseKey={FullpageKey}
            sectionSelector='.fullpage-section'
            credits='false'
            navigation
            navigationPosition='left'
            menu='#menu'
            scrollingSpeed={1000}
            render={(comp) => (
              <ReactFullpage.Wrapper>
                <section className="fullpage-section" data-anchor="home" style={{ height: `${screenHeight}px` }}>
                  <Hero screenHeight={screenHeight} onSectionChange={handleSectionChange}/>
                </section>
                <section className="fullpage-section" data-anchor="about" style={{ height: `${screenHeight}px` }}>
                  <About screenHeight={screenHeight} onSectionChange={handleSectionChange}/>
                </section>
                <section className="fullpage-section" data-anchor="contact" style={{ height: `${screenHeight}px` }}>
                  <Contact screenHeight={screenHeight} onSectionChange={handleSectionChange}/>
                </section>
              </ReactFullpage.Wrapper>
            )}
          />
          : // mobile pages
          <main className={`fullpage-wrapper ${ isMobile ? 'p-9' : '' }`}>
              <Hero screenHeight={screenHeight}/>
              <About screenHeight={screenHeight}/>
              <Contact screenHeight={screenHeight}/>
              <SocialSidebar />
          </main>
        }
        <SocialSidebar />
      </div>
    </>
  )
}

export default App
