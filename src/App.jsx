import './css/main.css'

import Navbar from "./components/Navbar"
import About from './components/About'
import History from './components/History'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <About />
        <History />
      </main>
    </>
  )
}

export default App
