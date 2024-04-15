import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <Link href="/gallery">
      <button className="special-button ">head to the gallery</button>
    </Link>
  );
};

export default Button;
