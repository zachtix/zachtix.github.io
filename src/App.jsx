import { useState, useEffect } from 'react';

import './css/main.css'

import Navbar from "./components/Navbar"
import About from './components/About'
import History from './components/History'
import Projects from './components/Project'
import Skills from './components/Skills'

function App() {
  // handle button back to top
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <Navbar />
      <main className='pt-5' id='home'>
        <About />
        <Skills />
        <History />
        <Projects />
      </main>
      {showTopBtn &&(
        <button
          type="button"
          class="btn btn-floating btn-back-to-top text-white"
          onClick={goToTop}
          >
          <i class="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  )
}

export default App
