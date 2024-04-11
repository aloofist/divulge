import React, { useState, useEffect } from 'react';  //
import { useSpring, animated } from '@react-spring/web'; //
import { Navbar, ExploreGallery, MainGallery, Footer } from '../components'
import './Gallery.css'

const Gallery = () => {

  // const blob = document.getElementById("gallery-blob");

//   document.body.onpointermove = event => {
//     const { clientX, clientY } = event;

//     blob.animate({
//         left: `${clientX}px`,
//         top: `${clientY}px`
//     }, {duration: 20000, fill: "forwards"});
// };
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('pointermove', handleMouseMove);

    return () => {
      document.removeEventListener('pointermove', handleMouseMove);
    };
 }, []);

  const animatedProps = useSpring({
    left: cursorPosition.x,
    top: cursorPosition.y,
    config: { tension: 210, friction: 200 },
  });

  return (
    <>
    <div id="gallery-blob"></div>
    <animated.div
        id="gallery-blob"
        style={{
          position: 'absolute',
          ...animatedProps,
        }}
      ></animated.div>
    <Navbar/>
    <ExploreGallery/>
    <MainGallery/>
    <Footer/>
    </>
  )
}

export default Gallery
