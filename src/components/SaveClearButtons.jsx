// // SaveClearButtons.jsx
// import React from 'react';
//
// const SaveClearButtons = ({ clearDrawing, toggleEraseMode, isErasing }) => {
//     return (
//         <div className="save-clear">
//             <button onClick={clearDrawing}>Clear Drawing</button>
//             <button onClick={toggleEraseMode}>{isErasing ? "Switch to Draw" : "Switch to Erase"}</button>
//         </div>
//     );
// };
//
// export default SaveClearButtons;

import React from 'react';
import './componentsStyle/styles.css'; // Stelle sicher, dass die styles.css Datei korrekt importiert wird

const SaveClearButtons = ({ clearDrawing, toggleEraseMode, isErasing }) => {
    return (
        <div className="save-clear">
            <button className="custom-button" onClick={clearDrawing}>Clear Drawing</button>
            <button className="custom-button" onClick={toggleEraseMode}>
                {isErasing ? "Switch to Draw" : "Switch to Erase"}
            </button>
        </div>
    );
};

export default SaveClearButtons;


