import React, { useEffect } from "react";

import "./Header.css";

import { motion, useAnimation } from "framer";

import { useInView } from "react-intersection-observer";
import Logo from "../Logo/Logo";
import Background from "../Background/Background";
import FlechaDown from "../FlechaDown/FlechaDown";

const Header = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        x: "0vw",
        transition: { duration: 8, delay: i * 2 },
      }));
    }
  }, [controls, inView]);

  return (
    <div
      className="Header d-flex flex-column align-items-center bg-light justify-content-center"
      ref={ref}
    >
      <Background />
      <FlechaDown />
      <Logo />
      <motion.h1
        custom={0}
        className="display-4 m-4 p-1"
        initial={{ x: "40vw", opacity: 0 }}
        animate={controls}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Manuel Fernández Freire
      </motion.h1>
      <motion.h1
        custom={1}
        className="display-4 m-4 p-1"
        initial={{ x: "-40vw", opacity: 0 }}
        animate={controls}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Web Developer
      </motion.h1>
    </div>
  );
};

export default Header;
