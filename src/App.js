// src/App.js

import React, { useState, useEffect } from 'react';
import DrumPad from './DrumPad';
import './App.css';

const drumPads = [
  { keyTrigger: 'Q', id: 'Heater-1', clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { keyTrigger: 'W', id: 'Heater-2', clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { keyTrigger: 'E', id: 'Heater-3', clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { keyTrigger: 'A', id: 'Heater-4', clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { keyTrigger: 'S', id: 'Clap', clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { keyTrigger: 'D', id: 'Open-HH', clip: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { keyTrigger: 'Z', id: 'Kick-n-Hat', clip: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { keyTrigger: 'X', id: 'Kick', clip: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { keyTrigger: 'C', id: 'Closed-HH', clip: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
];

function App() {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();
      const audio = document.getElementById(key);
      if (audio) {
        const button = audio.parentElement;
        button.click();
        setDisplay(button.id); // Update the display with the id of the triggered drum pad
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">
        {display}
      </div>
      <div className="drum-pads-container">
        {drumPads.map((pad) => (
          <DrumPad 
            key={pad.keyTrigger} 
            keyTrigger={pad.keyTrigger} 
            id={pad.id} 
            clip={pad.clip} 
            setDisplay={setDisplay} // Pass the setDisplay function to DrumPad
          />
        ))}
      </div>
    </div>
  );
}

export default App;
