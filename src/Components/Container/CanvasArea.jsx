import React, { useContext, useEffect, useRef, useState } from "react";
import { Rect, Layer, Stage } from "react-konva";
import Pen from "../ShapeCards/Pen";
import RectangleShape from "../ShapeCards/RectangleShape";
import CircleShape from "../ShapeCards/CircleShape";
import ArrowShape from "../ShapeCards/ArrowShape";
import { strokeColorContext } from "../../App";

export default function CanvasArea() {
  const trRef = useRef();
  const [isSelected, setSelected] = useState(false);
  const [selectedRef, setSelectedRef] = useState(null);
  const { strokeWidth, sheetColor, tools, stageRef, setSelectedShape } =
    useContext(strokeColorContext);

  const toolComponents = {
    pen: <Pen />,
    // eraser: (
    //   <Eraser
    //     stageRef={stageRef}
    //     lines={lines}
    //     setLines={setLines}
    //     strokeWidth={strokeWidth}
    //   />
    // ),
    rect: (
      <RectangleShape
        isSelected={isSelected}
        setSelected={setSelected}
        setSelectedRef={setSelectedRef}
        selectedRef={selectedRef}
        trRef={trRef}
      />
    ),
    circle: (
      <CircleShape
        isSelected={isSelected}
        setSelected={setSelected}
        setSelectedRef={setSelectedRef}
        selectedRef={selectedRef}
        trRef={trRef}
      />
    ),
    arrow: (
      <ArrowShape
        isSelected={isSelected}
        setSelected={setSelected}
        setSelectedRef={setSelectedRef}
        selectedRef={selectedRef}
        trRef={trRef}
        strokeWidth={strokeWidth}
      />
    ),
  };

  const handleClick = (uniqueId) => {
    setSelectedShape(uniqueId);
  };
  useEffect(() => {
    if (isSelected && selectedRef) {
      trRef.current.nodes([selectedRef]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected, selectedRef]);

  return (
    <>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        ref={stageRef}
      >
        <Layer>
          <Rect
            x={0}
            y={0}
            width={window.innerWidth}
            height={window.innerHeight}
            fill={sheetColor}
            listening={false}
          />
          {tools.map(({ name, uniqueId }) => {
            const Components = toolComponents[name];
            if (!Components) {
              return null;
            } else {
              return (
                <React.Fragment key={uniqueId}>
                  {React.cloneElement(toolComponents[name], {
                    uniqueId,
                    onClick: () => handleClick(uniqueId),
                  })}
                </React.Fragment>
              );
            }
          })}
        </Layer>
      </Stage>
    </>
  );
}
