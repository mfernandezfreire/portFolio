import React from "react";

import "./Projects.css";

import Project from "../Project/Project";
import Background from "../Background/Background";

import LookingForMaecenas from "../../images/LookingForMaecenas.png";
import PathOfProgrammer from "../../images/PathOfProgrammer.png";
import SocialCoWorker from "../../images/SocialCoWorker.png";
import portfolio from "../../images/portfolio.png";
import todoMovieReduxApp from "../../images/todoMovieReduxApp.png";

const Projects = () => {
  const projectsArray = [
    {
      imagen: portfolio,
      descripcion: "Echale un vistazo al codigo de este portfolio",
      tecnologias: ["MongoDB", "Express", "NodeJS", "React", "Bootstrap"],
      linkGit: "https://github.com/mfernandezfreire/portFolio",
      linkWebPage: "none",
    },
    {
      imagen: SocialCoWorker,
      descripcion: "Proyectos Sociales y Co-Working!",
      tecnologias: ["MongoDB", "Express", "NodeJS", "React"],
      linkGit: "https://github.com/mfernandezfreire/socialcowork",
      linkWebPage: "https://socialcoworker.herokuapp.com/Choose",
    },
    {
      imagen: LookingForMaecenas,
      descripcion: "Frente a la España vaciada, Mecenazgo de pueblos",
      tecnologias: [
        "MongoDB",
        "Express",
        "NodeJS",
        "Handlebars",
        "Un Gran Equipo",
      ],
      linkGit: "https://github.com/LauManProjects/LookingForMaecenas",
      linkWebPage: "https://lookingformaecenas.herokuapp.com/",
    },
    {
      imagen: PathOfProgrammer,
      descripcion: "Un videojuego basado en hechos reales...",
      tecnologias: ["Canvas", "Javascript", "HTML5", "CSS"],
      linkGit: "https://github.com/LauManProjects/LookingForMaecenas",
      linkWebPage: "https://lookingformaecenas.herokuapp.com/",
    },
    {
      imagen: todoMovieReduxApp,
      descripcion: "La mejor manera de aprender es programando...",
      tecnologias: [
        "MongoDB",
        "Express",
        "NodeJS",
        "React",
        "Redux",
        "Bootstrap",
      ],
      linkGit: "https://github.com/mfernandezfreire/todomoviereduxapp",
      linkWebPage: "none",
    },
  ];

  return (
    <>
      <div>
        <h1 className="display-4 bg-light m-0">Proyectos</h1>
      </div>
      <div className="Projects container-fluid bg-light">
        <Background />
        <div className="row justify-content-center p-4">
          {projectsArray.map((project) => (
            <Project {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
