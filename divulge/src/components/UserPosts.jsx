import React from 'react'

const UserPosts = () => {
  return (
    <div className='main-gallery'>
      <p>Your Posts
        <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.216 5.96L0.256 1.256L1.072 0.584L4.528 4.712L7.984 0.584L8.8 1.256L4.864 5.96H4.216Z" fill="white"/>
        </svg>
      </p> 
      
      <div className="gallery">

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

        <div className='gallery-item'>
          <img src="https://shorturl.at/hmpL2" alt="" />
        </div>
    </div>
    </div>
  )
}

export default UserPosts
