import React from "react";
import { Button, Title } from "../components";
import { gitlogo } from "../assets";
import { projectCards } from "../constants";

const ProjectCard = ({ title, techStack, link, poster, live }) => (
  <div className="m-[10px] flex transform flex-col border-2  border-dimWhite transition duration-300 hover:scale-105">
    <div className="flex items-center justify-center">
      <img src={poster} alt={title} className="object-contain" />
    </div>
    <div className="border-t-[2px] border-dimWhite px-2.5 py-1  text-lg text-dimWhite">
      <h4>{techStack}</h4>
    </div>
    <div className="border-t-[2px]  border-dimWhite p-2.5 text-2xl">
      <h2>{title}</h2>
      <br />
      <div className="flex flex-col text-lg sm_md:flex-row md:flex-col lg_xl:flex-row">
        <a href={link} target="_blank">
          <Button text="Check Project" />
        </a>

        <a
          href={live}
          target="_blank"
          className={`sm_md:ml-5 md:ml-0 lg_xl:ml-5 ${
            title === "EDA and Feature Engineering" ||
            title === "Employee Management System"
              ? "hidden"
              : "flex"
          }`}
        >
          <Button text="live ~~>" />
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div
      className="mx-[5%] mb-[50px] mt-[50px] scroll-mt-20 text-3xl text-white md:mt-[100px]"
      id="projects"
    >
      <div className="flex items-center justify-between">
        <Title titleText="Projects" />
        {/* <button className="group text-xl active:text-dimWhite">
          View all <span className="group-hover:text-primary">~~{`>`}</span>
        </button> */}
      </div>

      <div className="projectTiles my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projectCards.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}

        <div className="group m-[10px] flex transform flex-col justify-items-center  border-2 border-dimWhite bg-gradient-to-tr from-indigo-700 via-purple-700 to-pink-700 p-5 transition duration-300 hover:scale-105">
          <div className="flex items-center justify-center transition duration-500 group-hover:scale-125">
            <img src={gitlogo} alt="" className="m-10 h-[150px] w-[150px]" />
          </div>

          <a
            href="https://github.com/Sach-123?tab=repositories"
            target="_blank"
            className="rounded-lg border-2 border-dimWhite transition duration-300 hover:scale-105 active:text-black "
          >
            <h2 className="m-2 text-center">Visit GitHub for more projects</h2>
          </a>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
