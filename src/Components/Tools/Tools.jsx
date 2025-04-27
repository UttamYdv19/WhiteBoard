import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from 'uuid';
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
  const { selectedItem, setSelectedItem, setTool, tools, setLines, stageRef } =
    useContext(strokeColorContext);
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
      setTool([{name:"",uniqueId:""}]);
      setLines([{ points: [], strokeColor: "", strokeWidth: "", mode: "" }]);
      return;
    }

    if (id === "signUp") {
      navigate("/signUp");
      return;
    }

    if (id === "caret-left") {
      setTool((prev) => {
        const lastIndex = prev.findIndex((item) => item.name === selectedItem);
        if (lastIndex !== -1) {
          const updatedTools = [...prev];
          updatedTools.splice(lastIndex, 1);
          return updatedTools;
        }
        return prev;
      });
      return;
    }

    setSelectedItem(id);

    setTool((prev) => {
      return [...prev,{name:id,uniqueId: uuidv4()}];
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
