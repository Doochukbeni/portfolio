import HomeProject from "@/components/(projects)/HomeProject";

const page = () => {
  return (
    <div className="min-h-full h-screen">
      <h1 className="text-3xl lg:text-5xl text-slate-700 my-10 dark:text-slate-300 font-bold text-center">
        These are some of my portfolio projects
      </h1>
      <HomeProject />
    </div>
  );
};

export default page;
