// Form.js
import React, { useState } from "react";
import s from "./Form.module.css";
import { Link } from "react-router-dom";
import submitFormData from "../../actions.js"; // Проверьте относительный путь к файлу
import AnimatedComponent from "../AnimatedComponent";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Сбрасываем ошибку при изменении значения поля
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Валидация на пустые поля
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = "Это поле не может быть пустым";
      }
    });

    // Валидация почты
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Введите корректный адрес электронной почты";
    }

    // Валидация номера телефона
    const phoneRegex = /^(\+?7|8)[\d]{10}$/; // Предполагается, что номер телефона состоит из 10 цифр
    if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Введите корректный номер телефона";
    }

    // Устанавливаем ошибки
    setErrors(newErrors);

    // Возвращаем, есть ли ошибки
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    try {
      if (validateForm()) {
        await submitFormData(formData, setIsFormSubmitted);
      }
    } catch (error) {
      alert("Упс... Что-то пошло не так. Попробуйте немного позже");
    }
  };

  return (
    <AnimatedComponent>
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
          <div className={s.error}>{errors.name}</div>
          <input
            placeholder="Номер телефона"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <div className={s.error}>{errors.phone}</div>
          <input
            placeholder="Электронная почта"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className={s.error}>{errors.email}</div>
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
    </AnimatedComponent>
  );
};

export default Form;
