import React from "react";
import s from "./About.module.css";
import { motion } from "framer-motion";

const anim_1 = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const anim_2 = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const anim_3 = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const anim_4 = {
  hidden: {
    y: -150,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

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
      <motion.img
        initial="hidden"
        whileInView={"visible"}
        variants={anim_4}
        src="/we.png"
        alt=""
      />
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
