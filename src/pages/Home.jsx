import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Works from '../sections/Works'
import Marquee from '../sections/Marquee'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Services/>
      <Works/>
      <Marquee></Marquee>
      <CTA/>
    </>
  )
}

export default Home
