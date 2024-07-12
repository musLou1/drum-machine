// src/DrumPad.js

import React from 'react';

const DrumPad = ({ keyTrigger, id, clip, setDisplay }) => {
  const playSound = () => {
    const audio = document.getElementById(keyTrigger);
    audio.currentTime = 0; // Reset the audio to the beginning
    audio.play();
    setDisplay(id); // Update the display with the id of the triggered drum pad
  };

  return (
    <button className="drum-pad" id={id} onClick={playSound}>
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={clip}></audio>
    </button>
  );
};

export default DrumPad;
