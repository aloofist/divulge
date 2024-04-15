import React, { useState, useEffect } from "react";
import { Navbar, Footer, CreatePost, UserPosts } from "@/components";
import { useSpring } from "@react-spring/web";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const User = () => {
  const { data: session } = useSession();

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

  if (!session) return <div>You are not logged in</div>;

  return (
    <>
      <Navbar />

      <CreatePost />
      <UserPosts />

      <div className="logout-area">
        <Link href="/">
          <button id="logout-btn" onClick={() => signOut()}>
            Logout <span>- Are you sure?</span>
          </button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default User;
