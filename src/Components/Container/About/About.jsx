import React from 'react'
import {motion} from "framer-motion"
import Profile from "../../../Assets/Profile.png"
import {bios} from "../../../data"
import "./About.scss"
import Md_Soaib_Akhtar from "../../../Assets/Md_Soaib Akhtar_Resume .pdf"
function About() {
  return (
    <div className='container' id='about'>
      <motion.div
      initial={{opacity:1}}
      whileInView={{y: [-50,0],opacity: 1}}
      className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
        initial={{x:0, opacity:0}}
        whileInView={{x: [-250, 0], opacity:1}}
        transition={{duration:1}}
        className="about_left"
        >
          <motion.img
          src={Profile}
          whileHover={{y: -48, x: -55}}
          transition={{duration: 0.3}}
          />
        </motion.div>

        <motion.div className='about_right'
        initial={{x:0, opacity:0}}
        whileInView={{x: [250, 0], opacity: 1}}
        transition={{duration: 1}}
        >
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat tempora consectetur facilis corrupti aut.</p>
          {bios.map (bio => {
            return (
              <div className="bio" key={bio.id}>
                  <span className="bioKey">{bio.icon}{bio.key}</span>
                  <span className="bioValue">{bio.value}</span>
              </div>
            )
          })}
          <motion.a href='https://drive.google.com/file/d/11dO2FSrJv_KBJfxtXPfnDRrNgxzZwuri/view?usp=sharing' download="https://drive.google.com/file/d/11dO2FSrJv_KBJfxtXPfnDRrNgxzZwuri/view?usp=sharing"
          whileHover={{scale: 1.1}}
          transition={{duration:0.3}}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default About
