import React from "react";
import s from "./Form.module.css";
import { Link } from "react-router-dom";
const Form = () => {
  return (
    <div className={s.form}>
      <div className={s.text}>ЗАПОЛНИТЕ ЗАЯВКУ</div>
      <div className={s.box}>
        <Link to="/">&times;</Link>
        <input placeholder="Имя" type="text" />
        <input placeholder="Номер телефона" type="text" />
        <input placeholder="Электронная почта" type="text" />
        <input
          placeholder="Кратко опишите идею вашего будущего сайта"
          type="text"
        />
        <button>Отправить</button>
        <div className={s.completeform}>
          <div className={s.box}>
            <img src="/check.png" alt="" />
            <div className={s.complete}>Заявка отправлена</div>
            <div className={(s.complete, s.small)}>
              Скоро наш менеджер с вами свяжется
            </div>
            <div className={s.button}>
              <Link to="/">На главную</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
