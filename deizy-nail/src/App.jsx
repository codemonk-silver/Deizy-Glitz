import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home'
import Portfolio from '../src/pages/Portfolio'
import About from '../src/pages/About'
import Contact from '../src/pages/Contact'
import Service from '../src/pages/Service'
import Navbar from '../src/components/Navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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