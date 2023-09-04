import React from "react";
import HeroImage from "@/components/Hero-image";
import HeroText from "@/components/Hero-text";

const Hero = () => {
  return (
    <div className="flex sm:flex-row-reverse md:h-screen flex-col items-center gap-5 mx-auto">
      <HeroImage />
      <HeroText />
    </div>
  );
};

export default Hero;
