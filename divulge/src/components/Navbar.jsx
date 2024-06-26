import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  document.querySelectorAll(".words").forEach(words => {
    words.onmouseover = event => {
        let iterations = 0;

        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if(index  < iterations) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

            if(iterations >= 9) clearInterval(interval);
            iterations += 1 / 3;
        }, 30);
    };
  });

  return (
    <div class="navbar noselect">
        <div class="navbar-wrapper">
            

              <div id="divulge">
                <img src="/divulge_logo_white.svg" alt="Logo" id="logo" onClick={handleHamburgerClick}/>
                <a id="divulge" href="#">Divulge.</a>
              </div>
              
            <ul>
                <a href='#user'>Post</a>
                <a href='#gallery'>Gallery</a>
                <a href='#generate'>Generate</a>
                <a href='#signup' id='user-icon'>
                  <i class="ri-checkbox-blank-circle-line" ></i>
                  </a>
            </ul>
            <a id='hamburger' onClick={handleHamburgerClick}>
              <img src="/hamburger.svg" alt="hamburger"/>
              </a>
        </div>
        
        <div id="myModal" className={`modal ${isModalOpen ? 'show' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>X</span>
                <a href="#user">
                  <p className='words' data-value="POST">POST</p>
                </a>
                <a href="#gallery">
                  <p className='words' data-value="GALLERY">GALLERY</p>
                </a>
                <a href="#generate">
                  <p className='words' data-value="GENERATE">GENERATE</p>
                </a>
                <a href="#signup">
                  <p className='words' data-value="SIGN/UP/LOGIN">SIGN/UP</p>
                </a>
                <a href="https://discord.gg/HHuDE58QYy" target='_'>
                  <p className='words' data-value="ASK">ASK</p>
                </a>

                <div className="linkz">
                  <a href="https://discord.com/invite/HHuDE58QYy" target="_"><i class="ri-discord-fill"></i></a>
                  <a href="https://twitter.com/aloofistprojs" target="_"><i class="ri-twitter-fill"></i></a>
                  <a href="https://github.com/aloofist" target="_"><i class="ri-github-fill" ></i></a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar
