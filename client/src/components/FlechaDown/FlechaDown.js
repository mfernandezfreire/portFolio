import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer";

import "./FlechaDown.css";

import flechaDown from "../../images/Paging/flechaDown.png";

const FlechaDown = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        scale: 1,
        transition: {
          delay: 5,
          duration: 3,
          yoyo: Infinity,
        },
      }));
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="FlechaDown row justify-content-center align-items-end p-3"
    >
      <div className="col-12">
        <motion.img
          src={flechaDown}
          alt="Logo de desarrollo web"
          className="img-fluid"
          style={{ maxWidth: "60px", maxHeight: "60px" }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={controls}
        />
      </div>
    </div>
  );
};

export default FlechaDown;
