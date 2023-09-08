import './css/main.css'

import Navbar from "./components/Navbar"
import About from './components/About'
import History from './components/History'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <About />
        <History />
        <Portfolio />
      </main>
    </>
  )
}

export default App
