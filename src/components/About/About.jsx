import React from "react";
import s from "./About.module.css";
import { motion } from "framer-motion";
import { anim_1, anim_3, anim_4 } from "../../anim.js";

const About = () => {
  return (
    <motion.div initial="hidden" whileInView={"visible"} className={s.about}>
      <motion.p
        initial="hidden"
        whileInView={"visible"}
        variants={anim_1}
        className={s.about_text}
      >
        — О нас
      </motion.p>
      <img className={s.we} src="/we.png" />
      <div className={s.gif}>
        <img src="stack.gif" alt="" />
      </div>
      <motion.p
        initial="hidden"
        whileInView={"visible"}
        variants={anim_3}
        className={s.techno}
      >
        Какие технологии мы используем?
      </motion.p>
      <div className={s.stack}>
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={anim_1}
          className={s.item}
        >
          <span>[</span> <span className={s.bold}>Frontend</span> <span>]</span>{" "}
          HTML5, CSS3, JavaScript, React
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={anim_3}
          className={s.item}
        >
          <span>[</span> <span className={s.bold}>Backend</span> <span>]</span>{" "}
          Java Spring Boot, PostgreSQL
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={anim_1}
          className={s.item}
        >
          <span>[</span> <span className={s.bold}>DevOps</span> <span>]</span>{" "}
          Docker, Traefik, Cloudflare
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
