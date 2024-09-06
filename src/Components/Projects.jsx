import React from "react";
import ProjectBox from "./ProjectBox";
import DummyJson from "../images/DummyJson.png";
import PhoenixImage from "../images/PhoenixImage.png";
import WeatherImage from "../images/Weather.png";
import TMDBImage from "../images/TMDB.png"
import Netflix from "../images/Netflix.png"
import Poke from "../images/PokeAPI.png"

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My Projects
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={TMDBImage} projectName="TMDB" />
        <ProjectBox projectPhoto={WeatherImage} projectName="Weather" />
        <ProjectBox projectPhoto={Netflix} projectName="Netflix" />
        <ProjectBox projectPhoto={Poke} projectName="PokeApi" />
        <ProjectBox projectPhoto={DummyJson} projectName="DummyJson" />
        <ProjectBox projectPhoto={PhoenixImage} projectName="Phoenix" />
      </div>
    </div>
  );
};

export default Projects;
