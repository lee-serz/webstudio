import React, { useState } from "react";
import s from "./Form.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      // Отправка данных формы через Axios
      await axios.post("ваш_url", formData);

      // Устанавливаем состояние для отображения сообщения об успешной отправке
      setIsFormSubmitted(true);
    } catch (error) {
      // Обработка ошибок
      alert(`Ошибка при отправке данных формы:", ${error}`);
    }
  };

  return (
    <div className={s.form}>
      <div className={s.text}>ЗАПОЛНИТЕ ЗАЯВКУ</div>
      <div className={s.box}>
        <Link to="/">&times;</Link>
        <input
          placeholder="Имя"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          placeholder="Номер телефона"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          placeholder="Электронная почта"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          placeholder="Кратко опишите идею вашего будущего сайта"
          type="text"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Отправить</button>

        {isFormSubmitted && (
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
        )}
      </div>
    </div>
  );
};

export default Form;
