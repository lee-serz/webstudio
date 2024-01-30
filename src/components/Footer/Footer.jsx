import React from "react";
import s from "./Footer.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { anim_2, anim_3 } from "../../anim.js";

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
      <Link to="/form" className={s.link}>
        — Оставить заявку
      </Link>
    </motion.div>
  );
};

export default Footer;
