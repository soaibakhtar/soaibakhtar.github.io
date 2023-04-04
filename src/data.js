import {FaGithub,FaInstagram,FaLinkedin,FaUser,FaPhoneAlt,FaPaperPlane, FaHtml5, FaCss3, FaReact, FaNodeJs, FaSass, FaFigma, FaMapMarkerAlt} from "react-icons/fa"
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import Work1 from "./Assets/Work1.png"



export const navLinks = ["home","about","skills","projects","contact","resume"]
export const clName = ["nav-link home","nav-link about","nav-link skills","nav-link projects","nav-link contact","nav-link resume"]
export const socialIcons = [
  <a href="https://github.com/soaibakhtar" id="contact-github"><FaGithub/></a>,
  <a href="https://www.instagram.com/soaib_akhtar_/"><FaInstagram /></a>,
  <a href="https://www.linkedin.com/in/soaib-akhtar-/" id="contact-linkedin"><FaLinkedin /></a>,
]

export const bios = [
  {
    id: "name",
    icon: <FaUser />,
    key: "Name",
    value: "Soaib Akhtar"
  },
  {
    id: "contact-phone",
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+916206379459"
  },
  {
    id : "contact-email",
    icon: <FaPaperPlane />,
    key: "Email",
    value: "soaiba43@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma />]
export const iconsName = ["HTML","CSS","JAVASCRIPT","TYPESCRIPT","REACT","NODE JS","SCSS","FIGMA"]
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


export const ProjectItems = [
  {
    id : 1,
    title : "Buffer.com ( Clone )",
    image : Work1,
    Description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    Tech : "HTML | Css | JavaScript",
    GitHubLink : "https://github.com/soaibakhtar/Buffer.com-Clone-",
    Deployed : "https://sparkling-snickerdoodle-3c7bc0.netlify.app/"
  },
  {
    id : 2,
    title : "Buffer.com ( Clone )",
    image : Work1,
    Description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    Tech : "HTML | Css | JavaScript",
    GitHubLink : "https://github.com/soaibakhtar/Buffer.com-Clone-",
    Deployed : "https://sparkling-snickerdoodle-3c7bc0.netlify.app/"
  },
  {
    id : 3,
    title : "Buffer.com ( Clone )",
    image : Work1,
    Description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    Tech : "HTML | Css | JavaScript",
    GitHubLink : "https://github.com/soaibakhtar/Buffer.com-Clone-",
    Deployed : "https://sparkling-snickerdoodle-3c7bc0.netlify.app/"
  },
  {
    id : 4,
    title : "Buffer.com ( Clone )",
    image : Work1,
    Description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    Tech : "HTML | Css | JavaScript",
    GitHubLink : "https://github.com/soaibakhtar/Buffer.com-Clone-",
    Deployed : "https://sparkling-snickerdoodle-3c7bc0.netlify.app/"
  },
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Bhandaridih, Giridih, Jharkhand"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "soaiba43@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+916206379459"
  }
]