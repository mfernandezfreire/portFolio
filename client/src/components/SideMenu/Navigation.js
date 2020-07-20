import * as React from "react";
import { motion } from "framer";
import { MenuItem } from "./MenuItem";

import header from "../../images/sideMenu/header.png";
import profile from "../../images/sideMenu/profile.png";
import projects from "../../images/sideMenu/projects.png";
import contact from "../../images/sideMenu/contact.png";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const links = [
  { image: header, link: "Header" },
  { image: profile, link: "Profile" },
  { image: projects, link: "Projects" },
  { image: contact, link: "Contact" },
];

const Navigation = () => (
  <motion.ul variants={variants}>
    {links.map((link, idx) => (
      <MenuItem key={idx} image={link.image} link={link.link} />
    ))}
  </motion.ul>
);

export default Navigation;
