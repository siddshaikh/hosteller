"use client";
import { format } from "date-fns";
import { Trash2, Plus, Minus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  addToCart,
  removeSingleItemFromCart,
  clearCart,
} from "@/store/features/cart/cartSlice";
import { useEffect, useState } from "react";
import Image from "next/image";

import Checkout from "./Checkout";

export const Summary = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const calculatedTotalPrice = cartItems.reduce((acc, item) => {
      return acc + item.totalPrice;
    }, 0);

    const taxes = (calculatedTotalPrice * 0.092).toFixed(2);
    setTax(parseFloat(taxes));
    setTotalPrice(parseFloat(calculatedTotalPrice.toFixed(2)));
  }, [cartItems]);
  const currentDate = new Date();
  const nextDay = new Date(currentDate);
  nextDay.setDate(currentDate.getDate() + 1);

  const handleRemoveItem = (id) => {
    dispatch(removeSingleItemFromCart({ id }));
  };

  const handleAddBed = (item) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        totalPrice: item.price,
      })
    );
  };

  return (
    <div className="max-h-[600px] overflow-y-scroll">
      {cartItems.length ? (
        <>
          {" "}
          <div className="flex items-center justify-between border border-gray-300 rounded-md p-1 px-2">
            <p className="flex flex-col">
              <span className="uppercase text-sm">Check In</span>
              <span className="font-bold">
                {format(currentDate, "dd MM, yyyy")}
              </span>
            </p>
            <p className="text-black bg-[var(--theme-color)] py-1 px-3 rounded-sm">
              1 Night
            </p>
            <p className="flex flex-col">
              <span className="uppercase text-sm">Check out</span>
              <span className="font-bold">
                {format(nextDay, "dd MM, yyyy")}
              </span>
            </p>
          </div>
          {/* items */}
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between my-10"
              >
                {/* first portion */}
                <p className="flex flex-col">
                  <span className="font-bold text-lg">{item.name}</span>
                  <span>
                    ₹{item.price} /Night X {item.quantity} (1 Guest)
                  </span>
                </p>
                {/* second portion */}
                <div className="flex flex-col">
                  <span className="font-bold text-lg">₹{item.totalPrice}</span>
                  <div className="flex items-center gap-2">
                    <button
                      className="bg-black text-white p-1 rounded-sm cursor-pointer"
                      onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    {item.quantity}
                    <button
                      className="bg-black text-white p-1 rounded-sm cursor-pointer"
                      onClick={() => handleAddBed(item)}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                    <button
                      className="bg-red-500 text-white p-1 rounded-sm cursor-pointer"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="py-2">Your bag is empty</p>
          )}
          <hr className="text-gray-300 mb-1" />
          {/* total charges */}
          <div className="flex justify-between items-center">
            <p className="flex flex-col items-start">
              <span className="font-bold text-lg">Total Room Charge</span>
              <span className="font-bold text-lg">Total Taxes</span>
            </p>
            <p className="flex flex-col">
              <span className="font-bold text-lg">₹{totalPrice}</span>
              <span className="font-bold text-lg">₹{tax}</span>
            </p>
          </div>
          <hr className="text-gray-300 mb-1" />
          {/* total price */}
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-lg">Total Price</h4>
            <h4 className="font-bold text-lg">
              ₹{(totalPrice + tax).toFixed(2)}
            </h4>
          </div>
          {/* checkout */}
          <Checkout clearCart={clearCart} />
        </>
      ) : (
        <Image
          width={300}
          alt="summary-logo"
          src={"/summary.svg"}
          height={300}
        />
      )}
    </div>
  );
};
