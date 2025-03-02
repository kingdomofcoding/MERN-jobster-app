// AudioPlayer.js
import React, { useEffect } from "react";
import "./ferrari.css";
import FerrariAudio from "../../assets/ferrari.mp3";
const FerrariAudioPlayer = () => {
  useEffect(() => {
    const audio = document.getElementById("background-audio");
    audio.play();
  }, []);

  return (
    <audio id="background-audio" autoPlay>
      <source src={FerrariAudio} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default FerrariAudioPlayer;
