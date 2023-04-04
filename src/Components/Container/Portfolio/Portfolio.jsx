import React from 'react'
import { motion } from 'framer-motion'
import { ProjectItems } from '../../../data'
import "./Portfolio.scss"
import { FiEye, FiGithub } from "react-icons/fi";

function Portfolio() {
  
  return (
    <div className='container' id='projects' >
      <motion.div
      initial={{opacity:0}}
      whileInView={{y:[-50,0],opacity:1}}
      className="title"
      >
        <span>My Work</span>
        <h1>Awesome Projects</h1>
      </motion.div>

      <motion.div
        initial={{x: 0 ,opacity: 0}}
        whileInView={{ x: [-250,0], opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{opacity: 0, y: -50}}
      className="workImages"
      >
        {ProjectItems.map((work,index)=>{
          return (
            <div className='workImage project-card'  key={work.id}>
              <img src={work.image} alt="" />
              <h3 className='project-title'>{work.title}</h3>
              <p className='project-description'>{work.Description}</p>
              <p className='project-tech-stack'>Tech Stack :- {work.Tech}</p>
              <motion.div
                initial={{opacity: 0}}
                whileHover={{ opacity: [0, 1] }}
                transition={{duration: 0.3 , ease: "easeInOut"}}
                className='hoverLayer'
              >
                  
                <motion.a href={work.GitHubLink}
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                 className="project-github-link"
                >
                  <FiGithub />
                </motion.a>
                  
                <motion.a href={work.Deployed}
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                 className="project-deployed-link"
                >
                  <FiEye />
                </motion.a>
              </motion.div>
            </div>
          )
        })}
      </motion.div>

      <motion.div
        initial={{x: 0 ,opacity: 0}}
          whileInView={{ x: [250,0], opacity: 1 }}
          transition={{duration: 1}}
        className="talk"
      >
        <div className="talk_left">
          <h3>so let's talk about <br /> <span>your next projects</span></h3>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{duration: 0.3}}
          className="talk_right">
          <a href="#contact"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>


    </div>
  )
}

export default Portfolio
