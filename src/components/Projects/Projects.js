import React from "react";

import "./Projects.css";

import Project from "../Project/Project";
import Background from "../Background/Background";

import LookingForMaecenas from "../../images/Tiles/LookingForMaecenas.png";
import PathOfProgrammer from "../../images/Tiles/PathOfProgrammer.png";
import SocialCoWorker from "../../images/Tiles/SocialCoWorker.png";
import portfolio from "../../images/Tiles/portfolio.png";
import todoMovieReduxApp from "../../images/Tiles/todoMovieReduxApp.png";

const Projects = () => {
  const projectsArray = [
    {
      titulo: "Portfolio",
      imagen: portfolio,
      descripcion: "Echale un vistazo al codigo de este portfolio",
      tecnologias: [
        "MongoDB",
        "Express",
        "NodeJS",
        "React",
        "Bootstrap",
        "Framer-motion",
        "React-Scroll",
      ],
      linkGit: "https://github.com/mfernandezfreire/portFolio",
      linkWebPage: "none",
      color: "#f7d79f",
    },
    {
      titulo: "SocialCoWorker",
      imagen: SocialCoWorker,
      descripcion: "Proyectos Sociales y Co-Working. Quien da más!",
      tecnologias: ["MongoDB", "Express", "NodeJS", "React"],
      linkGit: "https://github.com/mfernandezfreire/socialcowork",
      linkWebPage: "https://socialcoworker.herokuapp.com/Choose",
      color: "#fafae8",
    },
    {
      titulo: "LookingForMaecenas",
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
      color: "#8ca3a3",
    },
    {
      titulo: "PathOfProgrammer",
      imagen: PathOfProgrammer,
      descripcion: "Un videojuego basado en hechos reales...",
      tecnologias: ["Canvas", "Javascript", "HTML5", "CSS"],
      linkGit: "https://github.com/LauManProjects/LookingForMaecenas",
      linkWebPage: "none",
      color: "#f9d3e1",
    },
    {
      titulo: "todoMovieReduxApp",
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
      color: "#e9ecf0",
    },
  ];

  return (
    <div className="Projects">
      <Background type={"code"} />
      <h1 className="display-4">Proyectos</h1>
      <div className="row justify-content-center">
        <div className="col-9">
          <div className="row justify-content-center">
            {projectsArray.map((project) => (
              <Project {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
