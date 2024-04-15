import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div class="footer">
      <img src="/divulge_logo_white.svg" alt="Logo"/>
        <h2>Divulge.</h2>
        <p>© 2024 - Aloofist -  <i><small>(my backend teammate disappeared)</small></i> | All rights reserved.</p>
        <div style={{display: 'flex', gap: '1rem'}}>
          <a style={{color: "white"}} href="https://discord.com/invite/HHuDE58QYy" target="_"><small class="ri-discord-fill"></small></a>
          <a style={{color: "white"}} href="https://twitter.com/aloofistprojs" target="_"><small class="ri-twitter-fill"></small></a>
          <a style={{color: "white"}} href="https://github.com/aloofist" target="_blank"><small class="ri-github-fill" ></small></a>
        </div>
    </div>
  )
}

export default Footer
