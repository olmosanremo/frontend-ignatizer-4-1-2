
// ColorPanel.jsx
import React from 'react';

const ColorPanel = ({ setColor }) => {
    return (
        <div className="color-panel">
            <button className="lavender-button" onClick={() => setColor('red')} ></button>
            <button className="turquoise-button" onClick={() => setColor('yellow')} ></button>
            <button className="azure-button" onClick={() => setColor('green')} ></button>
        </div>
    );
};

export default ColorPanel;

