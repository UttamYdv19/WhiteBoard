import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
} from "@fortawesome/free-solid-svg-icons";

import useExportImage from "../Export/useExportImage";

export default function Tools({ setTool, stageRef, tools }) {
  const [selectedItem, setSelectedItem] = useState([]);
  const [handleExport] = useExportImage(stageRef);
  const toolItems = [
    { icon: faLock, id: "lock" },
    { icon: faSquare, id: "rect" },
    { icon: faCircle, id: "circle" },
    { icon: faFont, id: "font" },
    { icon: faArrowRight, id: "arrow" },
    { icon: faPencil, id: "pen" },
    { icon: faEraser, id: "eraser" },
    { icon: faDownload, id: "download" },
    { icon: faTrash, id: "trash" },
    { icon: faSquareCaretLeft, id: "caret-left" },
    { icon: faSquareCaretRight, id: "caret-right" },
    { icon: faUsersRectangle, id: "users" },
  ];

  const toggleTools = (id) => {
    if (id === faDownload) {
      handleExport();
      return;
    }

    setSelectedItem((prev) =>
      prev.includes(id)
        ? prev.filter((tool) => tool !== id)
        : [...prev, id]
    );

    setTool((prev) => {
      if (prev.includes(id)) {
        return prev.filter((tool) => tool !== id); 
      } else {
        return [...prev, id]; 
      }
    });
  };

 



  return (
    <div className="border-gray-500 shadow-gray-200 shadow-xl flex gap-6 ml-60 p-3 px-4 text-2xl sticky top-0 ">
      {toolItems.map(({icon,id}) => {
        const isSelected = selectedItem.includes(id);
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
