import React from "react";
import { useState } from "react";

import { motion } from "framer";

import "./Project.css";

import Card from "../Card/Card";

const Project = (props) => {
  const [state, setState] = useState({
    hover: false,
  });

  const flipCard = () => {
    setState({ hover: !state.hover });
  };

  return (
    <div
      // onClick={flipCard}
      className="Project col-12 col-sm-6 col-lg-3 mx-4 my-4 p-2"
    >
      <Card
        name={state.hover ? "flip-on" : "flip-off"}
        {...props}
        flipCard={flipCard}
      />
    </div>
  );
};

export default Project;
