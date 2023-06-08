import React, { useState } from "react";
import "./App.css";

function App() {
  const [music, setMusic] = useState(null);

  const playMusic = () => {
    if (!music) {
      let audio = new Audio("images/music.mp3");
      audio.muted = false;
      audio.play();
      setMusic(audio);
    }
  };

  return (
    <div className="title" onClick={playMusic}>
      欢迎来到皮皮小发的个人网站
    </div>
  );
}

export default App;
