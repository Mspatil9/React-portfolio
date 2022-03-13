import React from 'react'
import About from './components/About/About.jsx'
import Header from './components/Header/header.jsx'
import Nav from  './components/Nav/nav.jsx' 
import Experience from './components/Experience/experience.jsx'
import Services from './components/Services/services' 
import  Portfolio from './components/Portfolio/portfolio'
import Testimonials from './Testimonials/testimonials'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      </>
    
  )
}

export default App