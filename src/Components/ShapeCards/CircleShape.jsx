import React, { useRef } from 'react'
import { Circle, Transformer } from 'react-konva';

export default function CircleShape({isSelected,selectedShape,setSelected,setSelectedShape,trRef}) {
  const circleRef = useRef()

  return (
<>
<Circle
            ref={circleRef}
            x={540}
            y={230}
            radius={50}
            fill="skyblue"
            stroke="black"
            draggable
            onClick={() => {
              setSelected(true);
              setSelectedShape(circleRef.current);
            }}
          />
          {isSelected && selectedShape === circleRef.current && (
            <Transformer
              ref={trRef}
              boundBoxFunc={(oldBox, newBox) => {
                if (newBox.height < 50 || newBox.width < 50) {
                  return oldBox;
                }
                return newBox;
              }}
            />
          )}
</>
  )
}
