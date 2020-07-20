import React from "react";

import "./Profile.css";

import fotoPerfil from "../../images/FotoPerfil/fotoPerfil.png";

import Fade from "react-reveal/Fade";
import Background from "../Background/Background";
import CodeLanguajes from "../CodeLanguajes/CodeLanguajes";

const Profile = () => {
  return (
    <div
      className="Profile container-fluid"
      style={{ backgroundColor: " 	#E8E8E8" }}
    >
      <Background type={"personalBrand"} opacity={0.1} />
      <Fade duration={2000}>
        <h1 className="display-4 mb-3">Sobre mí</h1>
      </Fade>
      <div className="row justify-content-center my-3">
        <Fade duration={2000} delay={1000} left>
          <div className="col-6 col-md-3 col-lg-2">
            <img
              className="img-fluid rounded"
              alt="Imagen de prueba"
              src={fotoPerfil}
              style={{ width: "100%", maxWidth: "200px" }}
            />
          </div>
        </Fade>
        <Fade duration={2000} delay={1000} right>
          <div className="col-10 col-md-7 col-lg-6 mt-3 mt-sm-0">
            <p className="text-justify">
              Soy un web developer junior que proviene de un mundo laboral que
              se asemeja bien diferente, el trabajo social. Aunque, si te paras
              a pensar en lo que significa ser developer tiene mucho social.
              {/* Full Stack Developer en &lt;<code>construción</code>
              &gt;, diplomado en trabajo social, apasionado de las nuevas
              tecnologías y de las ciencias sociales. */}
            </p>
            <p className="text-justify">
              Trabajas con personas y para personas. La escucha, asertividad,
              empatía, capacidad de negoción es decir, todas las habilidades
              sociales básicas que fomenta mi profesión de origen son
              fundamentales para que un programdor sea un buen profesional.
              Aunar lo aprendido como trabajador social y web developer es más
              fácil de lo que te puedes imaginar.....
            </p>
          </div>
        </Fade>
      </div>
      <div className="row justify-content-center mt-0">
        <CodeLanguajes />
      </div>
    </div>
  );
};

export default Profile;
