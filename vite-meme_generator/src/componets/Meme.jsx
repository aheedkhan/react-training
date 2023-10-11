import React from "react";

export default function Meme() {
  return (
    <main>
      <input
        className="input--box"
        type="text"
        placeholder="Upper Text"
      ></input>
      <input
        className="input--box"
        type="text"
        placeholder="Lower Text"
      ></input>
      <button className="meme-btn">Get a new meme image 🖼</button>
    </main>
  );
}
