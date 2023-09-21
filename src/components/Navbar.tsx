"use client";

import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/components/navlinks";

import { Menu } from "lucide-react";
import MobileMenuToggle from "./MobileMenuToggle";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const mobileBtn = () => {
    setOpen(!open);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-50 dark:bg-slate-900 py-3  border border-b shadow-sm  w-full  text-slate-800 darK:text-slate-300">
      <nav className="max-w-7xl mx-auto flex items-center md:px-6 px-3 py-3 justify-between ">
        <section className="w-full flex items-center justify-between">
          <Link href="/" className="flex place-items-center text-2xl">
            <Image
              src="/IMG-20180122-WA0076-_1_.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>

          <main className="hidden sm:flex">
            <ul className="flex items-center  gap-7 ml-10 ">
              {navItems.map((nav) => (
                <li
                  key={nav.id}
                  className="font-semibold text-slate-800 dark:text-slate-100"
                >
                  <Link href={nav.url}>{nav.title}</Link>
                </li>
              ))}
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </main>

          <div className="sm:hidden dark:text-slate-300 text-base text-slate-800 cursor-pointer ">
            <Menu className="h-8 w-8" onClick={mobileBtn} />
          </div>
        </section>

        <MobileMenuToggle open={open} mobileBtn={mobileBtn} />
      </nav>
    </header>
  );
};

export default Navbar;
