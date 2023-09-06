import React from "react";
import Image from "next/image";

const AboutHeader = () => {
  return (
    <div>
      <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <Image
            className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src="/passport_photo.JPG"
            alt=""
            width="384"
            height="512"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium text-slate-700 dark:text-zinc-300">
                Hello there! I am a highly skilled Full Stack Web Developer with
                a wealth of experience in a diverse range of technologies,
                including ReactJS, Next.js, NodeJS, Tailwind CSS, React Redux,
                JavaScript, HTML, and CSS. With a passion for building immersive
                web experiences, I thrive on turning ideas into reality and
                delivering top-notch solutions that exceed expectations.
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                Chukwuma Benjamin Izummuo
              </div>
              <div className="text-slate-700 dark:text-slate-400">
                Fullstack ReactJS/NextJS software engineer.
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default AboutHeader;
