import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    PhoenixDesc:"This Phoenix website helps you find used products. A B.Tech group project that enhanced my understanding of TMDB functionality.",
    PhoenixGithub: "https://github.com/parth-1711/WBD-Project.git",
    PhoenixWebsite: "https://wbd-project-g9tong9om-parth1711s-projects.vercel.app/",

    DummyJsonDesc:
      "This website helps me in Understanding JSON Structure: Learn to create and manage JSON data effectively with objects, arrays, and key-value pairs. Data Handling Fetch, parse, and dynamically display JSON using JavaScript and web technologies",
    DummyJsonGithub: "https://github.com/kvskmurty2802/DummyJson-TMDB.git",
    DummyJsonWebsite: "https://dummy-json-api-eight.vercel.app/",

    WeatherDesc:
      "An Awesome Web Application powered by the OpenWeather TMDB to fetch Weather Data.",
    WeatherGithub: "https://github.com/kvskmurty2802/Weather_Page.git",
    WeatherWebsite: "https://weather-page-eight.vercel.app/",

    TaskDesc:
      "This Website is Developed with TheMovieDB API.",
    TaskGithub: "https://github.com/kvskmurty2802/React-Task-Manager",
    TaskWebsite: "https://react-task-manager-liart.vercel.app/",

    TMDBDesc:
      "This Website is Developed with TheMovieDB API.",
    TMDBGithub: "https://github.com/kvskmurty2802/TheMovieDB.git",
    TMDBWebsite: "https://themoviedb-wine.vercel.app/",

    PokeApiDesc:
    "This Website is Developed with PokeApi.",
    PokeApiGithub: "https://github.com/kvskmurty2802/PokeAPI-Integration",
    PokeApiWebsite: "https://pokeapi-integration.vercel.app/",
    
    NetflixDesc:
    "This Website is Netflix CLone.",
    NetflixGithub: "https://github.com/kvskmurty2802/Netflix_Clone",
    NetflixWebsite: "",
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
