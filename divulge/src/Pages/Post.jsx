import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Post.css'
import { Navbar, Footer, MainGallery } from '../components'
import mediumZoom from 'medium-zoom'

const Post = () => {

    useEffect(() => {
        const zoom = mediumZoom('[data-zoomable]', {
            background: 'rgba(0, 0, 0, 0.8)',
          });
    
        // cleanup function to detach the zoom effect
        return () => {
          zoom.detach();
        };
     }, []);
      
     //for cursor

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
        <div className='post-card'>
            <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" data-zoomable />

            <div className='post-info'>
                <h1>Title</h1>
                <p>
                    <i>by</i> 
                    <i id='username'><b>Username</b></i>

                    <button>
                        <i class="ri-discord-fill"></i>
                        <b id='discord-username'>aloofist</b>
                    </button>
                </p>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolores optio mollitia quidem enim! Quaerat, magni voluptates tenetur aspernatur ab quisquam explicabo sint veritatis, iste ratione officia quia exercitationem cum.</h2>
                
            </div>
            <span className="divider"></span>
        </div>
        <MainGallery/>
        <Footer/>
    </>
  )
}

export default Post
