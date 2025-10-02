import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import Portfolio from './assets/pages/Portfolio'
import About from './assets/pages/About'
import Contact from './assets/pages/Contact'
import Service from './assets/pages/Service'
import Navbar from './assets/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/service' element={<Service />} />
        </Routes>
    </div>
  )
}

export default App