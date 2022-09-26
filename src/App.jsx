import { useEffect, useState } from "react";

import { getSquares } from "./api/getSquares";
import Square from "./components/square/Square";
import HoverList from "./components/hoverList/HoverList";
import GameMode from "./components/gameMode/GameMode";

import "./App.css";

function App() {
  const [modeVariables, setModeVariables] = useState([]);
  const [selectedFields, setSelectedFields] = useState([]);
  const [selectedMode, setSelectedMode] = useState("Easy");
  const [fieldsList, setFieldsList] = useState([]);
  const [isStart, setIsStart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const configList = () => {
    if (modeVariables.length > 0) {
      const fields = [];
      const selectedField = modeVariables?.find(
        (el) => el.name === selectedMode
      )?.field;

      for (let i = 1; i <= selectedField; i++) {
        fields.push({
          row: Math.ceil(i / 5),
          col: i % 5 === 0 ? 5 : i - Math.floor(i / 5) * 5,
        });
      }
      setFieldsList(fields);
    }
  };

  const handleSelectedMode = (mode) => {
    setSelectedMode(mode);
    setIsStart(false);
  };

  useEffect(() => {
    getSquares(setModeVariables, setIsLoading);
  }, []);

  useEffect(() => {
    configList();
    setSelectedFields([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMode, modeVariables]);

  return (
    <div className="App">
      {!isLoading ? (
        <>
          <div>
            <GameMode
              selectedMode={selectedMode}
              handleSelectedMode={handleSelectedMode}
              modeVariables={modeVariables}
              setIsStart={setIsStart}
            />
            <div className="fields-wrapper">
              {fieldsList.map((field, idx) => (
                <Square
                  key={idx}
                  isStart={isStart}
                  field={field}
                  selectedFields={selectedFields}
                  setSelectedFields={setSelectedFields}
                />
              ))}
            </div>
          </div>
          <HoverList selectedFields={selectedFields} />
        </>
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
}

export default App;
