import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div class="navbar noselect">
        <div class="navbar-wrapper">
            <a id="divulge" href="#"><img src="/divulge_logo_white.svg" alt="Logo" id="logo"/>Divulge.</a>
            <ul>
                <a href="#user">
                <i class="ri-add-box-line"></i>
                </a>
                <a href='#gallery'>Gallery</a>
                <a href='#generate'>Generate</a>
                <a href='#signup' id='user-icon'>
                  <i class="ri-checkbox-blank-circle-line" ></i>
                  </a>
            </ul>
            <a href="" id='hamburger'>
              <img src="/hamburger.svg" alt="hamburger"/>
              </a>
        </div>
    </div>
  )
}

export default Navbar
