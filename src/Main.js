import React from "react";
import memeData from "./Data.js";

export default function Main() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  function getMemeImage() {
    const memeArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }
  console.log(meme);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <div className="main-container">
      <form className="input-box">
        <input
          type="text"
          placeholder="top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </form>
      <div className="sub-container">
        <button onClick={getMemeImage}>Get a new meme image </button>
        <div className="meme">
          <img src={meme.randomImage} />
          <h2 className="top-text">{meme.topText}</h2>
          <h2 className="bottom-text">{meme.bottomText}</h2>
        </div>
      </div>
    </div>
  );
}
