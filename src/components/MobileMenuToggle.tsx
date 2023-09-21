"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/components/navlinks";
import ThemeToggle from "./ThemeToggle";

interface MobileMenuToggleprops {
  open: boolean;
  mobileBtn: () => void;
}

const MobileMenuToggle = ({ open, mobileBtn }: MobileMenuToggleprops) => {
  return (
    <section>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            onClick={mobileBtn}
            className="modal-bg fixed inset-0 bg-black opacity-50 transition-opacity"
          ></div>
          <div className="text-5xl flex-col absolute top-0 right-0 py-0  min-h-screen justify-center w-72 bg-slate-200 dark:bg-black shadow-lg transform translate-y-0 transition-transform ease-in-out duration-500">
            <X
              onClick={mobileBtn}
              size={40}
              className="active:scale-90 transition-colors absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  ring-offset-background"
            />

            <nav className="flex flex-col py-8">
              <ul className="flex flex-col text-left justify-center mt-20  gap-7 ml-8 ">
                {navItems.map((nav) => (
                  <li
                    key={nav.id}
                    onClick={mobileBtn}
                    className="font-semibold text-slate-800 dark:text-slate-200 hover:text-slate-600 hover:underline hover:decoration-slate-50"
                  >
                    <Link href={nav.url}>{nav.title}</Link>
                  </li>
                ))}
                <li className="mt-8">
                  <ThemeToggle />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </section>
  );
};

export default MobileMenuToggle;
