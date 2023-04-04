import React from "react";
import { motion } from "framer-motion";
import Profile from "../../../Assets/Profile.png";
import { bios } from "../../../data";
import "./About.scss";
import Md_Soaib_Akhtar from "../../../Assets/Md_Soaib Akhtar_Resume .pdf";
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
            A Skilled full stack developer with a specialization in MERN stack
            and have worked through 2000+ hrs in learning and building projects
            using a variety of powerful skills. Also Completed 100+ hrs of Soft
            Skill Training. quick learner who can quickly adapt to new
            environments. Looking for a challenging role in the industry to
            utilize skills and learn.
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
            href="https://drive.google.com/file/d/11dO2FSrJv_KBJfxtXPfnDRrNgxzZwuri/view?usp=share_link"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            onClick={() =>
              window.open(
                "https://drive.google.com/uc?export=download&id=11dO2FSrJv_KBJfxtXPfnDRrNgxzZwuri",
                "_blank"
              )
            }
            id="resume-link-2"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
