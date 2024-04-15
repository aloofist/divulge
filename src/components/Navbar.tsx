import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    document.querySelectorAll(".words").forEach((words) => {
      //@ts-expect-error sdfhasdhfjasd
      words.onmouseover = (event) => {
        let iterations = 0;

        const interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter: any, index: any) => {
              if (index < iterations) {
                return event.target.dataset.value[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iterations >= 9) clearInterval(interval);
          iterations += 1 / 3;
        }, 30);
      };
    });
  }, []);

  return (
    <div className="navbar noselect">
      <div className="navbar-wrapper">
        <div id="divulge">
          <img
            src="/divulge_logo_white.svg"
            alt="Logo"
            id="logo"
            onClick={handleHamburgerClick}
          />
          <Link id="divulge" href="/">
            Divulge.
          </Link>
        </div>

        <ul>
          <Link href="/user">Post</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/generate">Generate</Link>
          <Link href="/signup" id="user-icon">
            <i className="ri-checkbox-blank-circle-line"></i>
          </Link>
        </ul>
        <button id="hamburger" onClick={handleHamburgerClick}>
          <img src="/hamburger.svg" alt="hamburger" />
        </button>
      </div>

      <div id="myModal" className={`modal ${isModalOpen ? "show" : ""}`}>
        <div className="modal-content">
          <span className="close" onClick={handleCloseModal}>
            X
          </span>
          <Link href="/user">
            <p className="words" data-value="POST">
              POST
            </p>
          </Link>
          <Link href="/gallery">
            <p className="words" data-value="GALLERY">
              GALLERY
            </p>
          </Link>
          <Link href="/generate">
            <p className="words" data-value="GENERATE">
              GENERATE
            </p>
          </Link>
          <Link href="/signup">
            <p className="words" data-value="SIGN/UP">
              SIGN/UP
            </p>
          </Link>
          <Link href="https://github.com/aloofist" target="_">
            <p className="words" data-value="GITHUB">
              GITHUB
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
