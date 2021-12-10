import React, { useRef, useState } from "react";
import "./Music.scss";

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      audioRef.current.play();
    } else {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  };

  return (
    <div className="Music">
      <button onClick={toggleAudio}>
        <div 
          className={`music-icon-overlay ${isPlaying ? "" : "off"}`}
        />
        <img 
          src="https://res.cloudinary.com/dmtn5fbdu/image/upload/v1639107629/skye%2Btyler/transparent-bg-music-icon.png"
          alt="music icon"
        />
      </button>
      <audio ref={audioRef}>
        <source
          src="https://res.cloudinary.com/dmtn5fbdu/video/upload/v1639103119/skye%2Btyler/Theme_From_New_York_New_York_2008_Remastered.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
};

export default Music;
