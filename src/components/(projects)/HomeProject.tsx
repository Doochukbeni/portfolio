import React from "react";
import { projectList } from "./projectList";
import ProjectItem from "./ProjectItem";

const HomeProject = () => {
  return (
    <div className="flex flex-col my-5 gap-10">
      <h1 className="text-center font-semibold text-2xl text-slate-800">
        Some Portfolio Projects
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:px-1 px-6 py-10 sm:py-10 lg:px-8 mx-auto  gap-5 mb-5">
        {projectList.map((item) => (
          <ProjectItem
            url={`/portfolio/${item.id}`}
            title={item.title}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeProject;
