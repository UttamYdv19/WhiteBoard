import { strokeColorContext } from '../../App';
import React, { useContext, useRef } from 'react'
import { Arrow, Transformer } from 'react-konva';

export default function ArrowShape({isSelected,selectedShape,setSelected,setSelectedShape,trRef }) {
    const arrowRef = useRef();
    const { tools} = useContext(strokeColorContext)

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
              setSelectedShape(arrowRef.current);
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
