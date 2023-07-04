import React from "react";
import Lottie from "lottie-react";
import { Title } from "../components";
import { skillset } from "../constants";
import { coder } from "../assets";

const Skillbox = ({ skillTitle, skillContent }) => (
  <div className="m-2 flex flex-col border border-dimWhite">
    <div className="border-b-[1px] p-2">{skillTitle}</div>
    <div className="p-2 text-dimWhite">{skillContent}</div>
  </div>
);

const Skills = () => {
  return (
    <div
      className="mx-[5%] mb-[50px] mt-[100px] scroll-mt-20 text-3xl text-white"
      id="skills"
    >
      <Title titleText="Skills" />

      <div className="my-5 flex flex-col justify-between text-center text-lg sm:flex-row">
        <div className=" m-auto w-[50%] ">
          <Lottie animationData={coder} />
        </div>
        <div className="grid-cols grid sm:grid-cols-2 md:ml-10 md:grid-cols-3">
          {skillset.map((skill) => (
            <Skillbox key={skill.skillTitle} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
