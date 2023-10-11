import React from "react";

export default function Meme() {
  return (
    <main className="form">
      <input
        className="form--inout"
        type="text"
        placeholder="Upper Text"
      ></input>
      <input
        className="form--input"
        type="text"
        placeholder="Lower Text"
      ></input>
      <button className="form--button">Get a new meme image 🖼</button>
    </main>
  );
}
