import React from "react";
import { useState } from "react";

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
      className="Project col-12 col-sm-6 col-lg-3 mx-2 my-3"
      onClick={flipCard}
    >
      <Card
        key={props.idx}
        state={state.hover}
        name={state.hover ? "flip-on" : "flip-off"}
        {...props}
      />
    </div>
  );
};

export default Project;
