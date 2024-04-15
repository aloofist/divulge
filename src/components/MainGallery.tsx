import React, { useState, useEffect } from "react";
import Link from "next/link";

const MainGallery = () => {
  const [images, setImages] = useState([]);

  //apparently this fetches backend so yeah
  useEffect(() => {
    fetch("/api/images") //replace the path with the actual path to the image database
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <div className="main-gallery">
      <p>
        Recent
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.216 5.96L0.256 1.256L1.072 0.584L4.528 4.712L7.984 0.584L8.8 1.256L4.864 5.96H4.216Z"
            fill="white"
          />
        </svg>
      </p>

      <div className="gallery">
        {images.map((imageUrl, index) => (
          <div key={index} className="gallery-item">
            <Link href="/post">
              <img src={imageUrl} alt={`Gallery item ${index}`} />
            </Link>
          </div>
        ))}

        <div className="gallery-item">
          <Link href="/post">
            <img
              src="https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg"
              alt=""
            />
          </Link>
        </div>

        <div className="gallery-item">
          <Link href="/post">
            <img
              src="https://i.pinimg.com/564x/4f/32/8a/4f328a8851d8f8de2311261fae488c28.jpg"
              alt=""
            />
          </Link>
        </div>

        <div className="gallery-item">
          <Link href="/post">
            <img
              src="https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="gallery-item">
          <Link href="/post">
            <img
              src="https://i.pinimg.com/564x/02/ce/e9/02cee96c8bafe5407d9eca32d52f8ba8.jpg"
              alt=""
            />
          </Link>
        </div>

        <div className="gallery-item">
          <Link href="/post">
            <img src="./divulge_logo.jpg" alt="" />
          </Link>
        </div>

        <div className="gallery-item">
          <Link href="/post">
            <img
              src="https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg"
              alt=""
            />
          </Link>
        </div>

        <div className="gallery-item">
          <Link href="/post">
            <img
              src="https://i.pinimg.com/564x/4f/32/8a/4f328a8851d8f8de2311261fae488c28.jpg"
              alt=""
            />
          </Link>
        </div>

        <div className="gallery-item">
          <Link href="/post">
            <img
              src="https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="gallery-item">
          <Link href="/post">
            <img
              src="https://i.pinimg.com/564x/02/ce/e9/02cee96c8bafe5407d9eca32d52f8ba8.jpg"
              alt=""
            />
          </Link>
        </div>

        <div className="gallery-item">
          <Link href="/post">
            <img src="./divulge_logo.jpg" alt="" />
          </Link>
        </div>

        <div className="gallery-item">
          <Link href="/post">
            <img
              src="https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg"
              alt=""
            />
          </Link>
        </div>

        <div className="gallery-item">
          <Link href="/post">
            <img
              src="https://i.pinimg.com/564x/4f/32/8a/4f328a8851d8f8de2311261fae488c28.jpg"
              alt=""
            />
          </Link>
        </div>

        <div className="gallery-item">
          <Link href="/post">
            <img
              src="https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="gallery-item">
          <Link href="/post">
            <img
              src="https://i.pinimg.com/564x/02/ce/e9/02cee96c8bafe5407d9eca32d52f8ba8.jpg"
              alt=""
            />
          </Link>
        </div>

        <div className="gallery-item">
          <Link href="/post">
            <img src="./divulge_logo.jpg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainGallery;