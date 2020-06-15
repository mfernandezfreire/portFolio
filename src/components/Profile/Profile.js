import React, { useEffect } from "react";

import "./Profile.css";

import { motion, useAnimation } from "framer";

import { useInView } from "react-intersection-observer";

import BackgroundWorker from "../BackgroundWorker/BackgroundWorker";
import FlechaDown from "../FlechaDown/FlechaDown";

import fotoPerfil from "../../images/fotoPerfil.png";
import CodeLanguajes from "../CodeLanguajes/CodeLanguajes";

const Profile = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    console.log(inView);
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
      }));
    }
  }, [controls, inView]);

  return (
    <div className="Profile d-flex flex-column align-items-center bg-light">
      <BackgroundWorker />
      <FlechaDown />
      <div>
        <motion.div
          ref={ref}
          className="foto d-flex flex-column align-items-center justify-content-center p-4"
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ delay: 2, duration: 5 }}
        >
          <div className="col-12 col-md-3">
            <img
              className="img-fluid rounded"
              src={fotoPerfil}
              alt="Foto de perfil"
            />
          </div>
          <h3 className="col-12 col-md-6">Sobre mí</h3>
          <p className="col-10 col-md-6 text-justify px-2">
            Full Stack Developer en &lt;<code>construción</code>&gt;, diplomado
            en trabajo social, apasionado de las nuevas tecnologías y de las
            ciencias sociales.
          </p>
          <p className="col-10 col-md-6 text-justify px-2">
            Soy un firme defensor de la alfabetización digital de la sociedad y
            las posibilidades que brinda en el cambio social.
          </p>
        </motion.div>
      </div>
      <CodeLanguajes />
    </div>
  );
};

export default Profile;
