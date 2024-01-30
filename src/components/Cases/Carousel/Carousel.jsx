import React from "react";
import s from "./Caroucel.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { anim_1, anim_3, anim_4 } from "../../../anim.js";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <motion.div initial="hidden" whileInView={"visible"} className={s.carousel}>
      <div className={s.wrapper}>
        <Slider {...settings}>
          {data.map((d) => (
            <motion.div variants={anim_4} className={s.item}>
              <div className={s.image}>
                <img src={d.img} alt="" />
              </div>
              <motion.div variants={anim_1} className={s.title}>
                {d.title}
              </motion.div>
              <motion.div variants={anim_3} className={s.description}>
                {d.description}
              </motion.div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

const data = [
  {
    title: `Сайт-Портфолио`,
    description: `Разработали прототип сайта, UX / UI логику, создрали первые макеты и получили бабки`,
    img: `/novik.jpg`,
  },
  {
    title: `Блог`,
    description: `Разработали прототип сайта, UX / UI логику, создрали первые макеты и получили бабки`,
    img: `/vlad.jpg`,
  },
];

export default Carousel;
