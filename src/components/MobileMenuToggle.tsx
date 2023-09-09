import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import { Moon, Sun } from "lucide-react";

const MobileMenuToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <section className="absolute hidden right-0 top-0 bg-black w-full text-5xl flex-col justify-center">
      <div className="sm:hidden  max-w-3xl w-14 flex items-center justify-between rounded-2xl relative cursor-pointer p-1 border-slate-400 border-2 ">
        <button type="button" onClick={() => setTheme("light")}>
          <Moon className="h-5  w-5" color="white" />
        </button>
        <button type="button" onClick={() => setTheme("dark")}>
          <Sun color="yellow" className="w-  h-5" />
        </button>
        <div
          className=" absolute w-6 h-6 rounded-full bg-slate-700"
          style={theme === "light" ? { left: "2px" } : { right: "2px" }}
        />
      </div>
      <Button className="block sm:hidden dark:text-slate-800 text-base bg-slate-700 rounded-md dark:bg-slate-500 ">
        &#9776;
      </Button>
      <nav className="flex flex-col min-h-screen items-center py-8"></nav>
    </section>
  );
};

export default MobileMenuToggle;
