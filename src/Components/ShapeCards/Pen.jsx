import { strokeColorContext } from "../../App";
import React, { useContext, useEffect, useRef } from "react";
import { Line } from "react-konva";
import { v4 as uuidv4 } from "uuid";

const Pen = () => {
  const isDrawing = useRef(false);
  const {
    strokeColor,
    selectedItem,
    sheetColor,
    setLines,
    lines,
    strokeWidth,
    stageRef,
    selectedShape,
    setIdArray,
    idArray,
  } = useContext(strokeColorContext);

  useEffect(() => {
    const stage = stageRef.current;
    const onMouseDown = (e) => {
    setIdArray((prev) => [...prev, uuidv4()]);
      isDrawing.current = true;
      const pos = stage.getPointerPosition();
      if (!pos) return;

      setLines((prevLines) => [
        ...prevLines,
        {
          points: [pos.x, pos.y],
          strokeWidth: strokeWidth,
          strokeColor: selectedItem == "eraser" ? sheetColor : strokeColor,
          mode: selectedItem == "eraser" ? "erase" : "draw",
          id: idArray[idArray.length - 1],
        },
      ]);
    };

    const onMouseMove = (e) => {
      if (!isDrawing.current) return;
      const pos = stage.getPointerPosition();
      if (!pos) return;

      setLines((prevLines) => {
        const lastLine = prevLines[prevLines.length - 1];
        const updatedLine = {
          ...lastLine,
          points: [...lastLine.points, pos.x, pos.y],
        };
        return [...prevLines.slice(0, -1), updatedLine];
      });
    };

    const onMouseUp = () => {
      isDrawing.current = false;
    };

    stage.on("mousedown", onMouseDown);
    stage.on("mousemove", onMouseMove);
    stage.on("mouseup", onMouseUp);

    return () => {
      stage.off("mousedown", onMouseDown);
      stage.off("mousemove", onMouseMove);
      stage.off("mouseup", onMouseUp);
    };
  }, [
    stageRef,
    lines,
    strokeColor,
    selectedItem,
    strokeWidth,
    sheetColor,
    idArray,

  ]);

  return (
    <>
      {lines.map((line, id) => (
        <Line
          key={id}
          points={line.points}
          stroke={line.strokeColor}
          strokeWidth={line.strokeWidth}
          tension={0.5}
          lineCap="round"
          lineJoin="round"
          globalCompositeOperation="source-over"
        />
      ))}
    </>
  );
};

export default Pen;
