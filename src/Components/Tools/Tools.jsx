import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import {
  faLock,
  faSquare,
  faCircle,
  faPencil,
  faEraser,
  faDownload,
  faArrowRight,
  faTrash,
  faSquareCaretLeft,
  faSquareCaretRight,
  faFont,
  faUsersRectangle,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

import useExportImage from "../Export/useExportImage";
import { strokeColorContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function Tools() {
  const [undoArray,setUndoArray] = useState([]);
  const {
    selectedItem,
    setSelectedItem,
    setTool,
    selectedShape,
    setLines,
    stageRef,
    idArray,
    setIdArray
  } = useContext(strokeColorContext);
  const [handleExport] = useExportImage(stageRef);
  const navigate = useNavigate();
  const toolItems = [
    { icon: faLock, id: "lock" },
    { icon: faSquare, id: "rect" },
    { icon: faCircle, id: "circle" },
    { icon: faArrowRight, id: "arrow" },
    { icon: faFont, id: "font" },
    { icon: faPencil, id: "pen" },
    { icon: faEraser, id: "eraser" },
    { icon: faDownload, id: "download" },
    { icon: faTrash, id: "trash" },
    { icon: faSquareCaretLeft, id: "caret-left" },
    { icon: faSquareCaretRight, id: "caret-right" },
    { icon: faUsersRectangle, id: "users" },
    { icon: faCircleUser, id: "signUp" },
  ];

  const toggleTools = (id) => {
    if (id === "download") {
      handleExport();
      return;
    }

    if (id === "trash") {
      
      setTool((prev) =>
        prev.filter((tool) => tool.uniqueId !== selectedShape)
      );
      return ;
      // if (id == "pen" || id == "eraser") {
      //   setLines((prev) => prev.filter((line) => line.id !== selectedShape));
      //   return;
      // } else {
      //   setTool((prev) =>
      //     prev.filter((tool) => tool.uniqueId !== selectedShape)
      //   );
      //   return;
      // }
    }

    if (id === "signUp") {
      navigate("/signUp");
      return;
    }

    if (id === "caret-left") {
      if(!idArray.length) return;
      const lastIndexId =idArray[idArray.length-2]
      setLines((prev)=>{
        const prevLine = prev.filter((line)=>line.id == lastIndexId);
        const newLine = prev.filter((line)=>line.id !== lastIndexId)
        setUndoArray((prev)=>[...prev,prevLine])
        return newLine ;
      })
      setIdArray(prev=>prev.slice(0,idArray.length-1));
      
      return;
    }

    if (id === "caret-right") {
      if (undoArray.length === 0) return;
      setLines((prev)=>{
        const newLine = undoArray[undoArray.length-1]
        console.log(newLine)
        return [...prev,newLine] ;
      })
      setUndoArray(prev=>prev.slice(0,-1));
      setIdArray((prev) => [...prev, newLine.id]);
      return;
    }

    setSelectedItem(id);

    setTool((prev) => {
      return [...prev, { name: id, uniqueId: uuidv4() }];
    });
  };
  return (
    <div className="border-gray-500 shadow-gray-200 shadow-xl flex gap-6 ml-50 p-3 px-4 text-2xl sticky top-0 ">
      {toolItems.map(({ icon, id }) => {
        const isSelected = selectedItem === id;
        return (
          <div
            key={id}
            className={`
         ${isSelected ? "bg-gray-100 " : ""} 
         hover:scale-110 w-9 h-9 flex items-center justify-center`}
            onClick={() => toggleTools(id)}
          >
            <FontAwesomeIcon icon={icon} />
          </div>
        );
      })}
    </div>
  );
}
