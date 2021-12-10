import React, { useRef, useState } from "react";
import "./Music.scss";
// import { MdMusicNote as MusicNote } from "react-icons/md";

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

  // const MusicIcon = isPlaying ? <MusicNote /> : <MusicNote className="off" />;

  return (
    <div className="Music">
      <button onClick={toggleAudio}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class={isPlaying ? "" : "off"}
        >
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path>
        </svg>
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
