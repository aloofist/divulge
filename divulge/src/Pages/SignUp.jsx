import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './SignUp.css'
import { Navbar } from '../components'

const SignUp = () => {

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

      
        <Navbar/>
        <div className='login'>
            <h1>Create your Divulge account</h1>
            
            <p>Name</p>
            <input type="text" id="name"/>
            <p>Email</p>
            <input type="text" id="email"/>
            <p>Password</p>
            <input type="text" id="password"/>
            
            <span>
                <input type="checkbox"/>
                <p>Agree to Divulge's <a href="">Terms of Service</a> and <a href="">Privacy Policy</a></p>
            </span>
            <button>Sign Up</button>
        </div>
    </>
  )
}

export default SignUp
