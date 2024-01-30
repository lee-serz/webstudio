import React from "react";
import s from "./Header.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { anim_2, anim_3 } from "../../anim.js";

const Header = () => {
  return (
    <motion.header initial="hidden" whileInView={"visible"}>
      <motion.div variants={anim_2} className={s.nav}>
        <div className={s.item}>Главная</div>
        <div className={s.item}>О нас</div>
        <div className={s.item}>Контакты</div>
        <div className={s.item}>Портфолио</div>
      </motion.div>
      <motion.div variants={anim_3} className={s.order}>
        <Link to="/form" className={s.button}>
          Заказать проект
        </Link>
      </motion.div>
    </motion.header>
  );
};

export default Header;
