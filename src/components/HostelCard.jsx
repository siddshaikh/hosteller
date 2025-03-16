"use client";
import Image from "next/image";

// * redux hooks
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/store/features/cart/cartSlice";

const HostelCard = ({ hostel }) => {
  let discount = 30;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const existingItem = cartItems.find((item) => item.id === hostel._id);

  const addRemoveBed = () => {
    if (existingItem) {
      dispatch(removeFromCart({ id: hostel._id }));
    } else {
      dispatch(
        addToCart({
          id: hostel._id,
          name: hostel.name,
          price: hostel.price,
          quantity: 1,
          totalPrice: Math.round(
            hostel.price - (hostel.price * discount) / 100
          ),
        })
      );
    }
  };

  return (
    <div className="shadow-lg flex p-4">
      {/* Image section */}
      <Image
        src={hostel.image}
        alt={hostel.name}
        height={200}
        width={200}
        className="rounded-l-md"
      />

      {/* Details section */}
      <div className="flex flex-col w-full px-4">
        {/* first section */}
        <div className="flex items-center justify-between w-full">
          {/* Title */}
          <h2 className="font-bold text-lg">{hostel.name}</h2>
          {/* Price section */}
          <div className="flex items-center gap-2">
            <span className="text-green-600 font-semibold">
              {discount}% OFF
            </span>
            <span className="line-through text-gray-500">₹{hostel.price}</span>
            <span className="font-bold text-2xl">
              ₹{Math.round(hostel.price - (hostel.price * discount) / 100)}
            </span>
          </div>
        </div>

        {/* person detail */}
        <div className="flex items-center justify-between w-full">
          <span>Person x 1 Guest</span>
          <span>1 Night</span>
        </div>

        {/* availability */}
        <div className="flex items-center justify-between w-full">
          <span>{hostel.name}</span>
          <span className="uppercase text-green-600 font-bold">
            {hostel.availability} Beds Available
          </span>
        </div>

        <hr className="text-gray-300 my-4" />

        {/* checkout */}
        <div className="flex items-center justify-between w-full">
          <span className="font-bold">Availability </span>
          <button
            className="bg-black text-white px-5 py-2 mt-2 rounded-sm cursor-pointer"
            onClick={addRemoveBed}
          >
            {existingItem ? "Remove Bed" : "Add Bed"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostelCard;
