import React from "react";
import Testimonial from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="text-center w-full my-10 py-5 mx-auto ">
      <h1 className="text-3xl font-semibold leading-3 dark:text-slate-200 text-slate-700 ">
        Testimonials
      </h1>
      <p className="leading-6 px-3 text-slate-600 dark:text-slate-300  font-semibold my-10">
        I have worked with different teams of developers to build a robust and
        scalable web applications
      </p>
      <main className=" grid lg:grid-cols-3 md:grid-cols-2 gap-8 items-center px-6 py-10 sm:py-10 lg:px-8 mx-auto max-w-7xl">
        <Testimonial
          logo={"/image.png"}
          image={"/dozie.png"}
          content={
            "Throughout our collaboration, Benjamin consistently delivered high-quality code on time, even under tight deadlines. He was a reliable and proactive team member, always willing to go the extra mile to ensure our projects' success."
          }
          name={"Duru Dozie"}
          position={"CTO Vigoplace"}
        />
        <Testimonial
          logo={"/image.png"}
          image={"/mrpaul.png"}
          content={
            "I wholeheartedly recommend Benjamin to any organization in need of a talented and versatile full-stack developer. He not only possesses the technical skills required for the job but also the qualities that make for a great teammate and contributor to any project."
          }
          name={"Mr Paul"}
          position={"Co Founder & Manager"}
        />
        <Testimonial
          logo={"/bend-d-trend.jpeg"}
          image={"/bend-d-trend.jpeg"}
          name={"Chukwuka"}
          content={
            "What sets Benjamin apart is not just his technical prowess, but also his strong communication and collaboration skills. He was always approachable and eager to share knowledge with the team, fostering a culture of continuous learning."
          }
          position={"CEO Bend D Trend"}
        />
      </main>
    </div>
  );
};

export default Testimonials;
