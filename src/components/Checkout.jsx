"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Checkout = ({ clearCart }) => {
  const [showText, setShowText] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCheckout = () => {
    dispatch(
      clearCart({
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
      })
    );
    setShowText(true);
    setTimeout(() => {
      router.push("/");
    }, 4000);
  };

  return (
    <div>
      {showText ? (
        <p className="text-green-600 text-center">
          Thank you! You will be notified by email.
        </p>
      ) : (
        <button
          className="w-full py-3 bg-[var(--theme-color)] rounded-md cursor-pointer"
          onClick={handleCheckout}
        >
          Checkout Now
        </button>
      )}
    </div>
  );
};

export default Checkout;
