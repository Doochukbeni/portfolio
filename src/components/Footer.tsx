import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center p-2 dark:bg-slate-800 bg-white  text-slate-500 darK:text-slate-300 ">
      <div className="">
        <p className="text-sm sm:text-lg">
          copyright &copy; All right reserved doochukbeni{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
