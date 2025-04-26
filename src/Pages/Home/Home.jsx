import React, { useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Tools from "../../Components/Tools/Tools";
import { Button } from "../../ui/button";

export default function Home({
}) {
  return (
    <div>
      <header className="flex  gap-x-60  m-4 items-center cursor-pointer">
        <div>
          <SideBar
            className={` border-0 w-3xs`}
            icon={faBars}
          />
        </div>
        <div>
          <Tools  />
        </div>
      </header>
    </div>
  );
}
