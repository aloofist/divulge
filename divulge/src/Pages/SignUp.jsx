import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './SignUp.css'
import { Navbar, Footer } from '../components'

const SignUp = () => {
  //for blobs
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
        

      
        <Navbar/>
        <div className='login'>
              <div id="blur"></div>
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

            <h1>Create your <span id="divulge-login">Divulge</span> account</h1>
            
            <p>Userame</p>
            <input type="text" id="name" placeholder='e.g. aloofist'/>
            <p>Password</p>
            <input type="password" id="password" placeholder='At least 8 characters please'/>
            
            <span style={{marginTop: '2rem', marginBottom: '2rem'}}>
                {/* <input type="checkbox"/> */}
                <p style={{maxWidth: '30rem', textAlign: 'center', fontFamily: '"Inter", sans-serif'}}>By signing up, you agree to <br />  Divulge's 
                  <a href="https://docs.google.com/document/d/1U8hsL9vHdG43k5H_4cG3Aqnbl28BQ41Py-KXJdIMwlw/edit?usp=sharing" target='_'> <i>Terms of Service</i> </a> 
                  and 
                  <a href="https://docs.google.com/document/d/1aZFdM2WzPA9WapUo-NcRaEZGwl8-Ueid05nycn7-GXQ/edit?usp=sharing" target='_'> <i>Privacy Policy.</i></a>
                </p>
            </span>

            <button>Sign Up</button>
            <p style={{fontStyle: 'italic'}}>Already have an account? 
              <a href="#login"> Login</a>
            </p>
        </div>
    </>
  )
}

export default SignUp
