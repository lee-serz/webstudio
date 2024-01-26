import React from "react";
import s from "./Caroucel.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    title: `Сайт для создания онлайн-курсов "Всем бобра"`,
    description: `Разработали прототип сайта, UX / UI логику, создрали первые макеты и получили бабки`,
    img: `/case-1.png`,
  },
  {
    title: `Сайт-Портфолио`,
    description: `Разработали прототип сайта, UX / UI логику, создрали первые макеты и получили бабки`,
    img: `/case-2.png`,
  },
  {
    title: `Блог`,
    description: `Разработали прототип сайта, UX / UI логику, создрали первые макеты и получили бабки`,
    img: `/case-3.png`,
  },
];

export default Carousel;
