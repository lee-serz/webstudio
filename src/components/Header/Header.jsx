import React from "react";
import s from "./Header.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
