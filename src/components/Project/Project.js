import React from "react";
import { useState } from "react";

import { motion } from "framer";

import "./Project.css";

import Card from "../Card/Card";

const Project = (props) => {
  console.log(props.custom);
  const [state, setState] = useState({
    hover: false,
  });

  const flipCard = () => {
    setState({ hover: !state.hover });
  };

  return (
    <motion.div
      custom={props.custom}
      className="Project col-12 col-sm-6 col-lg-4 my-3 p-2"
      onClick={flipCard}
      initial={{ opacity: 0 }}
      animate={props.animate}
    >
      <Card name={state.hover ? "flip-on" : "flip-off"} {...props} />
    </motion.div>
  );
};

export default Project;
