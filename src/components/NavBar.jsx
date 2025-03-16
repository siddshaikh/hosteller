import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cart from "./Cart";
import { ChevronDown } from "lucide-react";

const NavBar = () => {
  const navItems = [{ name: "Locations", path: "/" }];

  return (
    <nav className="sticky top-0 bg-[#ffff] h-10 flex items-center justify-between py-8 shadow px-4 z-50">
      <Link href={"/"}>
        <Image alt="hosteller" src={"/hosteller.png"} width={200} height={7} />
      </Link>
      <ul className="flex space-x-4 ml-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.path}
              className="font-thin tracking-wide uppercase flex"
            >
              {item.name}
              <ChevronDown />
            </Link>
          </li>
        ))}
      </ul>
      <Cart />
    </nav>
  );
};

export default NavBar;
