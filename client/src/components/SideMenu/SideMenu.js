import * as React from "react";

import "./SideMenu.css";

import { useRef } from "react";
import { motion, useCycle } from "framer";
import useDimensions from "./use-dimensions.js";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const SideMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className="SideMenu">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebar}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="backgroundSideMenu" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </div>
  );
};

export default SideMenu;
