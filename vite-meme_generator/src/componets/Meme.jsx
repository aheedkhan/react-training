import React from "react";
import memesData from "/src/memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState("https://i.imgflip.com/1ur9b0.jpg");

  function getMemeUrl() {
    const memeArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    setMeme((prev) => (prev = memeArray[randomNumber].url));
  }

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
      <button onClick={getMemeUrl} className="form--button">
        Get a new meme image 🖼
      </button>
      <img className="meme--image" src={meme} />
    </main>
  );
}
