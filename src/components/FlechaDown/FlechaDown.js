import React from "react";
import { useEffect } from "react";

import { motion, useAnimation } from "framer";
import { useInView } from "react-intersection-observer";

import flechaDown from "../../images/flechaDown.png";

const FlechaDown = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    console.log(inView, "Background");
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        scale: 0.9,
      }));
    }
  }, [controls, inView]);
  return (
    <div ref={ref} className="Background d-flex flex-row">
      <motion.img
        src={flechaDown}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
        transition={{
          delay: 9,
          duration: 3,
          yoyo: Infinity,
        }}
        alt="Logo de desarrollo web"
        style={{
          position: "absolute",
          bottom: "0vw",
          left: "46vw",
          width: "8vw",
          opacity: 1,
        }}
      />
    </div>
  );
};

export default FlechaDown;
