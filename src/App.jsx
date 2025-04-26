import { createContext, useRef, useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import CanvasArea from "./Components/Container/CanvasArea";
import { Route, Router, Routes,BrowserRouter } from "react-router-dom";
import SignUp from "./Components/signUpForm/SignUp";
export const strokeColorContext = createContext(null);

function App() {
  const [tools, setTool] = useState([]);
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [sheetColor, setSheetColor] = useState("#ffffff");
  const [selectedItem, setSelectedItem] = useState('');
  const [lines, setLines] = useState([{points:[],strokeColor:'',strokeWidth:'',mode:''}]);

  const stageRef = useRef(null);

  return (
    <>
      <strokeColorContext.Provider
        value={{
          strokeColor,
          setStrokeColor,
          sheetColor,
          setSheetColor,
          selectedItem,
          setSelectedItem,
          tools,
          setTool,
          strokeWidth,
          setStrokeWidth,
          stageRef,
          lines,
          setLines
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
        <div className="flex flex-col">
          <Home />
          <div className="flex-1">
            <CanvasArea />
          </div>
        </div>}
        />
          <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter> 
      </strokeColorContext.Provider>
    </>
  );
}

export default App;

{/* <div className="flex flex-col">
  <Home />
  <div className="flex-1">
    <CanvasArea />
  </div>
  <SignUp/>
</div> */}