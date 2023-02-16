import React from 'react'
import {motion} from "framer-motion"
import Profile from "../../../Assets/Profile.png"
import "./Home.scss"
function Home() {
  const moreVariants = {
    animatep: {
      y: [0,-15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }
    }
  }

  return (
    <motion.div
    className='container' id='home'
    initial={{y: -15,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={
      {
        duration:2,
        delay:0.5
      }
    }
    >

      <div className="profile">
        <img src={Profile} alt="Profile Pic" />
      </div>

      <div className="profile_text">
        <h3 className="name">Hi, I'm <span>Soaib Akhtar</span></h3>
        <span className="job">Web Developer on India</span>
        <span className="text">Passionate<br/> to craft innovative <br/>web products.</span>
        <motion.a
        href='#contact'
        whileHover={{scale:1.1}}
        variants={moreVariants}
        animate="animation"
        >
          Connect with me
        </motion.a>
        <div className="web">
          Web Developer
        </div>
        <div className="ui">
          UI/UX Designer
        </div>
        <div className="freelance">
          Freelancer
        </div>
      </div>
    </motion.div>
  )
}

export default Home