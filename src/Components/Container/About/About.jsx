import React from "react";
import { motion } from "framer-motion";
import Profile from "../../../Assets/Profile.png";
import { bios } from "../../../data";
import "./About.scss";
function About() {
  return (
    <div className="container about section" id="about">
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
        id="user-detail-name"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
        >
          <motion.img
            src={Profile}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
            className="home-img"
          />
        </motion.div>

        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p id="user-detail-intro">
          A passionate and adaptable full stack web developer, skilled in React,JavaScript, Node JS, Express, MongoDB,
            with proficiency in problem-solving. A dependable and responsible team player with an eye to detail. Looking
            for a position to enhance once skills while significantly contributing to the company's growth.
          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="bioKey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue" id={bio.id}>
                  {bio.value}
                </span>
              </div>
            );
          })}
          
          <motion.a
            href="https://drive.google.com/uc?id=11dO2FSrJv_KBJfxtXPfnDRrNgxzZwuri&export=download"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            target="_blank"
            rel="noreferrer"
            download="Md_Soaib_Akhtar_Resume.pdf"
            id="resume-button-2"
            className="nav-link resume"
          >
            Download Resume
          </motion.a>
          
        </motion.div>
      </div>
    </div>
  );
}

export default About;
