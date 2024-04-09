import React from 'react'
import { Navbar, Hero, Footer } from '../components'
import './Intro.css'

const Intro = () => {
//   const cursor = document.getElementById("cursor-dot");

//   window.onmousemove = event => {
//     const { clientX, clientY } = event;

//     cursor.animate({
//         left: `${clientX}px`,
//         top: `${clientY}px`
//     }, {duration: 400, fill: "forwards"});
// };


  return (
    <>
    <div id="cursor-dot"></div>
    <Navbar />
    <Hero />
    <Footer />
    </>
  )
}

export default Intro
