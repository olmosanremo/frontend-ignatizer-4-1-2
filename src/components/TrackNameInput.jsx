// TrackNameInput.jsx
import React from 'react';

const TrackNameInput = ({ trackName, setTrackName }) => {
    return (
        <input
            className="name-input-field"
            type="text"
            value={trackName}
            onChange={(e) => setTrackName(e.target.value)}
            placeholder="Enter track name"
        />
    );
};

export default TrackNameInput;
