import { createContext, useRef, useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import CanvasArea from "./Components/Container/CanvasArea";
export const strokeColorContext = createContext(null);

function App() {
  const [tools, setTool] = useState([]);
  const [strokeWidth, setStrokeWidth] = useState(5);
  const stageRef = useRef(null);
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [sheetColor, setSheetColor] = useState("#ffffff");


  return (
    <>
      <strokeColorContext.Provider value={{ strokeColor, setStrokeColor , sheetColor,setSheetColor}}>
        <div className="flex flex-col">
          <Home
            setTool={setTool}
            tools={tools}
            strokeWidth={strokeWidth}
            setStrokeWidth={setStrokeWidth}
            stageRef={stageRef}
          />
          <div className="flex-1">
            <CanvasArea
              tools={tools}
              strokeWidth={strokeWidth}
              stageRef={stageRef}
            />
          </div>
        </div>
      </strokeColorContext.Provider>
    </>
  );
}

export default App;
