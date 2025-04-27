import { createContext, useRef, useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import CanvasArea from "./Components/Container/CanvasArea";
import { Route, Router, Routes,BrowserRouter } from "react-router-dom";
import SignUp from "./Components/signUpForm/SignUp";
import SignIn from "./Components/signInForm/SignIn";
export const strokeColorContext = createContext(null);

function App() {
  const [tools, setTool] = useState([{name:"",uniqueId:""}]);
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [sheetColor, setSheetColor] = useState("#ffffff");
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedShape, setSelectedShape] = useState(null);
  const [idArray,setIdArray] = useState([]);

  const [lines, setLines] = useState([{points:[],strokeColor:'',strokeWidth:'',mode:'',id:''}]);

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
          setLines,
          setSelectedShape,
          selectedShape,
          setIdArray,
          idArray
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
          <Route path="/signin" element={<SignIn />} />
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