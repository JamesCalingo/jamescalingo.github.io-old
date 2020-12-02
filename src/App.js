import React from 'react'
import Header from "./components/pages/Header"
import About from './components/pages/About'
import Technologies from './components/pages/Technologies/Technologies'
import Portfolio from './components/pages/Portfolio/Portfolio'
import Contact from './components/pages/Contact'
import Sidebar from './components/Sidebar'
import './App.css'
import Copyright from './components/Copyright'

function App () {
  return (
   
    <div className="container-grid">
      <Sidebar />
      {/* <HashRouter basename="/"> */}
      <div className="pages">
        <Header />
      <About />
      <Technologies />
      <Portfolio />
      <Contact />
      <Copyright />
      </div>
     {/* </HashRouter> */}

    </div>

  )
}

export default App
