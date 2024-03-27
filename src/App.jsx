import './App.css'
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from './components/Navbar'
import SocialSidebar from './components/SocialSidebar'
import MenuOverlay from './components/MenuOverlay'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Projects from './pages/Projects';

const FullpageKey = import.meta.env.VITE_SOME_KEY_FULLPAGE_JS

function FullpageContent({ screenHeight, navbarOpen }) {
  return (
    <ReactFullpage
      debug /* Debug logging */
      // fullpage options - https://github.com/alvarotrigo/fullPage.js?tab=readme-ov-file#options
      // either use anchors option or add data-anchor to each section
      // an id will also need to be added inside each page
      licenseKey={FullpageKey}
      sectionSelector='.fullpage-section'
      credits='false'
      navigation
      navigationPosition='left'
      menu='#menu'
      scrollingSpeed={1000}
      render={() => (
        <ReactFullpage.Wrapper>
          <section className="fullpage-section" data-anchor="home" style={{ height: `${screenHeight}px` }}>
            <Home screenHeight={screenHeight} />
          </section>
          <section className="fullpage-section" data-anchor="about" style={{ height: `${screenHeight}px` }}>
            <About screenHeight={screenHeight} />
          </section>
          <section className="fullpage-section" data-anchor="experience" style={{ height: `${screenHeight}px` }}>
            <Experience screenHeight={screenHeight} navbarOpen={navbarOpen} />
          </section>
          <section className="fullpage-section" data-anchor="projects" style={{ height: `${screenHeight}px` }}>
            <Projects screenHeight={screenHeight} />
          </section>
          <section className="fullpage-section" data-anchor="contact" style={{ height: `${screenHeight}px` }}>
            <Contact screenHeight={screenHeight} />
          </section>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}

function MobileContent({ screenHeight, navbarOpen }) {
  return (
    <main className={`p-9`}>
      <div className='mb-12'>
        <Home screenHeight={screenHeight} />
      </div>
      <div className='mb-12'>
        <About screenHeight={screenHeight} />
      </div>
      <div className='mb-12'>
        <Experience screenHeight={screenHeight} navbarOpen={navbarOpen} />
      </div>
      <div className='mb-12'>
        <Projects screenHeight={screenHeight} />
      </div>
      <div className='mb-12'>
        <Contact screenHeight={screenHeight} />
      </div>
    </main>
  );
}

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [navbarOpen, setNavbarOpen] = useState(false);

  // make it responsive when height of screen is changed
  useEffect(() => {
    function handleResize() {
      setScreenHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <>
      <div className='flex flex-col'>
        <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        {isMobile ? (
          <MobileContent screenHeight={screenHeight} navbarOpen={navbarOpen} />
        ) : (
          <FullpageContent screenHeight={screenHeight} navbarOpen={navbarOpen} />
        )}
        <SocialSidebar />
      </div>
    </>
  )
}

export default App;