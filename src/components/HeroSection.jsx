import React from "react";
import { ChevronDown } from "lucide-react";

const menu = ["Hostel", "Workation", "Colive", "Bus", "Commune", "Events"];
const HeroSection = () => {
  return (
    <div className="mx-20 my-4 shadow-lg">
      {/* menu bar */}
      <ul className="flex items-center gap-8 mx-4 py-2">
        {menu.map((menu) => (
          <li key={menu} className="font-thin flex items-center gap-1">
            {menu}
            <ChevronDown className="h-4 w-4" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroSection;
