import React from "react";
import Zoom from "react-reveal/Zoom";
import { motion } from "framer";

const Button = (props) => {
  return (
    <Zoom delay={5000} duration={3000}>
      <div className="col-6 col-sm-3">
        <motion.button
          type="button"
          className="d-none d-sm-block btn btn-dark mx-3 btn-lg btn-block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {props.titulo}
        </motion.button>
        <motion.button
          type="button"
          className="d-sm-none btn btn-dark my-3 btn-sm btn-block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {props.titulo}
        </motion.button>
      </div>
    </Zoom>
  );
};

export default Button;
