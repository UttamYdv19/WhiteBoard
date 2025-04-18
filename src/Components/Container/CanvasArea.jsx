import React, { useEffect, useRef, useState } from "react";
import { Layer, Stage } from "react-konva";
import Pen from "../ShapeCards/Pen";
import RectangleShape from "../ShapeCards/RectangleShape";
import CircleShape from "../ShapeCards/CircleShape";
import ArrowShape from "../ShapeCards/ArrowShape";
import Eraser from "../ShapeCards/Eraser";

export default function CanvasArea({ tools, strokeWidth, stageRef }) {
  const trRef = useRef();
  const [lines, setLines] = useState([]);
  const [isSelected, setSelected] = useState(false);
  const [selectedShape, setSelectedShape] = useState(null);
  const toolComponents = {
    pen: (
      <Pen
        stageRef={stageRef}
        lines={lines}
        setLines={setLines}
        strokeWidth={strokeWidth}
      />
    ),
    eraser: (
      <Eraser
        stageRef={stageRef}
        lines={lines}
        setLines={setLines}
        strokeWidth={strokeWidth}
      />
    ),
    rect:(<RectangleShape
    isSelected={isSelected}
    setSelected={setSelected}
    selectedShape={selectedShape}
    setSelectedShape={setSelectedShape}
    trRef={trRef}
  />),
  circle:(
    <CircleShape
      isSelected={isSelected}
      setSelected={setSelected}
      selectedShape={selectedShape}
      setSelectedShape={setSelectedShape}
      trRef={trRef}
    />
  ),
  arrow:(
    <ArrowShape
      isSelected={isSelected}
      setSelected={setSelected}
      selectedShape={selectedShape}
      setSelectedShape={setSelectedShape}
      trRef={trRef}
      strokeWidth={strokeWidth}
    />
  )

  };

  useEffect(() => {
    if (isSelected && selectedShape) {
      trRef.current.nodes([selectedShape]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected, selectedShape]);

  return (
    <>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        ref={stageRef}
      >
        <Layer>
          {
            tools.map((tool)=>
            (< React.Fragment key={tool}>
              {toolComponents[tool]}
              </ React.Fragment >
            ))

          }
        </Layer>
      </Stage>
    </>
  );
}
