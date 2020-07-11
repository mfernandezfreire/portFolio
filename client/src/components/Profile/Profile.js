import React from "react";

import "./Profile.css";

import fotoPerfil from "../../images/FotoPerfil/fotoPerfil.png";
import flechaDown from "../../images/Paging/flechaDownWhite.png";
import flechaUp from "../../images/Paging/flechaUpWhite.png";

import Fade from "react-reveal/Fade";
import Background from "../Background/Background";
import CodeLanguajes from "../CodeLanguajes/CodeLanguajes";

const Profile = () => {
  return (
    <div
      className="Profile container-fluid"
      style={{ backgroundColor: " #292b2c" }}
    >
      <Background type={"personalBrand"} />
      <Fade duration={2000}>
        <h1 className="display-4 mb-3">Sobre mí</h1>
      </Fade>
      <div className="row justify-content-center my-3">
        <Fade duration={2000} delay={1000} left>
          <div className="col-6 col-sm-3 col-lg-2">
            <img
              className="img-fluid rounded"
              alt="Imagen de prueba"
              src={fotoPerfil}
              style={{ width: "100%", maxWidth: "200px" }}
            />
          </div>
        </Fade>
        <Fade duration={2000} delay={1000} right>
          <div className="col-10 col-sm-7 col-lg-6 mt-3 mt-sm-0">
            <p className="text-justify">
              Full Stack Developer en &lt;<code>construción</code>
              &gt;, diplomado en trabajo social, apasionado de las nuevas
              tecnologías y de las ciencias sociales.
            </p>
            <p className="text-justify">
              Hace un año decidi hacer una cambio laboral que en su momento
              parecia un giro de 180º, pasar de ser trabajador social a web
              developer. Y solo lo parecia porque no pueden existir mas
              similitudes entre estas dos profesiones.... Trabajas con personas
              y para personas, la escucha, asertividad, habilidades sociales y
              el trabajo en equipo es son fundamentales.
            </p>
          </div>
        </Fade>
      </div>
      <div className="row justify-content-center mt-0">
        <CodeLanguajes />
      </div>
      <div className="row justify-content-center my-4 mx-0">
        <div className="col-1">
          <img
            src={flechaDown}
            className="img-fluid"
            style={{ maxWidth: "60px", maxHeight: "60px" }}
            alt="Imagen Up"
          />
        </div>
        <div className="col-1">
          <img
            src={flechaUp}
            className="img-fluid"
            style={{ maxWidth: "60px", maxHeight: "60px" }}
            alt="Imagen Up"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
