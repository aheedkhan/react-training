import React from "react";
import MemeLogo from "/public/images/troll-face.png";

export default function Header() {
  return (
    <nav>
      <img className="nav--image" src={MemeLogo} />
      <h2 className="nav--title">Meme Generator</h2>
      <h4 className="nav--content">React Course - Project 3</h4>
    </nav>
  );
}
