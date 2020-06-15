import React from "react";

import { motion } from "framer";

import "./Logo.css";
import engranaje from "../../images/engranaje.png";
import manoDeSpock from "../../images/manoDeSpock.png";
import olivo from "../../images/olivo.png";
import cbIzquierdo from "../../images/cbIzquierdo.png";
import cbDerecho from "../../images/cvDerecho.png";

const Logo = () => {
  return (
    <div className="Logo d-flex flex-column align-items-center bg-light justify-content-center p-0 m-0">
      <motion.img
        className="logoImg"
        src={engranaje}
        alt="engranaje de mi logo"
        animate={{ rotate: 720 }}
        transition={{ loop: Infinity, ease: "linear", duration: 90 }}
      />
      <motion.img
        className="logoImg"
        src={manoDeSpock}
        alt="mano de Spock"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      />
      <motion.img
        className="logoImg"
        src={olivo}
        alt="mano de Spock"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 5 }}
      />
      <motion.img
        className="logoImg"
        src={cbIzquierdo}
        alt="mano de Spock"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 5, duration: 5 }}
      />
      <motion.img
        className="logoImg"
        src={cbDerecho}
        alt="mano de Spock"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 5, duration: 5 }}
      />
    </div>
  );
};

export default Logo;
