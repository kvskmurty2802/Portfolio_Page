import React from "react";
import ProjectBox from "./ProjectBox";
import DummyJson from "../images/DummyJson.png";
import PhoenixImage from "../images/PhoenixImage.png";
import GymImage from "../images/Gym1.png";
import APIImage from "../images/API.png"

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My Projects
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={APIImage} projectName="API" />
        <ProjectBox projectPhoto={DummyJson} projectName="DummyJson" />
        <ProjectBox projectPhoto={PhoenixImage} projectName="Phoenix" />
        <ProjectBox projectPhoto={GymImage} projectName="Gym" />
      </div>
    </div>
  );
};

export default Projects;
