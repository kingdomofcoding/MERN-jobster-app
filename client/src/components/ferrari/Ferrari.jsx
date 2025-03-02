import React, { useEffect } from "react";
import "./ferrari.css";
import FerrariAudio from "../../assets/ferrari.mp3";

const FerrariAudioPlayer = () => {
  useEffect(() => {
    const audio = document.getElementById("background-audio");
    // Optional: Add event listener to auto-play when user interacts with the page
    document.body.addEventListener("click", () => {
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    });
  }, []);

  return (
    <div>
      <button
        onClick={() => document.getElementById("background-audio").play()}
        className="link-btn"
      >
        <span className="text">Play Music</span>
      </button>
      <audio id="background-audio">
        <source src={FerrariAudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default FerrariAudioPlayer;
