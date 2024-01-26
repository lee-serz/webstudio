import React from "react";
import Carousel from "./Carousel/Carousel";
import s from "./Cases.module.css";
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

const Cases = () => {
  return (
    <motion.div initial="hidden" whileInView={"visible"} className={s.cases}>
      <motion.div variants={anim_2} className={s.title}>
        — Наши кейсы
      </motion.div>
      <Carousel />
    </motion.div>
  );
};

export default Cases;
