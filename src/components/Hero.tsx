import React from "react";
import HeroImage from "@/components/Hero-image";
import HeroText from "@/components/Hero-text";

const Hero = () => {
  return (
    <div className="flex sm:flex-row-reverse md:h-[650px] mb-8 justify-center w-full flex-col items-center gap-5 mx-auto">
      <HeroImage />
      <HeroText />
    </div>
  );
};

export default Hero;
