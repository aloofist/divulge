import React from 'react'
import { Navbar, Hero, Footer } from '../components'
import './Intro.css'

const Intro = () => {
   
  const blob = document.getElementById("blob");

  document.body.onpointermove = event => {
      const { clientX, clientY } = event;
  
      blob.animate({
          left: `${clientX}px`,
          top: `${clientY}px`,
      }, {duration: 30000, fill: "forwards"});
  };

  return (
    <>
    {/* <div id="cursor-dot"></div> */}
    <div id="blob"></div>
    <div id="blob1"></div>
    <div id="blob2"></div>
    <div id="blur"></div>

    <Navbar />
    <Hero />
    <Footer />

    </>
  )
}

export default Intro
