import React, { useContext, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "../../ui/sheet";
import { Button } from "../../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faDownload,
  faBug,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Slider } from "../../ui/slider";
import { strokeColorContext } from "../../App";
import useExportImage from "../Export/useExportImage";

export default function SideBar() {
  const {
    strokeColor,
    setStrokeColor,
    sheetColor,
    setSheetColor,
    setSelectedItem,
    strokeWidth,
    setStrokeWidth,
    stageRef,
    setTool,
    setLines,
  } = useContext(strokeColorContext);
  const strokeColors = ["#000000", "#3B82F6", "#EF4444", "#10B981", "#D946EF"];
  const sheetColors = ["#ffffff", "#e5e5e5", "#d9f99d", "#fbbf24", "#bfdbfe"];

  const [handleExport] = useExportImage(stageRef);

  const handleStrokeColor = (color) => {
    setStrokeColor(color);
  };

  const handleSheetColor = (color) => {
    setLines((prev) =>
      prev.map((line) =>
        line.mode == "erase"
          ? {
              ...line,
              strokeColor: color,
            }
          : line
      )
    );
    setSheetColor(color);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className={"bg-white hover:bg-gray-100 w-10 h-10 "}>
          <FontAwesomeIcon className={`text-black text-7xl`} icon={faBars} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px] sm:w-[350px] p-4">
        <SheetHeader>
          <SheetTitle>Tools</SheetTitle>
        </SheetHeader>
        <div className="py-4 text-gray-400">
          <span className=" ">Stroke Color</span>
          <div className="flex justify-around my-6 cursor-pointer">
            {strokeColors.map((color) => {
              const isSelected = strokeColor === color;
              return (
                <div
                  key={color}
                  style={{ backgroundColor: color }}
                  className={`border-4 ${
                    isSelected
                      ? "border-gray-400 w-11 h-11 "
                      : "border-transparent  w-10 h-10"
                  } rounded-2xl hover:scale-110 `}
                  onClick={() => handleStrokeColor(color)}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="py-4 text-gray-400 ">
          <span>Stroke</span>
          <Slider
            className={"my-6"}
            defaultValue={[strokeWidth]}
            max={30}
            step={1}
            onValueChange={(value) => setStrokeWidth(value)}
          />
        </div>
        <div className="py-4 text-gray-400">
          <span className=" ">Sketch Book Background</span>
          <div className="flex justify-around my-6 cursor-pointer">
            {sheetColors.map((color) => {
              const isSelected = sheetColor === color;

              return (
                <div
                  key={color}
                  onClick={() => handleSheetColor(color)}
                  style={{ backgroundColor: color }}
                  className={` ${
                    isSelected
                      ? "border-gray-200 w-11 h-11"
                      : "border-transparent w-10 h-10"
                  }  border-4 rounded-2xl `}
                ></div>
              );
            })}
          </div>
        </div>
        <div className=" py-4 flex flex-col gap-5  border-b border-gray-200 text-gray-600">
          <span
            className="flex gap-3 items-center cursor-pointer"
            onClick={() => {
              setTool([{name:"",uniqueId:""}]);
              setSelectedItem('');
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
            reset Canvas
          </span>
          <span
            className="flex gap-3 items-center cursor-pointer"
            onClick={() => handleExport()}
          >
            <FontAwesomeIcon icon={faDownload} />
            Export Image
          </span>
        </div>

        <div className="py-4 flex flex-col gap-5 text-gray-600">
          <span className="flex gap-3 items-center">
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIN
          </span>
          <span className="flex gap-3 items-center">
            <FontAwesomeIcon icon={faGithub} />
            Git
          </span>
          <span className="flex gap-3 items-center">
            <FontAwesomeIcon icon={faBug} />
            Report Bug
          </span>
        </div>
      </SheetContent>
    </Sheet>
  );
}
