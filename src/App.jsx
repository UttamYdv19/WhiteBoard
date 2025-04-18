import { useRef, useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import CanvasArea from "./Components/Container/CanvasArea";

function App() {
  const [tools, setTool] = useState(['pen']);
  const [strokeWidth,setStrokeWidth]= useState(5);
  const stageRef = useRef(null);


  return (
    <>
      <div className="flex flex-col">
        <Home setTool={setTool} tools={tools} strokeWidth={strokeWidth} setStrokeWidth={setStrokeWidth} stageRef={stageRef}/>
        <div className="flex-1">
          <CanvasArea tools={tools}  strokeWidth={strokeWidth} stageRef={stageRef}/>
        </div>
      </div>
    </>
  );
}

export default App;
