import React, { useEffect } from 'react'
import About from '../components/About'
import Faq from '../components/Faq'
import Hero from '../components/Hero'

function Home() {

  useEffect(() => {
    document.title = "Home | Riz Manter"
  }, []);

  return (
    <div>
        <Hero/>
        <Faq/>
        <About/>
    </div>
  )
}

export default Home