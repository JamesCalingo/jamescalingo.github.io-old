import React from 'react'
import About from './components/pages/About'
import Technologies from './components/pages/Technologies/Technologies'
import Portfolio from './components/pages/Portfolio/Portfolio'
import Contact from './components/pages/Contact'
import Sidebar from './components/Sidebar'
import './App.css'
import Copyright from './components/Copyright'

function App () {
  return (
   
    <div>
      <Sidebar />
      {/* <HashRouter basename="/"> */}
      <div className="pages">
      <About />
      {/* <Technologies /> */}
      <Portfolio />
      <Contact />
      <Copyright />
      </div>
     {/* </HashRouter> */}

    </div>

  )
}

export default App
