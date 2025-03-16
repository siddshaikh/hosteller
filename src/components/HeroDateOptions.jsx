"use client";

import { useSelector } from "react-redux";
import { ChevronDown } from "lucide-react";
import { format } from "date-fns";

const HeroDateOptions = () => {
  const { startDate } = useSelector((state) => state.dates);
  const options = [
    { type: "From", name: "Delhi" },
    { type: "To", name: "Mumbai" },
    {
      type: "Travel Date",
      name: format(startDate || new Date(), "dd MM, yyyy"),
    },
  ];
  return (
    <div className="mx-4 w-full">
      <div className="border border-slate-300 rounded-md flex w-full">
        {options.map((option) => (
          <div
            key={option.name}
            className="border border-slate-300 flex items-center justify-between w-full px-5 rounded-md py-2"
          >
            <div className="border-r-slate-300 flex flex-col sm:flex-wrap">
              <span className="text-sm font-light tracking-wide">
                {option.type}
              </span>
              <span
                className={`text-xs ${
                  option.type === "Travel Date" ? "font-bold" : "font-thin"
                }`}
              >
                {option.name}
              </span>
            </div>
            {option.type !== "Travel Date" && (
              <ChevronDown className="h-5 w-5" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroDateOptions;
