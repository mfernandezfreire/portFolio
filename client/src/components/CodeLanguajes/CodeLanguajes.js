import React from "react";

import Fade from "react-reveal/Fade";

import "./CodeLanguajes.css";

import reactJS from "../../images/backgroundCodeWhite/reactJS.png";
import html5 from "../../images/backgroundCodeWhite/html5.png";
import css from "../../images/backgroundCodeWhite/css.png";
import js from "../../images/backgroundCodeWhite/js.png";
import mongo from "../../images/backgroundCodeWhite/mongo.png";
import github from "../../images/backgroundCodeWhite/github.png";
import angular from "../../images/backgroundCodeWhite/angular.png";
import nodeJS from "../../images/backgroundCodeWhite/nodeJS.png";
import bootstrap from "../../images/backgroundCodeWhite/bootstrap.png";

import analisis from "../../images/softSkills/analisis.png";
import creatividadInnovacion from "../../images/softSkills/creatividadInnovacion.png";
import publicOrientation from "../../images/softSkills/publicOrientation.png";
import teaching from "../../images/softSkills/teaching.png";
import teamWork from "../../images/softSkills/teamWork.png";

const languajes = [
  { name: "ReactJS", variable: reactJS },
  { name: "Angular", variable: angular },
  { name: "Javascript", variable: js },
  { name: "NodeJS", variable: nodeJS },
  { name: "Html5", variable: html5 },
  { name: "CSS", variable: css },
  { name: "MongoDB", variable: mongo },
  { name: "Github", variable: github },
  { name: "bootstrap", variable: bootstrap },
];

const softSkills = [
  { name: "Trabajo en equipo", variable: teamWork },
  { name: "Transmisión del conocimiento", variable: teaching },
  { name: "Innovación y creatividad", variable: creatividadInnovacion },
  { name: "Capacidad de Analisis", variable: analisis },
  { name: "Orientación al público", variable: publicOrientation },
];

const CodeLanguajes = (props) => {
  return (
    <div ref={props.ref} className="row justify-content-center">
      <Fade duration={2000}>
        <div className="col-12 mb-3 mb-sm-0">
          <h2 className="h1">Skills</h2>
        </div>
      </Fade>
      <Fade duration={2000} delay={1000} left>
        <div className="col-12 col-sm-3">
          <div className="row justify-content-center">
            <div className="col-12 mb-3">
              <h2 className="h2">Hard Skills</h2>
            </div>
            {languajes.map((lang) => (
              <div className="col-4">
                <div className="row">
                  <div className="col-12">
                    <img
                      src={lang.variable}
                      alt="icono de lenguaje"
                      className="img-fluid"
                      style={{ width: "100%", maxWidth: "75px" }}
                    />
                  </div>
                  <div className="col-12">
                    <p>{lang.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fade>
      <Fade duration={2000} delay={1000} right>
        <div className="col-12 offset-sm-1 col-sm-3">
          <div className="row justify-content-center">
            <div className="col-12 mb-3">
              <h2 className="h2">Soft Skills</h2>
            </div>
            {softSkills.map((lang) => (
              <div className="col-4">
                <div className="row">
                  <div className="col-12">
                    <img
                      src={lang.variable}
                      alt="icono de lenguaje"
                      className="img-fluid"
                      style={{ width: "100%", maxWidth: "75px" }}
                    />
                  </div>
                  <div className="col-12">
                    <p>{lang.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default CodeLanguajes;
