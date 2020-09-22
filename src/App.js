import React from 'react'
import Header from './components/pages/Header'
import About from './components/pages/About'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import NavTabs from './components/NavTabs'
import './App.css'

function App () {
  return (
    // <HashRouter basename="/">
    <div>
      <Header />
      <NavTabs />
      <About />
      <Portfolio />
      <Contact />
    </div>
    // {/* </HashRouter> */}
  )
}

export default App
