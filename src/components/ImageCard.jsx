import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CircleArrowOutUpRight } from "lucide-react";

const ImageCard = ({ location }) => {
  return (
    <button className="h-[390px] w-[300px] flex-none flex flex-col items-center justify-between">
      <Link href={`/hostels/${location._id}`}>
        <div className="relative h-[320px] w-[300px]">
          <Image
            fill
            alt={location.name}
            src={location.image}
            className="object-cover rounded-[10px]"
          />
          {/* show tags */}
          <div className="absolute top-2 px-2 flex items-center justify-between w-full">
            <span className="bg-[var(--theme-color)] px-2 py-1 font-thin text-sm rounded-sm">
              New launch
            </span>
            <span className="bg-white text-black text-xs rounded-full p-1">
              <CircleArrowOutUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
        {/* name and price section */}
        <div className="flex items-center justify-between w-full mt-2">
          <div className="text-start w-full">
            <h2 className="font-bold text-ellipsis overflow-hidden">
              {location.name}
            </h2>
            <span>
              Starting @ <span className="font-bold">₹539/-</span>
            </span>
          </div>

          <span className="ml-2 p-2 rounded-full bg-[var(--theme-color)] hover:bg-black transition duration-300 text-black hover:text-white">
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </div>
      </Link>
    </button>
  );
};

export default ImageCard;
