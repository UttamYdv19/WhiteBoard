import React from "react";
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
} from "@fortawesome/free-solid-svg-icons";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import ExportImage from "../Export/ExportImage";

export default function Tools({ setTool, stageRef, tools }) {
  const toggleTools = (toolName) => {
    setTool((prev) => 
      prev.includes(toolName)
        ? prev.filter((tool) => tool !== toolName)
        : [...prev, toolName]
    );
  };
  return (
    <ToggleGroup
      type="multiple"
      className="border-gray-500 shadow-gray-200 shadow-xl flex gap-5 ml-80 p-3 px-4  sticky top-0 "
    >
      <ToggleGroupItem
        value="lock"
        aria-label="Toggle bold"
        onClick={() => toggleTools("lock")}
      >
        <FontAwesomeIcon icon={faLock} />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="rect"
        aria-label="Toggle bold"
        onClick={() => toggleTools("rect")}
      >
        <FontAwesomeIcon icon={faSquare} />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="circle"
        aria-label="Toggle italic"
        onClick={() => toggleTools("circle")}
      >
        <FontAwesomeIcon icon={faCircle} />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="arrow"
        aria-label="Toggle bold"
        onClick={() => toggleTools("arrow")}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="pen"
        aria-label="Toggle bold"
        onClick={() => toggleTools("pen")}
      >
        <FontAwesomeIcon icon={faPencil} />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="eraser"
        aria-label="Toggle italic"
        onClick={() => toggleTools("eraser")}
      >
        <FontAwesomeIcon icon={faEraser} />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="delete"
        aria-label="Toggle bold"
        onClick={() => toggleTools("delete")}
      >
        <FontAwesomeIcon icon={faTrash} />
      </ToggleGroupItem>

      <ExportImage stageRef={stageRef}>
        <ToggleGroupItem
          value="download"
          aria-label="Toggle strikethrough"
        >
          <FontAwesomeIcon icon={faDownload} />
        </ToggleGroupItem>
      </ExportImage>
    </ToggleGroup>
  );
}
