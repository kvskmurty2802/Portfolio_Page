import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            <b>About</b> Me!
          </h1>
          <p>
            Hi, my name is <b>K.V.S. Krishna Murty</b>. I'm a <b>Full Stack Web Developer</b> and 4th year
             student pursuing <b>B.Tech in Computer Science, IIIT Sricity College</b>. <br />
             <br />
            With a strong foundation in both front-end and back-end technologies, I specialize in building robust and 
            scalable web applications. My projects emphasize clean, maintainable code and intuitive user experiences. 
            Explore my portfolio in the projects section to see the range of my work.
            <br />
            <br />
            I'm eager to collaborate on exciting projects that challenge me and help me grow as a developer. 
            Whether it's contributing to open-source projects or working on innovative solutions, 
            I'm always ready to dive in. 
            <br />
            When I'm not coding, you can find me experimenting with graphic design, or capturing moments through photography.
          </p>
          <a href="https://drive.google.com/file/d/1ocLJTIUlUJ2sRxbkZqXwyd6WIfLKSpgW/view?usp=drive_link" 
          download className="resume-btn">
            <button>
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Npm" />
        <Skills skill="Figma" />
        <Skills skill="C++" />
      </div>
    </>
  );
};

export default About;
