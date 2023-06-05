import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [music, setMusic] = useState(null)
  const [noHover, setHover] = useState(true)

  const playMusic = () => {
    if (!music) {
      let audio = new Audio('images/music.mp3');
      audio.muted = false;
      audio.play()
      setMusic(audio)
    }

    if (noHover) {
      setHover(false)
    } else {
      setHover(true)
    }
  }

  useEffect(() => {
    console.log(111,2222)
  },[])

  return (
    <div>
      <div className={`box ${noHover ? 'no_hover' : ''}`} onClick={playMusic}>
        <ul className="minbox">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ol className="maxbox">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
    </div>

  );
}

export default App;
