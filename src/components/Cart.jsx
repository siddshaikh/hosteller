"use client";
import React from "react";
import { Backpack } from "lucide-react";
import { useSelector } from "react-redux";
import Link from "next/link";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Link href="/my-cart">
      <div className="flex items-center justify-center">
        <button className="relative p-2 bg-gray-200 rounded-full cursor-pointer">
          <Backpack />
          {!!cartItems.length && (
            <span className="bg-[var(--theme-color)] absolute top-0 right-0 w-5 h-5 rounded-full text-xs flex items-center justify-center text-black">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>
    </Link>
  );
};

export default Cart;
