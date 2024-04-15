import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Navbar, Hero, Footer } from '../components';
import './Intro.css';

const Intro = () => {

 const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

 useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX + window.scrollX;
      const y = event.clientY + window.scrollY;

      setCursorPosition({ x, y });
    };

    document.addEventListener('pointermove', handleMouseMove);

    return () => {
        document.removeEventListener('pointermove', handleMouseMove);
      };
    }, []);

    const animatedCircle = useSpring({
        left: cursorPosition.x,
        top: cursorPosition.y,
        config: { tension: 700, friction: 100 },
    });

    const animatedBlob = useSpring({
      left: cursorPosition.x,
      top: cursorPosition.y,
      config: { tension: 210, friction: 200 },
  });


 return (
    <>
      
        <animated.div
          id="circle"
          style={{
            position: 'absolute',
            ...animatedCircle,
          }}
        ></animated.div>
        <animated.div
          id="blob"
          style={{
            position: 'absolute',
            ...animatedBlob,
          }}
        ></animated.div>
        
        <div id="blob1"></div>
        <div id="blob2"></div>
        <div id="blur"></div>
        <Navbar />
        <Hero />
        <Footer />
      
    </>
 );
};

export default Intro;
