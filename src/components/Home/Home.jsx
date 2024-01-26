import React from "react";
import s from "./Home.module.css";
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
        <motion.button
          initial="hidden"
          whileInView={"visible"}
          variants={anim_1}
        >
          Заказать проект
        </motion.button>
        <motion.p initial="hidden" whileInView={"visible"} variants={anim_1}>
          А вдруг мы правы?
        </motion.p>
      </div>
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        variants={anim_3}
        className={s.gif}
      >
        <img src="/movie.gif" alt="" />
      </motion.div>
    </motion.div>
  );
};

export default Home;
