import React from "react";

import { motion } from "framer";

import "./FlechaDown.css";

import flechaDown from "../../images/Paging/flechaDown.png";

const FlechaDown = () => {
  return (
    <div className="FlechaDown row justify-content-center align-items-end">
      <div className="col-2 col-sm-1">
        <div className="row">
          <motion.img
            src={flechaDown}
            alt="Logo de desarrollo web"
            className="img-fluid"
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{
              opacity: 1,
              scale: 0.6,
            }}
            transition={{
              delay: 4,
              duration: 3,
              yoyo: Infinity,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FlechaDown;
