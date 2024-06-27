// // EraseClearButtons.jsx
// import React from 'react';
//
// const EraseClearButtons = ({ clearDrawing, toggleEraseMode, isErasing }) => {
//     return (
//         <div className="save-clear">
//             <button onClick={clearDrawing}>Clear Drawing</button>
//             <button onClick={toggleEraseMode}>{isErasing ? "Switch to Draw" : "Switch to Erase"}</button>
//         </div>
//     );
// };
//
// export default EraseClearButtons;

// import React from 'react';
// import './componentsStyle/styles.css'; // Stelle sicher, dass die styles.css Datei korrekt importiert wird
//
// const EraseClearButtons = ({ clearDrawing, toggleEraseMode, isErasing }) => {
//     return (
//         <div className="save-clear">
//             <button className="custom-button" onClick={clearDrawing}>Clear Drawing</button>
//             <button className="custom-button" onClick={toggleEraseMode}>
//                 {isErasing ? "Switch to Draw" : "Switch to Erase"}
//             </button>
//         </div>
//     );
// };
//
// export default EraseClearButtons;




// EraseClearButtons.jsx
import React from 'react';
import '../App.css';
import eraseImage from '../img/erase.png';
import clearImage from '../img/clear.png';
import writeImage from '../img/write.png';

const SaveClearButtons = ({ clearDrawing, toggleEraseMode, isErasing }) => {
    return (
        <div className="save-clear">
            <button className="custom-button clear-button" onClick={clearDrawing} style={{ backgroundImage: `url(${clearImage})` }}>

            </button>
            <button
                className="custom-button toggle-button"
                onClick={toggleEraseMode}
                style={{ backgroundImage: isErasing ? `url(${writeImage})` : `url(${eraseImage})` }}
            >
            </button>
        </div>
    );
};

export default SaveClearButtons;
