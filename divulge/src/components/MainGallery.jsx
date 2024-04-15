import React, { useState, useEffect} from 'react'
import './MainGallery.css'

const MainGallery = () => {

 const [images, setImages] = useState([]);

  //apparently this fetches backend so yeah
  useEffect(() => {
      fetch('/api/images') //replace the path with the actual path to the image database
        .then(response => response.json())
        .then(data => setImages(data))
        .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className='main-gallery'>
      <p>Recent
        <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.216 5.96L0.256 1.256L1.072 0.584L4.528 4.712L7.984 0.584L8.8 1.256L4.864 5.96H4.216Z" fill="white"/>
        </svg>
      </p> 
      
      <div className="gallery">

        {images.map((imageUrl, index) => (
            <div key={index} className='gallery-item'>
              <a href="#post">

                <img src={imageUrl} alt={`Gallery item ${index}`} />
              
            </a>
          </div>
        ))}

        <div className='gallery-item'>
          <a href="#post">
            <img src="https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg" alt="" />
          </a>
        </div>

        <div className='gallery-item'>
          <a href="#post">
            <img src="https://i.pinimg.com/564x/4f/32/8a/4f328a8851d8f8de2311261fae488c28.jpg" alt="" />
          </a>
        </div>

        <div className='gallery-item'>
          <a href="#post">
            <img src="https://shorturl.at/alrHV" alt="" />
          </a>
        </div>
        <div className='gallery-item'>
          <a href="#post">
            <img src="https://storage.googleapis.com/pod_public/1300/150711.jpg" alt="" />
          </a>
        </div>

        <div className='gallery-item'>
          <a href="#post">
            <img src="./divulge_logo.jpg" alt="" />
          </a>
        </div>

        <div className='gallery-item'>
          <a href="#post">
            <img src="https://i.pinimg.com/600x/e4/a6/bf/e4a6bf2730e133f8281faddcf681ca68.jpg" alt="" />
          </a>
        </div>

        <div className='gallery-item'>
          <a href="#post">
            <img src="https://i.imgur.com/0AIh5nN.png" alt="" />
          </a>
        </div>

        <div className='gallery-item'>
          <a href="#post">
            <img src="https://sparksgallery.com/wp-content/uploads/2023/03/mayur-deshpande-zZPeoLxLRyM-unsplash.jpg" alt="" />
          </a>
        </div>
        <div className='gallery-item'>
          <a href="#post">
            <img src="https://shorturl.at/gwHLO" alt="" />
          </a>
        </div>

        <div className='gallery-item'>
          <a href="#post">
            <img src="https://i.pinimg.com/564x/80/77/2b/80772b9c19d3da68d1130ec8d3f5e12a.jpg" alt="" />
          </a>
        </div>

        <div className='gallery-item'>
          <a href="#post">
            <img src="https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg" alt="" />
          </a>
        </div>

        <div className='gallery-item'>
          <a href="#post">
            <img src="https://i.pinimg.com/564x/4f/32/8a/4f328a8851d8f8de2311261fae488c28.jpg" alt="" />
          </a>
        </div>

        <div className='gallery-item'>
          <a href="#post">
            <img src="https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg" alt="" />
          </a>
        </div>
        <div className='gallery-item'>
          <a href="#post">
            <img src="https://i.pinimg.com/564x/02/ce/e9/02cee96c8bafe5407d9eca32d52f8ba8.jpg" alt="" />
          </a>
        </div>

        <div className='gallery-item'>
          <a href="#post">
            <img src="https://i.pinimg.com/736x/34/72/d3/3472d3e9a462deb694d6861d5fda4f41.jpg" alt="" />
          </a>
        </div>

      </div>
    </div>
  )
}

export default MainGallery
