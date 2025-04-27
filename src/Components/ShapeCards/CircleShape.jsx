import React, { useRef } from "react";
import { Circle, Transformer } from "react-konva";

export default function CircleShape({
  isSelected,
  setSelected,
  setSelectedRef,
  trRef,
  selectedRef,
  uniqueId,
  onClick,
}) {
  const circleRef = useRef();

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
          setSelectedRef(circleRef.current);
          onClick(uniqueId);
        }}
      />
      {isSelected && selectedRef === circleRef.current && (
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
