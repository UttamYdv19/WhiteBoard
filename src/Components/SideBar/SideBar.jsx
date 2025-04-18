import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faDownload,
  faBug,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Slider } from "../ui/slider";

export default function SideBar({ strokeWidth, setStrokeWidth }) {
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
            <div className="border-gray-50 rounded-2xl w-10 h-10 bg-black"></div>
            <div className="border-gray-50 rounded-2xl w-10 h-10 bg-blue-400"></div>
            <div className="border-gray-50 rounded-2xl w-10 h-10 bg-amber-300"></div>
            <div className="border-gray-50 rounded-2xl w-10 h-10 bg-green-500"></div>
            <div className="border-gray-50 rounded-2xl w-10 h-10 bg-fuchsia-700"></div>
          </div>
        </div>
        <div className="py-4 text-gray-400 ">
          <span>Stroke</span>
          {/* <div className='border my-6 cursor-pointer h-2  w-40 rounded-2xl bg-gray-100 '></div> */}
          <Slider
            className={"my-6"}
            defaultValue={[strokeWidth]}
            max={10}
            step={1}
            onValueChange={(value) => setStrokeWidth(value)}
          />
        </div>
        <div className="py-4 text-gray-400">
          <span className=" ">Sketch Book Background</span>
          <div className="flex justify-around my-6 cursor-pointer">
            <div className="border-gray-200 border-2 rounded-2xl w-10 h-10 bg-gray-200"></div>
            <div className="border-gray-200 border-2 rounded-2xl w-10 h-10 bg-lime-200"></div>
            <div className="border-gray-200 border-2 rounded-2xl w-10 h-10 bg-amber-200"></div>
            <div className="border-gray-200 border-2 rounded-2xl w-10 h-10 bg-blue-200"></div>
            <div className="border-gray-200 border-2 rounded-2xl w-10 h-10 bg-white2"></div>
          </div>
        </div>
        <div className=" py-4 flex flex-col gap-5  border-b border-gray-200 text-gray-600">
          <span className="flex gap-3 items-center">
            <FontAwesomeIcon icon={faTrash} />
            reset Canvas
          </span>
          <span className="flex gap-3 items-center">
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
