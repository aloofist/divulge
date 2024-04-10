import React from 'react'
import { Navbar, ExploreGallery, MainGallery, Footer } from '../components'
import './Gallery.css'

const Gallery = () => {

  const blob = document.getElementById("gallery-blob");

  document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 20000, fill: "forwards"});
};

  return (
    <>
    <div id="gallery-blob"></div>
    <Navbar/>
    <ExploreGallery/>
    <MainGallery/>
    <Footer/>
    </>
  )
}

export default Gallery
