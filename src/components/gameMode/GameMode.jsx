import React from "react";

import "./GameMode.css";

const GameMode = ({
  selectedMode,
  handleSelectedMode,
  modeVariables,
  setIsStart,
}) => {
  return (
    <div>
      <select
        style={{ margin: "10px 0 20px 0" }}
        value={selectedMode}
        onChange={(e) => handleSelectedMode(e.target.value)}
      >
        {modeVariables.map((variable, idx) => (
          <option key={idx} value={variable.name}>
            {variable.name}
          </option>
        ))}
      </select>
      <button type="button" className="start-button" onClick={() => setIsStart(true)}>
        START
      </button>
    </div>
  );
};

export default GameMode;
