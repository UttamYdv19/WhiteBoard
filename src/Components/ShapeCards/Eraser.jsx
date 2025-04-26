// import { strokeColorContext } from "../../App";
// import React, { useContext, useEffect, useRef } from "react";
// import { Line } from "react-konva";

// export default function Eraser() {
//   const isDrawing = useRef(false);
//   const {sheetColor,selectedItem,stageRef, lines, setLines, strokeWidth} = useContext(strokeColorContext)

//   useEffect(() => {

//     const stage = stageRef.current;

//     const onMouseDown = () => {
//       isDrawing.current = true;
      
//       const pos = stage.getPointerPosition(); 
//       if (!pos && !selectedItem.includes('eraser')) return;

//       setLines((prev) => [
//         ...prev,
//         { points: [pos.x, pos.y],strokeColor:sheetColor, strokeWidth:strokeWidth, mode:"eraser" },
//       ]);
//     };

//     const onMouseMove = () => {
//       if (!isDrawing.current) return;

//       const pos = stage.getPointerPosition(); 
//       if (!pos) return;

//       setLines((prevLines) => [
//         ...prevLines,
//         { points: [pos.x, pos.y] ,strokeColor:sheetColor,strokeWidth:strokeWidth,mode:'draw',},
//       ]);


//     };

//     const onMouseUp = () => {
//       isDrawing.current = false;
//     };

//     stage.on("mousedown", onMouseDown);
//     stage.on("mousemove", onMouseMove);
//     stage.on("mouseup", onMouseUp);

//     return () => {
//       stage.off("mousedown", onMouseDown);
//       stage.off("mousemove", onMouseMove);
//       stage.off("mouseup", onMouseUp);
//     };
//   }, [stageRef, setLines,strokeWidth,sheetColor]);

//   return (
//     <>
//       {lines
//         .filter((line) => line.mode === "eraser") 
//         .map((line, index) => (
//           <Line
//             key={index}
//             points={line.points}
//             stroke={sheetColor}
//             strokeWidth={line.strokeWidth}
//             tension={0.5}
//             lineCap="round"
//             lineJoin="round"
//             globalCompositeOperation="source-over" 
//           />
//         ))}
//     </>
//   );
// }
