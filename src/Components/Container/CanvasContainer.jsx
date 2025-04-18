// import React, { useEffect, useRef, useState } from "react";
// import {
//   Circle,
//   Layer,
//   Line,
//   Rect,
//   Shape,
//   Stage,
//   Text,
//   Transformer,
// } from "react-konva";
// import Pen from "../ShapeCards/Pen";

// export default function CanvasContainer({tools}) {
//   const [isSelected, setSelected] = useState(false);
//   const [selectedShape, setSelectedShape] = useState(null);
//   const [lines, setLInes] = useState([]);

//   const trRef = useRef();
//   const rectRef = useRef();
//   const circleRef = useRef();
//   const textRef = useRef();
//   const lineRef = useRef();
//   const isDrawing = useRef(false);
//   const drawingRef = useRef();

//   const onMousedown = (e) => {
//     isDrawing.current = true;
//     const pos = e.target.getStage().getPointerPosition();
//     setLInes([...lines, { tools, points: [pos.x, pos.y] }]);
//   };
//   const onMouseMove = (e) => {
//     if (!isDrawing.current) return;

//     const stage = e.target.getStage();
//     const points = stage.getPointerPosition();
//     const lastLine = lines[lines.length - 1];
//     lastLine.points = lastLine.points.concat([points.x, points.y]);
//     lines.splice(lines.length - 1, 1, lastLine);
//     setLInes(lines.concat());
//   };
//   const onMouseUp = (e) => {
//     isDrawing.current = false;
//   };

//   useEffect(() => {
//     if (isSelected && selectedShape) {
//       trRef.current.nodes([selectedShape]);
//       trRef.current.getLayer().batchDraw();
//     }
//   }, [isSelected, selectedShape]);

//   useEffect(() => {
//     if (isSelected && selectedShape && selectedShape.className === "Line") {
//       const node = selectedShape;
//       node.on("transform", () => {
//         const scaleX = node.scaleX();
//         const newPoints = [850, 150, 200 * scaleX, 150];
//         node.points(newPoints);
//         node.scaleX(1);
//       });
//     }
//   }, [isSelected, selectedShape]);

//   const handleExport = ()=>
//   {
//      const uri = stageRef.current.toDataURL();
//      downloadURI(uri,"My-Export.png");
//   }

//    const downloadURI = (uri,name) =>
//   {
//    const link = document.createElement("a");
//    link.download=name;
//    link.href=uri;
//    document.body.appendChild(link);
//    link.click();
//    document.body.removeChild(link);
//   }

//   return (
//     <div>
//             <button onClick={handleExport}>Export as Image</button>

//       <Stage 
//       ref={stageRef}
//       width={window.innerWidth}
//       height={window.innerHeight}
//       onMouseDown={onMousedown}
//       onMouseMove={onMouseMove}
//       onMouseUp={onMouseUp}
//       onTouchStart={onMousedown}
//       onTouchMove={onMouseMove}
//       onTouchEnd={onMouseUp}
//       >
//         <Layer>
//           <Rect
//             ref={rectRef}
//             x={120}
//             y={130}
//             width={200}
//             height={100}
//             fill="green"
//             stroke="black"
//             onClick={() => {
//               setSelected(true);
//               setSelectedShape(rectRef.current);
//             }}
//             draggable
//           />
//           {isSelected && selectedShape === rectRef.current && (
//             <Transformer
//               ref={trRef}
//               boundBoxFunc={(oldBox, newBox) => {
//                 if (newBox.width < 50 || newBox.height < 50) {
//                   return oldBox;
//                 }
//                 return newBox;
//               }}
//             />
//           )}

//           <Circle
//             ref={circleRef}
//             x={540}
//             y={230}
//             radius={50}
//             fill="skyblue"
//             stroke="black"
//             draggable
//             onClick={() => {
//               setSelected(true);
//               setSelectedShape(circleRef.current);
//             }}
//           />
//           {isSelected && selectedShape === circleRef.current && (
//             <Transformer
//               ref={trRef}
//               boundBoxFunc={(oldBox, newBox) => {
//                 if (newBox.height < 50 || newBox.width < 50) {
//                   return oldBox;
//                 }
//                 return newBox;
//               }}
//             />
//           )}

//           <Text
//             ref={textRef}
//             x={650}
//             y={100}
//             text="Hello, Konva!"
//             fontSize={24}
//             fontFamily="Arial"
//             fill="black"
//             draggable
//             onClick={() => {
//               setSelected(true);
//               setSelectedShape(textRef.current);
//             }}
//           />
//           {isSelected && selectedShape === textRef.current && (
//             <Transformer
//               ref={trRef}
//               boundBoxFunc={(oldBox, newBox) => {
//                 if (newBox.height < 2 || newBox.width < 2) {
//                   return oldBox;
//                 }
//                 return newBox;
//               }}
//             />
//           )}

//           <Line
//             ref={lineRef}
//             points={[850, 150, 1050, 150]}
//             stroke="black"
//             strokeWidth={3}
//             draggable
//             onClick={() => {
//               setSelected(true);
//               setSelectedShape(lineRef.current);
//             }}
//           />
//           {isSelected && selectedShape === lineRef.current && (
//             <Transformer
//               ref={trRef}
//               rotateEnabled={true}
//               enabledAnchors={["middle-left", "middle-right"]}
//               boundBoxFunc={(oldBox, newBox) => {
//                 if (newBox.width < 50 || newBox.height < 50) {
//                   return oldBox;
//                 }
//                 return newBox;
//               }}
//             />
//           )}
//           {/* {lines.map((line, index) => (
//             <Line
//               key={index}
//               points={line.points}
//               ref={drawingRef}
//               stroke="red"
//               strokeWidth={3}
//               tension={0.5}
//               strokeLinecap="rounded"
//               strokeLinejoin="rounded"
//               globalCompositeOperation={
//                 line.tools === "eraser" ? "destination-out" : "source-over"
//               }
//             />
//           ))} */}

           

//         </Layer>
//       </Stage>
//     </div>
//   );
// }


