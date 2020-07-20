import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer";

import "./Footer.css";

import SocialContactLogo from "../SocialContactLogo/SocialContactLogo";

import linkedin from "../../images/Footer/linkedinWhite.png";
import github from "../../images/backgroundCodeWhite/github.png";
import twitter from "../../images/Footer/twitterWhite.png";
import blogger from "../../images/Footer/Blogger.png";
import flechaUp from "../../images/Paging/flechaUpWhite.png";

const socialContact = [
  {
    name: "linkedin",
    image: linkedin,
    source: "https://www.linkedin.com/in/manufernandezfreire/",
  },
  {
    name: "Git Hub",
    image: github,
    source: "https://github.com/mfernandezfreire",
  },
  {
    name: "Twitter",
    image: twitter,
    source: "https://twitter.com/manuferfreire",
  },
  {
    name: "Blogger",
    image: blogger,
    source:
      "https://www.notion.so/Manu-Fern-ndez-31dd7b40619b4380a033c571a148ca3e",
  },
];

const Footer = () => {
  return (
    <div
      className="Footer justify-content-center row mt-5 mb-0 bg-dark p-0"
      style={{ minHeight: "300px" }}
    >
      <div className="d-flex flex-column align-items-center justify-content-around">
        <motion.div
          className="col-2 col-sm-1"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            activeClass="active"
            to="Header"
            spy={true}
            smooth={true}
            duration={3000}
            style={{ cursor: "pointer" }}
          >
            <img
              src={flechaUp}
              className="img-fluid"
              alt="logo de linkedin"
              style={{ maxHeight: "200px" }}
            />
          </Link>
        </motion.div>
        <div className="row justify-content-center my-4">
          {socialContact.map((social, idx) => (
            <SocialContactLogo
              key={idx}
              name={social.name}
              image={social.image}
              source={social.source}
            />
          ))}
        </div>
        <div style={{ borderTop: "1px solid white" }}>
          <p
            className="text-center text-light mt-4 mb-0"
            style={{ fontSize: "1.25em" }}
          >
            Manuel Fernandez Freire ©
          </p>
          <p className="text-center text-light mt-0 mb-2">2020</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
