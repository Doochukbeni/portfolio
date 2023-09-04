import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative flex flex-1 w-full h-fit md:h-full ">
      <div className="absolute z-[10] top-2 md:top-20 right-10 h-60 md:h-96 w-60 bg-slate-500 opacity-10 rounded-full"></div>
      <div className="absolute z-[10] top-2 md:top-20 left-10 h-60 md:h-96 w-60 bg-slate-500 opacity-10 rounded-full"></div>
      <div
        className="absolute z-[10] top-0 right-40 hidden md:block h-60
      md:h-96 w-60 bg-slate-500 opacity-10 rounded-full"
      ></div>

      <div className="md:absolute md:top-20 flex mx-auto z-[20]  md:left-48">
        <Image
          src="/passport_photo.JPG"
          alt="Chukwuma Benjmain"
          width="384"
          height="512"
          className="w-60  h-60 md:w-60 md:h-auto shadow-xl  rounded-full mx-auto"
        />
      </div>
    </div>
  );
};

export default HeroImage;
