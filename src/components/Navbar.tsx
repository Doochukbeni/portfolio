"use client";

import Link from "next/link";
import { useTheme } from "next-themes";

import Image from "next/image";
import { navItems } from "@/components/navlinks";
import { Button } from "@/components/ui/Button";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const themeToggle = () => {
    setTheme("light" ? "dark" : "light");
  };
  return (
    <header className="sticky top-0 z-50 bg-slate-50 dark:bg-slate-900 py-3  border border-b shadow-sm  w-full  text-slate-800 darK:text-slate-300">
      <nav className="max-w-7xl mx-auto nav flex items-center px-3 justify-between ">
        <Link href="/" className="flex place-items-center text-2xl">
          <Image
            src="/IMG-20180122-WA0076-_1_.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>

        <div className="hidden sm:flex">
          <ul className="flex items-center  gap-7 ml-8 ">
            {navItems.map((nav) => (
              <li
                key={nav.id}
                className="link font-semibold text-slate-800 dark:text-slate-100"
              >
                <Link href={nav.url}>{nav.title}</Link>
              </li>
            ))}
            <Button type="button" size="sm" onClick={() => setTheme("light")}>
              Light
            </Button>
            <Button type="button" size="sm" onClick={() => setTheme("dark")}>
              Dark
            </Button>
            <Button className="block sm:hidden ">&#9776;</Button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
