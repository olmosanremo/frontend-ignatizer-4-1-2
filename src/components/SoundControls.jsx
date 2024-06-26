// // SoundControls.jsx
// import React from 'react';
//
// const SoundControls = ({ isPlaying, playPauseSound, stopSound, handleSave, setIsDrawingListVisible }) => {
//     return (
//         <div>
//             <button className="logo-btn" onClick={() => setIsDrawingListVisible(true)}>Logo Button</button>
//             <button onClick={playPauseSound}>{isPlaying ? "Pause Sound" : "Play Sound"}</button>
//             <button onClick={stopSound}>Stop Sound</button>
//             <button onClick={handleSave}>Save Drawing</button>
//         </div>
//     );
// };
//
// export default SoundControls;

import React from 'react';
import './componentsStyle/styles.css'; // Stelle sicher, dass die styles.css Datei korrekt importiert wird

const SoundControls = ({ isPlaying, playPauseSound, stopSound, handleSave, setIsDrawingListVisible }) => {
    return (
        <div className="soundControls">
            <button className="custom-button logo-btn" onClick={() => setIsDrawingListVisible(true)}>Logo Button</button>
            <div className="intruder-sound-controls"></div>
            <button className="custom-button" onClick={playPauseSound}>
                {isPlaying ? "Pause Sound" : "Play Sound"}
            </button>
            <button className="custom-button" onClick={stopSound}>Stop Sound</button>
            <button className="custom-button" onClick={handleSave}>Save Drawing</button>
        </div>
    );
};

export default SoundControls;

