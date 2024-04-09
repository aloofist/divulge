import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div class="navbar">
        <div class="navbar-wrapper">
            <h1>Divulge.</h1>
            <ul>
                <a href='#gallery'>Gallery</a>
                <a href='#generate'>Generate</a>
                <a href='#'>Info</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
