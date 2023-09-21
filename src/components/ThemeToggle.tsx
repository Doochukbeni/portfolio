"use client";
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="max-w-3xl w-14 flex items-center justify-between rounded-2xl relative cursor-pointer p-1 border-slate-400 border-2 transition duration-300 ease-in-out ">
      <button type="button" onClick={() => setTheme("light")}>
        <Moon className="h-5  w-5" color="white" />
      </button>
      <button type="button" onClick={() => setTheme("dark")}>
        <Sun color="yellow" className="w-  h-5" />
      </button>
      <div
        className={`absolute w-6 h-6 rounded-full bg-slate-700 ${
          theme === "light" ? "left-1" : "right-1"
        } transition-transform duration-300 ease-in-out`}
      />
    </div>
  );
};

export default ThemeToggle;
