import React from "react";
import ProjectBox from "./ProjectBox";
import DummyJson from "../images/DummyJson.png";
import PhoenixImage from "../images/PhoenixImage.png";
import GymImage from "../images/Gym1.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My Projects
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={PhoenixImage} projectName="Phoenix" />
        <ProjectBox projectPhoto={DummyJson} projectName="DummyJson" />
        <ProjectBox projectPhoto={GymImage} projectName="Gym" />
      </div>
    </div>
  );
};

export default Projects;
