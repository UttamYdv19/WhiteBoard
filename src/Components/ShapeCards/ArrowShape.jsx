import React, { useRef } from 'react'
import { Arrow, Transformer } from 'react-konva';

export default function ArrowShape({isSelected,selectedShape,setSelected,setSelectedShape,trRef,isActive}) {
    const arrowRef = useRef()

  return (
    <>
    <Arrow
            ref={arrowRef}
            points={[850, 150, 1050, 150]}
            pointerLength={20}
            pointerWidth ={20}
            stroke="black"
            strokeWidth={3}
            draggable
            onClick={() => {
              setSelected(true);
              setSelectedShape(lineRef.current);
            }}
          />
           {isSelected && selectedShape === arrowRef.current && (
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
