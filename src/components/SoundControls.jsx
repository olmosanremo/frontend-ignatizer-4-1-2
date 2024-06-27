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

// import React from 'react';
// import './componentsStyle/styles.css'; // Stelle sicher, dass die styles.css Datei korrekt importiert wird
//
// const SoundControls = ({ isPlaying, playPauseSound, stopSound, handleSave, setIsDrawingListVisible }) => {
//     return (
//         <div className="soundControls">
//             <button className="custom-button logo-btn" onClick={() => setIsDrawingListVisible(true)}>Logo Button</button>
//             <div className="intruder-sound-controls"></div>
//             <button className="custom-button" onClick={playPauseSound}>
//                 {isPlaying ? "Pause Sound" : "Play Sound"}
//             </button>
//             <button className="custom-button" onClick={stopSound}>Stop Sound</button>
//             <button className="custom-button" onClick={handleSave}>Save Drawing</button>
//         </div>
//     );
// };
//
// export default SoundControls;
//



// // SoundControls.jsx
// import React from 'react';
// import '../App.css'; // Stelle sicher, dass der Pfad zur App.css Datei korrekt ist
// import saveImage from '../../public/save.png';
// import stopImage from '../../public/stop.png';
// import pauseImage from '../../public/pause.png';
// import playImage from '../../public/play.png';
//
// const SoundControls = ({ isPlaying, playPauseSound, stopSound, handleSave, setIsDrawingListVisible }) => {
//     return (
//         <div className="soundControls">
//             <button className="custom-button logo-btn" onClick={() => setIsDrawingListVisible(true)}>Logo Button</button>
//             <button className="custom-button play-pause-button" onClick={playPauseSound} style={{ backgroundImage: `url(${isPlaying ? pauseImage : playImage})` }}>
//                 {isPlaying ? "Pause Sound" : "Play Sound"}
//             </button>
//             <button className="custom-button stop-button" onClick={stopSound} style={{ backgroundImage: `url(${stopImage})` }}>
//                 Stop Sound
//             </button>
//             <button className="custom-button save-button" onClick={handleSave} style={{ backgroundImage: `url(${saveImage})` }}>
//                 Save Drawing
//             </button>
//         </div>
//     );
// };
//
// export default SoundControls;


// SoundControls.jsx
import React from 'react';
import '../App.css';
import saveImage from '../img/save.png';
import stopImage from '../img/stop.png';
import pauseImage from '../img/pause.png';
import playImage from '../img/play.png';
import logoImage from '../img/logoIgna.png';

const SoundControls = ({ isPlaying, playPauseSound, stopSound, handleSave, setIsDrawingListVisible }) => {
    return (
        <div className="soundControls ">
            <button className="custom-button logo-btn hover" onClick={() => setIsDrawingListVisible(true)} style={{ backgroundImage: `url(${logoImage})` }}>
            </button>
            <div className="intruder"></div>
            <button className="custom-button play-pause-button hover" onClick={playPauseSound} style={{ backgroundImage: `url(${isPlaying ? pauseImage : playImage})` }}>
            </button>
            <button className="custom-button stop-button" onClick={stopSound} style={{ backgroundImage: `url(${stopImage})` }}>
            </button>
            <button className="custom-button save-button" onClick={handleSave} style={{ backgroundImage: `url(${saveImage})` }}>
            </button>
        </div>
    );
};

export default SoundControls;



