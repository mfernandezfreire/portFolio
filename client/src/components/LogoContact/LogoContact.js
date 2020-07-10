import React from "react";

import { motion } from "framer";

import "./Logo.css";
import engranaje from "../../images/Logo/engranaje.png";
import manoDeSpock from "../../images/Logo/manoDeSpock.png";
import olivo from "../../images/Logo/olivo.png";
import cbIzquierdo from "../../images/Logo/cbIzquierdo.png";
import cbDerecho from "../../images/Logo/cbDerecho.png";

const LogoContact = () => {
  return (
    <div className="row justify-content-center my-2">
      <div className="col-10 col-sm-3">
        <div className="row">
          <motion.img
            src={engranaje}
            className="img-fluid"
            alt="Engranaje"
            style={{ position: "relative" }}
            animate={{ rotate: 720 }}
            transition={{ loop: Infinity, ease: "linear", duration: 90 }}
          />
          <img
            src={manoDeSpock}
            className="img-fluid"
            alt="Mano de Spock"
            style={{ position: "absolute" }}
          />
          <img
            src={olivo}
            className="img-fluid"
            alt="Hola de olivo"
            style={{ position: "absolute" }}
          />
          <img
            src={cbIzquierdo}
            className="img-fluid"
            alt="Curly Braces Izquierdo"
            style={{ position: "absolute" }}
          />
          <img
            src={cbDerecho}
            className="img-fluid"
            alt="Curly Braces Derecho"
            style={{ position: "absolute" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoContact;
