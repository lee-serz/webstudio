import React from "react";
import Carousel from "./Carousel/Carousel";
import s from "./Cases.module.css";
import { motion } from "framer-motion";
import { anim_2 } from "../../anim.js";

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
