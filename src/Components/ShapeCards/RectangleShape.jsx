import React, { useEffect, useRef } from 'react'
import { Rect, Transformer } from 'react-konva';

export default function RectangleShape({isSelected,selectedShape,setSelected,setSelectedShape,trRef}) {
 const rectRef =useRef();
  return (
    <>
        <Rect
            ref={rectRef}
            x={120}
            y={130}
            width={200}
            height={100}
            fill="green"
            stroke="black"
            onClick={() => {
            setSelected(true);
              setSelectedShape(rectRef.current);
          }}
          draggable
        />
          {isSelected && selectedShape === rectRef.current && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 50 || newBox.height < 50) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  )
}
