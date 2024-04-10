import React from 'react'
import './Navbar.css'
import logo from '../assets/logo'

const Navbar = () => {
  return (
    <div class="navbar">
        <div class="navbar-wrapper">
            <a id="divulge" href="#"><logo /><img src="../assets/logo" alt="" />Divulge.</a>
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
