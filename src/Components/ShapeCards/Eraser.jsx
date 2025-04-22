import React, { useEffect, useRef } from "react";
import { Line } from "react-konva";

export default function Eraser({ stageRef, lines, setLines, strokeWidth }) {
  const isDrawing = useRef(false);

  useEffect(() => {
    const stage = stageRef.current;

    const onMouseDown = () => {
      isDrawing.current = true;
      const pos = stage.getPointerPosition(); 
      if (!pos) return;

      setLines((prev) => [
        ...prev,
        { points: [pos.x, pos.y], strokeWidth,mode: "eraser" },
      ]);
    };

    const onMouseMove = () => {
      if (!isDrawing.current) return;

      const pos = stage.getPointerPosition(); 
      if (!pos) return;

      setLines((prev) => {
        const lastLine = prev[prev.length - 1];

     
        const updatedLine = {
          ...lastLine,
          points: [...lastLine.points, pos.x, pos.y],
        };

        return [...prev.slice(0, -1), updatedLine];
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
  }, [stageRef, setLines,strokeWidth]);

  return (
    <>
      {lines
        .filter((line) => line.mode === "eraser") 
        .map((line, index) => (
          <Line
            key={index}
            points={line.points}
            stroke="white"
            strokeWidth={line.strokeWidth}
            tension={0.5}
            lineCap="round"
            lineJoin="round"
            globalCompositeOperation="destination-out" 
          />
        ))}
    </>
  );
}
