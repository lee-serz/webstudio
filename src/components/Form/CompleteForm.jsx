import React from "react";
import s from "./Form.module.css";
const CompleteForm = () => {
  return (
    <div className={s.form}>
      <div className={s.box}>
        <img src="/check.png" alt="" />
        <div className={s.complete}>Заявка отправлена</div>
        <div className={(s.complete, s.small)}>
          Скоро наш менеджер с вами свяжется
        </div>
        <button>На главную</button>
      </div>
    </div>
  );
};

export default CompleteForm;
