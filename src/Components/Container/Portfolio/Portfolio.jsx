import React from 'react'
import { motion } from 'framer-motion'
function Portfolio() {
  return (
    <div className='container' id='portfolio'>
      <motion.div
      initial={{opacity:0}}
      whileInView={{y:[-50,0],opacity:1}}
      className="title"
      >
        <span>My Work</span>
        <h1>Awesome Projects</h1>
      </motion.div>

      <motion.div
      initial={{opacity:0}}
      whileInView={{y:[-50,0],opacity:1}}
      className="buttons"
      >

      </motion.div>
    </div>
  )
}

export default Portfolio
