import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Navbar } from "@/components";
import Link from "next/link";
import { signIn } from "next-auth/react";

const Login = () => {
  //for blobs
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

  const animatedBlob = useSpring({
    left: cursorPosition.x,
    top: cursorPosition.y,
    config: { tension: 210, friction: 200 },
  });

  return (
    <>
      <Navbar />
      <div id="blur"></div>
      <div className="login">
        <animated.div
          id="blob"
          style={{
            position: "absolute",
            ...animatedBlob,
          }}
        ></animated.div>
        <h1>
          Login to <span id="divulge-login">Divulge.</span>
        </h1>
        {/* 
        <p>Username</p>
        <input type="text" id="email" placeholder="e.g. aloofist" />
        <p>Password</p>
        <input
          type="text"
          id="password"
          placeholder="It should be at least 8 characters long"
        /> */}

        <button onClick={() => signIn("discord")}>Login with Discord</button>
        <p style={{ fontStyle: "italic" }}>
          Don't have an account?
          <Link href="/signup"> Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
