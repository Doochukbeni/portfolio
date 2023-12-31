"use client";

import ContactForm from "@/components/ContactForm";
import { Linkedin, Locate, Mail, Phone } from "lucide-react";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="text-center bg-white dark:bg-slate-800 h-full py-3 px-2">
      <h1 className="text-3xl font-bold flex items-center justify-center mt-8 tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl">
        Get In Touch
      </h1>
      <p className="mt-2 mb-8 text-lg font-semibold leading-8 dark:text-gray-200 text-gray-600">
        I look forward to hearing from you soon.
      </p>
      <h2 className="text-l font-semibold  text-gray-700 dark:text-gray-200 px-5 leading-8  text-justify sm:text-l">
        I am committed to crafting cutting-edge web applications that captivate
        users and deliver an exceptional online experience. With a proven track
        record of successfully developing and deploying innovative solutions, I
        take pride in my ability to bridge the gap between creative design and
        robust functionality.
      </h2>
      <div className="flex flex-col sm:flex-row gap-10">
        <div className="flex-1 text-start py-5 px-3">
          <address className="text-gray-700 dark:text-gray-200 flex items-center font-semibold gap-2 mt-10">
            <Locate /> Location:
            <span className="text-base text-gray-500 dark:text-indigo-400">
              Dubai,United Arab Emirates
            </span>
          </address>
          <br />
          {/* contact  */}
          <address className="text-gray-700 dark:text-gray-200 flex items-center font-semibold gap-2 mt-10">
            <Mail size={20} /> Email:
            <span className="text-base text-gray-500 dark:text-indigo-400">
              <a href="mailto:doochukbeni@gmail.com">doochukbeni@gmail.com</a>
            </span>
          </address>
          <br />
          <address className="text-gray-700 dark:text-gray-200 flex items-center font-semibold gap-2 mt-10">
            <Phone size={20} /> Mobile Number:
            <span className="text-base text-gray-500 dark:text-indigo-400">
              <a href="tel:+971567038842">+971567038842</a>
            </span>
          </address>
          <div className="flex relative mt-10 items-center justify-center sm:mt-20 gap-10">
            <div className="rounded-full h-10 w-10 flex justify-center items-center bg-slate-300 dark:bg-slate-200">
              <a href="https://github.com/Doochukbeni/">
                <Image
                  src="/brands/github.png"
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>
            </div>
            <div className="rounded-full h-10 w-10 flex justify-center items-center bg-slate-300 dark:bg-slate-200">
              <a href="https://www.facebook.com/profile.php?id=100071537837913">
                <Image
                  src="/brands/facebook.png"
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>
            </div>
            <div className="rounded-full h-10 w-10 flex justify-center items-center bg-slate-300 dark:bg-slate-200">
              <a href="https://twitter.com/doochukbeni11">
                <Image
                  src="/brands/twitter.png"
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>
            </div>
            <div className="rounded-full h-10 w-10 flex justify-center items-center bg-slate-300 dark:bg-slate-200">
              <a href="https://www.linkedin.com/in/benjamin-izummuo-83589b15b/">
                <Linkedin size={20} className="text-indigo-600 rounded-md" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
