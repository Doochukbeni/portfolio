import React from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const HeroText = () => {
  return (
    <div className="flex flex-col flex-1 gap-5 mt-10 md:mt-0">
      <span className="text-2xl">Hi there !</span>

      <h1 className="text-4xl font-semibold ">I am Chukwuma Benjamin</h1>
      <p className="text-lg text-start">
        A Fullstack developer passionate about providing web application
        solutions through building scalable and top-notch user experience
        applications
      </p>

      <Button
        variant="default"
        size="default"
        className="p-5 max-w-fit border-2 border-slate-400 rounded-lg w-full"
      >
        <Link href="/contact">Contact</Link>
      </Button>
    </div>
  );
};

export default HeroText;
