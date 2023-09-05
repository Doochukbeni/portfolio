"use client";

import Link from "next/link";

import { navItems } from "@/components/navlinks";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-50 darK:bg-slate-900 py-3  border border-b shadow-sm  w-full  text-slate-800 darK:text-slate-300">
      <nav className="max-w-7xl mx-auto nav flex items-center px-1 justify-between ">
        <Link href="/" className="flex place-items-center text-2xl">
          <Image
            src="/IMG-20180122-WA0076-_1_.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>

        <div className="hidden sm:flex">
          <ul className="flex items-center  gap-3 ">
            {navItems.map((nav) => (
              <li key={nav.id} className="link font-semibold ">
                <Link href={nav.url}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Button className="block sm:hidden ">&#9776;</Button>
      </nav>
    </header>
  );
};

export default Navbar;
