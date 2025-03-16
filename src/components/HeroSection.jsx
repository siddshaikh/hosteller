import React from "react";
import { ChevronDown } from "lucide-react";
import HeroDateOptions from "./HeroDateOptions";

const menu = ["Hostel", "Workation", "Colive", "Bus", "Commune", "Events"];
const HeroSection = () => {
  return (
    <div className="mx-20 my-4 shadow-lg flex flex-col">
      {/* menu bar */}
      <ul className="flex items-center gap-8 mx-4 py-2">
        {menu.map((menu) => (
          <li
            key={menu}
            className="font-thin flex items-center gap-1 cursor-pointer border-b-2 border-transparent hover:border-b-[var(--theme-color)] transition-all duration-300 ease-in-out"
          >
            {menu}
            <ChevronDown className="h-4 w-4" />
          </li>
        ))}
      </ul>
      <div className="flex items-center md:justify-start gap-2 pb-2 pr-2 flex-wrap md:flex-nowrap">
        <HeroDateOptions />
        <button className="text-black bg-[var(--theme-color)] font-bold px-14 py-3.5 whitespace-nowrap rounded-md">
          Book now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
