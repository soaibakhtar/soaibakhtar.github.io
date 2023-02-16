import {FaGithub,FaInstagram,FaLinkedin,FaUser,FaPhoneAlt,FaPaperPlane, FaHtml5, FaCss3, FaReact, FaNodeJs, FaSass, FaFigma} from "react-icons/fa"
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";




export const navLinks = ["home","about","skills","portfolio","contact","resume"]

export const socialIcons = [
  <a href="https://github.com/soaibakhtar"><FaGithub/></a>,
  <a href="https://www.instagram.com/soaib_akhtar_/"><FaInstagram /></a>,
  <a href="https://www.linkedin.com/in/soaib-akhtar-/"><FaLinkedin /></a>,
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Soaib Akhtar"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+916206379459"
  },
  {
    id : 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "soaiba43@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma />]

export const experiences = [
  {
    id : 1,
    year : "2023",
    position : "Full Stack Wed Developer",
    company : "Masai School"
  },
  {
    id : 2,
    year : "2020",
    position : "Intermediate +2 (Science)",
    company : "Jharkhand Commerce inter college"
  },
  {
    id : 3,
    year : "2018",
    position : "Higher Secondary Sehool 10th",
    company : "Delhi Board"
  },
]

export const finishes = [
  {
    id : 1,
    number : "1000+",
    itemName : "Hours of Coding"
  },
  {
    id : 2,
    number : "700+",
    itemName : "DSA Question Solved"
  },
  {
    id : 3,
    number : "20+",
    itemName : "Project"
  }
];

export const workImages = [
  {
    id : 1,
    // img : work
  }
]