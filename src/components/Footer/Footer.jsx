import React from "react";
import s from "./Footer.module.css";
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

const Footer = () => {
  return (
    <motion.div initial="hidden" whileInView={"visible"} lassName={s.footer}>
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        variants={anim_3}
        className={s.text}
      >
        ㅤ
        <motion.span initial="hidden" whileInView={"visible"} variants={anim_2}>
          //
        </motion.span>
        Стартуем разработку вашего сайта или веб-приложения?
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        variants={anim_1}
        className={s.link}
      >
        — Оставить заявку
      </motion.div>
    </motion.div>
  );
};

export default Footer;
