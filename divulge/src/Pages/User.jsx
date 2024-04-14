import React, { useState, useEffect } from 'react';
import { Navbar, Footer, CreatePost, UserPosts } from '../components'
import { useSpring, animated } from '@react-spring/web';
import './User.css'

const User = () => {

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

  return (
    <>

      <Navbar/>

      <CreatePost/>
      <UserPosts/>
      

      <div className='logout-area'>
          <a href="#">
            <button id='logout-btn'>Logout <span>- Are you sure?</span>
            </button>
          </a>
      </div>

      <Footer/>
    </>
  )
}

export default User
