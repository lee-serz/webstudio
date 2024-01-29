import React from "react";
import s from "./Home.module.css";
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
    y: 100,
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

const Home = () => {
  return (
    <motion.div initial="hidden" whileInView={"visible"} className={s.home}>
      <div className={s.text}>
        <motion.p initial="hidden" whileInView={"visible"} variants={anim_1}>
          Мы 100%
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView={"visible"}
          variants={anim_2}
          className={s.big_text}
        >
          Увеличим вашу прибыль с помощью <span>продающего сайта</span>
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView={"visible"}
          variants={anim_3}
          className={s.hidden}
        >
          Конверсия в клик по кнопке ниже равна 47.35% Хочешь увеличить этот
          показатель?
        </motion.p>
        <Link to="/form" className={s.button}>
          Заказать проект

        </Link>
        <motion.p
          className={s.small}
          initial="hidden"
          whileInView={"visible"}
          variants={anim_1}
        >
          А вдруг мы правы?
        </motion.p>
      </div>
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        variants={anim_3}
        className={s.gif}
      >
        <img src="" alt="" />
      </motion.div>
    </motion.div>
  );
};

export default Home;
