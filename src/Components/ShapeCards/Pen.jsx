import { strokeColorContext } from '../../App';
import React, { useContext, useEffect, useRef } from 'react';
import { Line } from 'react-konva';

const Pen = () => {
  const isDrawing = useRef(false);
  const {strokeColor,selectedItem,sheetColor,setLines,lines,strokeWidth,stageRef}=useContext(strokeColorContext)

  useEffect(() => {
    const stage = stageRef.current;
    const onMouseDown = (e) => {
      isDrawing.current = true;
      const pos = stage.getPointerPosition();
      if (!pos) return;

      setLines((prevLines) => [
        ...prevLines,
        { points: [pos.x, pos.y] ,strokeWidth:strokeWidth, strokeColor:selectedItem =='eraser'?sheetColor:strokeColor ,mode:selectedItem=='eraser'?'erase':'draw',},
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
  }, [stageRef, setLines,strokeColor,selectedItem,strokeWidth,sheetColor]);

  return (
    <>
      {lines.map((line, index) => (
        <Line
          key={index}
          points={line.points}
          stroke= {line.strokeColor}
          strokeWidth={line.strokeWidth}
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
