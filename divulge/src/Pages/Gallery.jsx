import React from 'react'
import { Navbar, ExploreGallery, MainGallery } from '../components'
import './Gallery.css'

const Gallery = () => {
  return (
    <>
    <div id="gallery-blob"></div>
    <Navbar/>
    <ExploreGallery/>
    <MainGallery/>
    </>
  )
}

export default Gallery
