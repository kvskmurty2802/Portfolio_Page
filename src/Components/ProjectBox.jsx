import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    PhoenixDesc:"This Phoenix website helps you find used products. A B.Tech group project that enhanced my understanding of API functionality.",
    PhoenixGithub: "https://github.com/parth-1711/WBD-Project.git",
    PhoenixWebsite: "https://wbd-project-g9tong9om-parth1711s-projects.vercel.app/",

    DummyJsonDesc:
      "This website helps me in Understanding JSON Structure: Learn to create and manage JSON data effectively with objects, arrays, and key-value pairs. Data Handling Fetch, parse, and dynamically display JSON using JavaScript and web technologies",
    DummyJsonGithub: "https://github.com/kvskmurty2802/DummyJson-API.git",
    DummyJsonWebsite: "https://dummy-json-api-eight.vercel.app/",

    GymDesc:
      "This website is a for a Gym to help with their Sales Marketing.",
    GymGithub: "https://github.com/kvskmurty2802/Gym_Website_TailwindCSS.git",
    GymWebsite: "",

    APIDesc:
      "This Website is Developed with TheMovieDB API.",
    APIGithub: "https://github.com/kvskmurty2802/TheMovieDB.git",
    APIWebsite: "https://themoviedb-sigma.vercel.app/",


  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
