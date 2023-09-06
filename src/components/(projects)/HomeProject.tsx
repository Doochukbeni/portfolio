import React from "react";
import { projectList } from "./projectList";
import ProjectItem from "./ProjectItem";

const HomeProject = () => {
  return (
    <div className="flex flex-col w-full mx-auto my-5 gap-5">
      <h1 className="text-center font-semibold text-2xl text-slate-800 dark:text-slate-200 py-3">
        Select a Project to Explore
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:px-1 px-1 py-10 sm:py-10 lg:px-8 mx-auto w-full gap-5 ">
        {projectList.map((item) => (
          <ProjectItem
            url={`/projects/${item.id}`}
            title={item.title}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeProject;
