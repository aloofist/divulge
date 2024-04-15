import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div class="footer">
      <img src="/divulge_logo_white.svg" alt="Logo"/>
        <h2>Divulge.</h2>
        <p>© 2024 - Aloofist (my backend teammate disappeared) | All rights reserved.</p>
        <div style={{display: 'flex', gap: '1rem'}}>
          <a style={{color: "white"}} href="https://discord.com/invite/HHuDE58QYy"><i class="ri-discord-fill"></i></a>
          <a style={{color: "white"}} href="https://twitter.com/aloofistprojs"><i class="ri-twitter-fill"></i></a>
          <a style={{color: "white"}} href="https://github.com/aloofist"><i class="ri-github-fill"></i></a>
        </div>
    </div>
  )
}

export default Footer
