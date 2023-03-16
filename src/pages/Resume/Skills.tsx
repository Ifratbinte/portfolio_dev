import React from "react";
interface SkillsProps {
  image: string;
  title: string;
}

const Skills = () => {
  return (
    <div className="flex items-center flex-nowrap justify-evenly">
      <div className="text-center min-h-15 w-10 my-4 mx-10">
        <img src="" alt="" />
        <p className="p-1"></p>
      </div>
    </div>
  );
};

export default Skills;