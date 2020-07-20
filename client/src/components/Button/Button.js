import React from "react";
import Zoom from "react-reveal/Zoom";

import { Link } from "react-scroll";

import { motion } from "framer";

const Button = (props) => {
  return (
    <Zoom delay={5000} duration={3000}>
      <div className="col-7 col-sm-3">
        <Link
          activeClass="active"
          className="d-none d-sm-block"
          to={props.link}
          spy={true}
          smooth={true}
          duration={props.duration}
          style={{ cursor: "pointer" }}
        >
          <motion.button
            type="button"
            className="d-none d-sm-block btn btn-dark mx-3 btn-lg btn-block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {props.titulo}
          </motion.button>
        </Link>
        <Link
          activeClass="active"
          className="d-sm-none"
          to={props.link}
          spy={true}
          smooth={true}
          duration={props.duration}
          style={{ cursor: "pointer" }}
        >
          <motion.button
            type="button"
            className="d-sm-none btn btn-dark my-3 btn-sm btn-block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {props.titulo}
          </motion.button>
        </Link>
      </div>
    </Zoom>
  );
};

export default Button;
