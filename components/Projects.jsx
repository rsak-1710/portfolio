import Image from "next/image";
import Link from "next/link";
import React from "react";
import html1 from "../public/assets/projects/html1.jpeg";
import todo from "../public/assets/projects/todo.jpeg";
import ecom1 from "../public/assets/projects/ecom1.jpeg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Html-Universe"
            backgroundImg={html1}
            projectUrl="/htmlUniverse"
            tech="HTML,CSS,JS"
          />
          <ProjectItem
            title="TODO list App"
            backgroundImg={todo}
            projectUrl="/todo"
            tech="React JS"
          />
          <ProjectItem
            title="Ecommerce"
            backgroundImg={ecom1}
            projectUrl="/ecommerce"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
