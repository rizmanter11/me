import React from 'react'
import About from '../components/About'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'

function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Faq/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home