import React from "react";

const TestimonialsBackground = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.slate.900),black)] dark:opacity-70 opacity-20"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white dark:bg-slate-900 shadow-xl shadow-indigo-600/10 dark:shadow-slate-600/10 ring-1 dark:ring-slate-600 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
    </div>
  );
};

export default TestimonialsBackground;
