import React, { useEffect } from "react";

import "./Profile.css";

import { motion, useAnimation } from "framer";

import { useInView } from "react-intersection-observer";

import BackgroundWorker from "../BackgroundWorker/BackgroundWorker";
import FlechaDown from "../FlechaDown/FlechaDown";

import fotoPerfil from "../../images/fotoPerfil.png";
import PersonalLogo from "../PersonalLogo/PersonalLogo";
import CodeLanguajes from "../CodeLanguajes/CodeLanguajes";

const Profile = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { duration: 4, delay: i * 0.7 },
      }));
    }
  }, [controls, inView]);

  return (
    <div className="Profile bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-6">
            <div className="row py-4 justify-content-center">
              <div className="col-8 col-sm-6 col-md-4 col-lg-5 my-md-auto">
                <img
                  className="img-fluid rounded"
                  alt="Imagen de prueba"
                  src={fotoPerfil}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-7">
                {" "}
                <h3 className="text-center">Sobre mí</h3>
                <p className="text-justify">
                  Full Stack Developer en &lt;<code>construción</code>
                  &gt;, diplomado en trabajo social, apasionado de las nuevas
                  tecnologías y de las ciencias sociales.
                </p>
                <p className="text-justify">
                  Hace un año decidi hacer una cambio laboral que en su momento
                  parecia un giro de 180º, pasar de ser trabajador social a web
                  developer. Y solo lo parecia porque no pueden existir mas
                  similitudes entre estas dos profesiones.... Trabajas con
                  personas y para personas, la escucha, asertividad, habilidades
                  sociales y el trabajo en equipo es son fundamentales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
