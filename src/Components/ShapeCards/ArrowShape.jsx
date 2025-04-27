import { strokeColorContext } from "../../App";
import React, { useContext, useRef } from "react";
import { Arrow, Transformer } from "react-konva";

export default function ArrowShape({
  isSelected,
  setSelected,
  selectedRef,
  setSelectedRef,
  trRef,
  uniqueId,
  onClick,
}) {
  const arrowRef = useRef();
  const { tools } = useContext(strokeColorContext);

  return (
    <>
      <Arrow
        ref={arrowRef}
        points={[850, 150, 1050, 150]}
        pointerLength={20}
        pointerWidth={20}
        stroke="black"
        strokeWidth={3}
        draggable
        onClick={() => {
          setSelected(true);
          setSelectedRef(arrowRef.current);
          onClick(uniqueId);
        }}
      />
      {isSelected && selectedRef === arrowRef.current && (
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
  );
}
