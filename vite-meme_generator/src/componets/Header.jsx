import React from "react";
import MemeLogo from "/public/images/troll-face.png";

export default function Header() {
  return (
    <nav>
      <img src={MemeLogo} />
      <h2>Meme Generator</h2>
      <h4>React Course - Project 3</h4>
    </nav>
  );
}
