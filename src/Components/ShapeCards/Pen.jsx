// Pen.js

import React, { useEffect, useRef } from 'react';
import { Line } from 'react-konva';

const Pen = ({ stageRef, lines, setLines ,strokeWidth}) => {
  const isDrawing = useRef(false);

  useEffect(() => {
    const stage = stageRef.current;
     console.log(stage);
    const onMouseDown = (e) => {
      isDrawing.current = true;
      const pos = stage.getPointerPosition();
      if (!pos) return;

      setLines((prevLines) => [
        ...prevLines,
        { points: [pos.x, pos.y] , mode:'draw',},
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

    stage.on('mousedown', onMouseDown);
    stage.on('mousemove', onMouseMove);
    stage.on('mouseup', onMouseUp);

    return () => {
      stage.off('mousedown', onMouseDown);
      stage.off('mousemove', onMouseMove);
      stage.off('mouseup', onMouseUp);
    };
  }, [stageRef, setLines]);

  return (
    <>
      {lines.filter((line)=>!line.mode || line.mode === 'draw')
    .map((line, index) => (
        <Line
          key={index}
          points={line.points}
          stroke= 'red'
          strokeWidth={strokeWidth}
          tension={0.5}
          lineCap="round"
          lineJoin="round"
          globalCompositeOperation= 'source-over'
        />
      ))}
    </>
  );
};

export default Pen;
