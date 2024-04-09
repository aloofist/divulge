import React from 'react'
import './Hero.css'
import Typed from 'typed.js';
import Button from './Button';

const Hero = () => {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed('.magic-words', {
      strings: [
            'Artwork.',  
            'Favourite screenshot.', 
            'Design.',
            'Creation.',
            'Photoshop Masterpiece.',
            'Favourite meme.',
            'Best friend\'s cat pictures.'
      ],
      typeSpeed: 70,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div class="main">

        <div class="info">
            <h1>Share your
                <br/>
                <span class="magic-words">Creations.</span>
            </h1>
            <p>Post and share anything you want! To your friends, family, random people online... anything and anyone you can think of.</p>
            <Button />
        </div>

        <svg id="background-cards" width="809" height="955" viewBox="0 0 809 955" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="251" y="205" width="219" height="329" rx="10" fill="#D9D9D9" fill-opacity="0.15"/>
            <rect x="489" y="403" width="224" height="343" rx="10" fill="#D9D9D9" fill-opacity="0.15"/>
            <rect x="150" y="552" width="320" height="142" rx="10" fill="#D9D9D9" fill-opacity="0.15"/>
            <rect x="489" y="769" width="320" height="186" rx="10" fill="#D9D9D9" fill-opacity="0.15"/>
            <rect width="320" height="187" rx="10" fill="#D9D9D9" fill-opacity="0.15"/>
            <rect x="47" y="205" width="186" height="186" rx="10" fill="#D9D9D9" fill-opacity="0.15"/>
            <rect x="489" y="277" width="137" height="113" rx="10" fill="#D9D9D9" fill-opacity="0.15"/>
            <rect x="251" y="719" width="219" height="167" rx="10" fill="#D9D9D9" fill-opacity="0.15"/>
        </svg>

    </div>
  )
}

export default Hero
