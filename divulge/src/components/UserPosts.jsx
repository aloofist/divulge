import React, { useState, useEffect} from 'react'
import './UserPosts.css'

const UserPosts = () => {

  const [images, setImages] = useState([]);

  //apparently this fetches images from backend so yeah
  useEffect(() => {
      fetch('/api/images') //replace the path with the actual path to the image database
        .then(response => response.json())
        .then(data => setImages(data))
        .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className='main-gallery your-posts'>
      <p>Your Posts
        <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.216 5.96L0.256 1.256L1.072 0.584L4.528 4.712L7.984 0.584L8.8 1.256L4.864 5.96H4.216Z" fill="white"/>
        </svg>
      </p> 
      
      <div className="gallery">

        {images.map((imageUrl, index) => (
            <div key={index} className='gallery-item'>
              <img src={imageUrl} alt={`Gallery item ${index}`} />
            </div>
        ))}

        <div className='gallery-item'>
          <img src="https://shorturl.at/hmpL2" alt="" />
        </div>

        <div className='gallery-item'>
          <img src="https://shorturl.at/hmpL2" alt="" />
        </div>

        <div className='gallery-item'>
          <img src="https://shorturl.at/hmpL2" alt="" />
        </div>
        <div className='gallery-item'>
          <img src="https://shorturl.at/hmpL2" alt="" />
        </div>

        <div className='gallery-item'>
          <img src="https://shorturl.at/hmpL2" alt="" />
        </div>
    </div>
    </div>
  )
}

export default UserPosts
