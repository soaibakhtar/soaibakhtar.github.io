import React from 'react'
import { clName, navLinks, socialIcons } from '../../data'
import {HiMenuAlt4,HiX} from "react-icons/hi"
import "./Navbar.scss"
import {motion} from "framer-motion"
import { useState } from 'react'
import { useEffect } from 'react'
import SALOGO from "../../Assets/SALOGO.png"
const Navbar = () => {

    const [scroll, setScroll] = useState(false);
    const [toggle, setToggle] = useState(false)
    
    const menuVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 50,
            transition: {
                type: "tween",
                duration: 0.5,
            }
        }
    }
    const navLinkVariants = {
        hidden: {
            display: "none",
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: -30,
            transition: {
                delay: 0.7
            }
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20)
        })
    },[])
  return (
      <motion.div
          initial={{ y: -25 }}
          animate={{ y: -5 }}
          transition={{duration: 0.5}}
          className={scroll ? "header active" : "header"}>
          <div className="Nav_container" id='nav-menu'>
              <div className="logo">
                    <img src={SALOGO} alt="ProfileImg" />
              </div>
              <ul
                      className="nav_links"
                   >
                  {navLinks.map((navlink,index) => {
                      return <li key={index} className={clName[index] } >
                        {navLinks.length-1===index?<a  href='https://drive.google.com/file/d/11dO2FSrJv_KBJfxtXPfnDRrNgxzZwuri/view?usp=sharing' target="_blank" rel="noreferrer" download="Md_Soaib_Akhtar_Resume.pdf"  id="resume-button-1">{navLinks[navLinks.length-1]}</a>:<a href={`#${navlink}`}>{navlink}</a>}
                        </li>
                  })}
              </ul>
              <div className="social_icons" >
                  {socialIcons.map((socialIcon, index) => {
                  return (
                      <div key={index}>
                          {socialIcon}
                      </div>
                  )
              })}
              </div>
              <div className="menu" >
                  <HiMenuAlt4 onClick={() => {setToggle(true)}}/>
              </div>
              <motion.div className="closeMenu"
                          variants={menuVariants}
                          initial="hidden" animate= {toggle ?"visible": "hidden"}
                      >
              </motion.div>
              
          <motion.div
                  variants={navLinkVariants}
                  animate={toggle ? "visible" : "hidden"}
                  className="menuX"
              >
                  <HiX onClick={() => setToggle(false)}/>
                  {navLinks.map((navlink,index) => {
                      return <li
                          key={index}><a
                         
                          href={`#${navlink}`} onClick={() => setToggle(false)}>{navlink}</a></li>
                  })}
              </motion.div>
          </div>
    </motion.div>
  )
}

export default Navbar