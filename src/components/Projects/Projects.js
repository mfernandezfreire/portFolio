import React, { useEffect } from "react";

import "./Projects.css";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer";

import Project from "../Project/Project";
import Background from "../Background/Background";

import LookingForMaecenas from "../../images/LookingForMaecenas.png";
import PathOfProgrammer from "../../images/PathOfProgrammer.png";
import SocialCoWorker from "../../images/SocialCoWorker.png";
import portfolio from "../../images/portfolio.png";
import todoMovieReduxApp from "../../images/todoMovieReduxApp.png";
import FlechaDown from "../FlechaDown/FlechaDown";

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { duration: 3, delay: i * 0.7 },
      }));
    }
  }, [controls, inView]);

  const projectsArray = [
    {
      titulo: "Portfolio",
      imagen: portfolio,
      descripcion: "Echale un vistazo al codigo de este portfolio",
      tecnologias: ["MongoDB", "Express", "NodeJS", "React", "Bootstrap"],
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
    <div ref={ref} className="bg-light">
      <Background />
      <div className="Projects container-fluid bg-light">
        <motion.h1 custom={0} initial={{ opacity: 0 }} animate={controls}>
          Proyectos
        </motion.h1>
        <div className="row justify-content-center p-4">
          {projectsArray.map((project, idx) => (
            <Project {...project} animate={controls} custom={idx + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
