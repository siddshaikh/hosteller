import React from "react";
import { Backpack } from "lucide-react";

const Cart = () => {
  return (
    <div className="flex items-center justify-center">
      <button className="relative p-2 bg-gray-200 rounded-full cursor-pointer">
        <Backpack />
        <span className="bg-[var(--theme-color)] absolute top-0 right-0 w-5 h-5 rounded-full text-xs flex items-center justify-center text-black">
          5
        </span>
      </button>
    </div>
  );
};

export default Cart;
