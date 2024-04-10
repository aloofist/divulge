import React from 'react'
import './ExploreGallery.css'

const ExploreGallery = () => {
  return (
    <div className='explore-section'>
      <p>Explore</p>
      <div className='explore-categ'>
        <div className='categ-item'>
          <div className='tag-name'>#Portrait</div>
          <img src="https://i.pinimg.com/564x/09/95/ae/0995aea48a274b689c7b05954beffc23.jpg" alt="" />
        </div>
        <div className="categ-item">
          <div className='tag-name'>#Digital</div>
          <img src="https://i.pinimg.com/564x/81/4b/70/814b703bcf9b07e9d0991fa7696f1bc4.jpg" alt="" />
        </div>

        <div className="categ-item">
          <div className='tag-name'>#Landscape</div>
          <img src="https://i.pinimg.com/736x/32/83/e6/3283e6ac94f7eb98e0c0c16b4eb84278.jpg" alt="" />
        </div>

        <div className="categ-item">
          <div className='tag-name'>#Illustration</div>
          <img src="https://i.ytimg.com/vi/Kl_nxxemp4g/maxresdefault.jpg" alt="" />
        </div>

        <div className="categ-item">
          <div className='tag-name'>#Photography</div>
          <img src="https://t.ly/0_rOg" alt="" />
        </div>

        <div className="categ-item">
          <div className='tag-name'>#Memes</div>
          <img src="https://miro.medium.com/v2/resize:fit:1358/1*GI-td9gs8D5OKZd19mAOqA.png" alt="" />
        </div>

        <div className="categ-item">
          <div className='tag-name'>#Creations</div>
          <img src="https://static.tildacdn.com/tild3663-6535-4334-a566-363262633732/__2023-05-19__192934.png" alt="" />
        </div>

      </div>
    </div>
  )
}

export default ExploreGallery
