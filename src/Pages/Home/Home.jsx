import React, { useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Tools from "../../Components/Tools/Tools";

export default function Home({  tools,setTool ,strokeWidth, setStrokeWidth,stageRef }) {
  return (
    <div>
      <header className="flex  gap-x-60  m-4 items-center cursor-pointer">
        <div>
          <SideBar
            className={` border-0 w-3xs`}
            icon={faBars}
            strokeWidth={strokeWidth}
            setStrokeWidth={setStrokeWidth}
          />
        </div>
        <div>
          <Tools tools={tools} setTool={setTool} stageRef={stageRef} />
        </div>
      </header>
    </div>
  );
}
