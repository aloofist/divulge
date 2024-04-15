import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Navbar, Footer, MainGallery } from "@/components";
import mediumZoom from "medium-zoom";

const Post = () => {
  useEffect(() => {
    const zoom = mediumZoom("[data-zoomable]", {
      background: "rgba(0, 0, 0, 0.8)",
    });

    // cleanup function to detach the zoom effect
    return () => {
      zoom.detach();
    };
  }, []);

  //for cursor

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const x = event.clientX + window.scrollX;
      const y = event.clientY + window.scrollY;

      setCursorPosition({ x, y });
    };

    window.addEventListener("pointermove", handleMouseMove);

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);

  const animatedCircle = useSpring({
    left: cursorPosition.x,
    top: cursorPosition.y,
    config: { tension: 700, friction: 100 },
  });

  const animatedBlob = useSpring({
    left: cursorPosition.x,
    top: cursorPosition.y,
    config: { tension: 210, friction: 200 },
  });

  return (
    <>
      <Navbar />
      <div className="post-card">
        <animated.div
          id="circle"
          style={{
            position: "absolute",
            ...animatedCircle,
          }}
        ></animated.div>

        <animated.div
          id="blob"
          style={{
            position: "absolute",
            ...animatedBlob,
          }}
        ></animated.div>

        <img
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          alt=""
          data-zoomable
        />

        <div className="post-info">
          <h1>Celestial Reverie</h1>
          <p>
            <i>by</i>
            <i id="username">
              <b>Username</b>
            </i>

            <button>
              <i className="ri-discord-fill"></i>
              <b id="discord-username">discord</b>
            </button>

            <i>• 20h ago</i>
          </p>
          <h2>
            In the heart of a forgotten forest, where moonbeams dance upon
            dew-kissed leaves, lies an ancient stone circle. Within its
            moss-covered arches, ethereal beings gather under the silver glow of
            a crescent moon. Their luminous wings unfurl, casting delicate
            shadows on the weathered stones.
          </h2>
        </div>

        <span className="divider"></span>

        <div className="comment-section">
          <div className="commenter">
            {/* <p>@You</p> */}
            <input type="text" placeholder="Write a comment..." />
          </div>

          <span className="divider"></span>
          <div className="comment-section1">
            <div className="comment">
              <h4>@ProArtist58</h4>
              <p>Wow, I'm commenting on a post! Insane art man!</p>
            </div>
            <div className="comment">
              <h4>@StardustDreamer</h4>
              <p>
                This piece transports me to a realm where moonlight dances with
                magic.
              </p>
            </div>
            <div className="comment">
              <h4>@DivulgerFan</h4>
              <p>
                The way the colors blend feels like stardust settling on my
                soul.{" "}
              </p>
            </div>
            <div className="comment">
              <h4>@Kreekcraft</h4>
              <p>
                I can almost hear the celestial lute and taste the aurora
                elixir. Enchanting!{" "}
              </p>
            </div>
            <div className="comment">
              <h4>@TimelessWanderer</h4>
              <p>Moonbeams stitched into dreams—this is where we belong.</p>
            </div>
          </div>
        </div>

        <span className="divider"></span>
      </div>
      <MainGallery />
      <Footer />
    </>
  );
};

export default Post;
