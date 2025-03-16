"use client";
import { Summary } from "@/components/Summary";
import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="border border-gray-300 shadow-md p-4 rounded-md">
        {!cartItems.length && (
          <h2 className="font-bold">Hey You're Bag Is Empty.</h2>
        )}

        <Summary />
      </div>
    </div>
  );
};

export default CartPage;
