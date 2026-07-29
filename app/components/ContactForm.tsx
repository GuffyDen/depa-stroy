"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-topline">
        <span>Заявка на консультацию</span>
        <span>≈ 1 минута</span>
      </div>

      <div className="field-row">
        <label>
          <span>Ваше имя</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Телефон</span>
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
      </div>

      <div className="field-row">
        <label>
          <span>Что нужно сделать</span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>
              Выберите услугу
            </option>
            <option>Ремонт квартиры под ключ</option>
            <option>Дизайн и комплектация</option>
            <option>Приёмка квартиры от застройщика</option>
          </select>
        </label>
        <label>
          <span>Площадь, м²</span>
          <input name="area" type="number" inputMode="numeric" min="1" />
        </label>
      </div>

      <label>
        <span>Несколько слов о задаче</span>
        <textarea name="comment" rows={3} />
      </label>

      <div className="form-submit">
        <button type="submit">
          Обсудить проект
          <span aria-hidden="true">↗</span>
        </button>
        <p>
          Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
        </p>
      </div>

      <p className="form-status" role="status" aria-live="polite">
        {submitted
          ? "Спасибо. Заявка принята — мы свяжемся с вами."
          : ""}
      </p>
    </form>
  );
}
