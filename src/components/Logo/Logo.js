import React from "react";

import { motion } from "framer";

import "./Logo.css";
import engranaje from "../../images/Logo/engranaje.png";
import manoDeSpock from "../../images/Logo/manoDeSpock.png";
import olivo from "../../images/Logo/olivo.png";
import cbIzquierdo from "../../images/Logo/cbIzquierdo.png";
import cbDerecho from "../../images/Logo/cbDerecho.png";

const Logo = () => {
  return (
    <div className="row justify-content-center my-2">
      <div className="col-6 col-sm-3">
        <div className="row">
          <motion.img
            src={engranaje}
            className="img-fluid"
            alt="Engranaje"
            style={{ position: "relative" }}
            animate={{ rotate: 720 }}
            transition={{ loop: Infinity, ease: "linear", duration: 90 }}
          />
          <motion.img
            src={manoDeSpock}
            className="img-fluid"
            alt="Mano de Spock"
            style={{ position: "absolute" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 3 }}
          />
          <motion.img
            src={olivo}
            className="img-fluid"
            alt="Hola de olivo"
            style={{ position: "absolute" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 3 }}
          />
          <motion.img
            src={cbIzquierdo}
            className="img-fluid"
            alt="Curly Braces Izquierdo"
            style={{ position: "absolute" }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 3, duration: 3 }}
          />
          <motion.img
            src={cbDerecho}
            className="img-fluid"
            alt="Curly Braces Derecho"
            style={{ position: "absolute" }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 3, duration: 3 }}
          />
        </div>
      </div>
      <div className="col-12">
        <motion.h1
          className="d-none d-sm-block display-4"
          initial={{ x: "40vw", opacity: 0 }}
          animate={{ opacity: 1, x: "0vw" }}
          transition={{ delay: 4, duration: 3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Manuel Fernández Freire
        </motion.h1>
        <motion.h1
          className="h1 d-sm-none"
          initial={{ x: "40vw", opacity: 0 }}
          animate={{ opacity: 1, x: "0vw" }}
          transition={{ delay: 4, duration: 3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Manuel Fernández Freire
        </motion.h1>
        <motion.h3
          class="h1 d-none d-sm-block"
          initial={{ x: "-40vw", opacity: 0 }}
          animate={{ opacity: 1, x: "0vw" }}
          transition={{ delay: 4, duration: 3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Web Developer
        </motion.h3>
        <motion.h3
          class="h3 d-sm-none"
          initial={{ x: "-40vw", opacity: 0 }}
          animate={{ opacity: 1, x: "0vw" }}
          transition={{ delay: 4, duration: 3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Web Developer
        </motion.h3>
      </div>
    </div>
  );
};

export default Logo;
