import * as React from "react";
import { motion } from "framer";
import { Link } from "react-scroll";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = (props) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder">
        <img
          src={props.image}
          alt="Imagen de logo ReactJS"
          className="img-fluid"
        />
      </div>
      <Link
        activeClass="active"
        className="text-placeholder"
        to={props.link}
        spy={true}
        smooth={true}
        duration={2000}
        style={{ cursor: "pointer" }}
      >
        {props.link}
      </Link>
    </motion.li>
  );
};
