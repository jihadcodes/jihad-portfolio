import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Works from '../sections/Works'
import Marquee from '../sections/Marquee'

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Services/>
      <Works/>
      <Marquee></Marquee>
    </>
  )
}

export default Home
