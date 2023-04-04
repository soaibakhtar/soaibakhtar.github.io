import React from "react";
import { motion } from "framer-motion";
import "./Github.scss";
import GitHubCalendar from "react-github-calendar";
function Github() {

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>My Github Contribution</span>
        <h1>Github Statistics</h1>
      </motion.div>

      <motion.div
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ x: [-250, 0], opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0, y: -50 }}
      className="react-activity-calendar"
      >     
      <GitHubCalendar username="soaibakhtar"  style={{"color":"white"}}/>   
      </motion.div>
      <div>
      <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=soaibakhtar" alt="" />
      <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=soaibakhtar&layout=compact" alt="" />
      <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=soaibakhtar" alt="" />
      </div>
    </div>
  );
}

export default Github;

// [![GitHub Streak](https://streak-stats.demolab.com?user=soaibakhtar&theme=dark&border=8C12F0&ring=8C12F0&fire=8C12F0&currStreakLabel=8C12F0)](https://git.io/streak-stats)

//[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=soaibakhtar&theme=dark&border=8C12F0&fire=8C12F0&ring=8C12F0&currStreakLabel=8C12F0)](https://git.io/streak-stats)
