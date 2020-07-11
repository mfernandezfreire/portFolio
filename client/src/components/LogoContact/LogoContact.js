import React from "react";
import { useState } from "react";

import { motion } from "framer";

import "./Logo.css";
import engranaje from "../../images/Logo/engranaje.png";
import manoDeSpock from "../../images/Logo/manoDeSpock.png";
import olivo from "../../images/Logo/olivo.png";
import cbIzquierdo from "../../images/Logo/cbIzquierdo.png";
import cbDerecho from "../../images/Logo/cbDerecho.png";

const LogoContact = () => {
  const [touched, setTouched] = useState(false);

  const variantGear = {
    notTouch: { rotate: 720 },
    touch: { rotate: -720 },
  };

  const variantCurlyLeft = {
    notTouch: { x: 0 },
    touch: { x: 6 },
  };

  const variantCurlyRigth = {
    notTouch: { x: 0 },
    touch: { x: -6 },
  };

  return (
    <div className="row justify-content-center my-2">
      <div className="col-10 col-sm-3">
        <div
          className="row"
          onMouseEnter={() => setTouched(!touched)}
          onMouseLeave={() => setTouched(!touched)}
        >
          <motion.img
            src={engranaje}
            className="img-fluid"
            alt="Engranaje"
            style={{ position: "relative" }}
            animate={touched ? "touch" : "notTouch"}
            variants={variantGear}
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
          <motion.img
            src={cbIzquierdo}
            className="img-fluid"
            alt="Curly Brace Izquierdo"
            style={{ position: "absolute" }}
            animate={touched ? "touch" : "notTouch"}
            variants={variantCurlyLeft}
            transition={{ duration: 2 }}
          />
          <motion.img
            src={cbDerecho}
            className="img-fluid"
            alt="Curly Brace Derecho"
            style={{ position: "absolute" }}
            animate={touched ? "touch" : "notTouch"}
            variants={variantCurlyRigth}
            transition={{ duration: 2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoContact;
