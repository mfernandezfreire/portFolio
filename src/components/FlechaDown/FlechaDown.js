import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer";

import "./FlechaDown.css";

import flechaDown from "../../images/Paging/flechaDown.png";

const FlechaDown = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        scale: 0.6,
        transition: {
          delay: props.delay,
          duration: 3,
          yoyo: Infinity,
        },
      }));
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="FlechaDown row justify-content-center align-items-end"
    >
      <div className="col-2 col-sm-1">
        <div className="row">
          <motion.img
            src={flechaDown}
            alt="Logo de desarrollo web"
            className="img-fluid"
            initial={{ opacity: 0, scale: 0.2 }}
            animate={controls}
          />
        </div>
      </div>
    </div>
  );
};

export default FlechaDown;
