"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { Logo } from "./components/Logo";
import {
  companyConfig,
  disciplines,
  materialStories,
  navItems,
} from "./site-config";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main>
      <section className="brand-hero" id="top" aria-labelledby="hero-title">
        <div className="hero-panel">
          <header className="brand-header">
            <a className="brand-link" href="#top" aria-label={`${companyConfig.brandName}, на главную`}>
              <Logo
                className="brand-logo"
                variant="light-background"
                showTagline={false}
              />
            </a>

            <nav className={`brand-nav ${menuOpen ? "is-open" : ""}`} aria-label="Основная навигация">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              className="menu-button"
              type="button"
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span>{menuOpen ? "Закрыть" : "Меню"}</span>
              <i aria-hidden="true" />
            </button>
          </header>

          <div className="hero-copy">
            <p className="overline">Частные интерьеры · Владивосток</p>
            <h1 id="hero-title">
              <span>Пространства,</span>
              <span>в которых</span>
              <span>хочется жить.</span>
            </h1>
            <p className="hero-description">
              Комплексный ремонт квартир под ключ.
              <br />
              Создаём современные интерьеры, продуманные до последней детали.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">
                Обсудить проект
              </a>
              <a className="button button-quiet" href="#spaces">
                Наши работы
              </a>
            </div>
          </div>

          <div className="hero-foot">
            <span>{companyConfig.city}</span>
            <a href="#philosophy">Смотреть дальше</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Современное пространство">
          <Image
            src="/images/poliform-living.jpg"
            alt="Просторная современная гостиная с натуральным деревом, камнем и панорамным остеклением"
            fill
            priority
            sizes="(max-width: 820px) 100vw, 56vw"
          />
        </div>
      </section>

      <section className="philosophy section-space" id="philosophy">
        <div className="section-index reveal">
          <span>01</span>
          <span>Философия</span>
        </div>
        <div className="philosophy-copy reveal">
          <h2>
            Не интерьер для фотографии.
            <br />
            Среда для вашей жизни.
          </h2>
          <div className="philosophy-note">
            <p>
              Мы соединяем архитектуру, инженерную точность и тактильные материалы
              в пространстве, которое со временем становится только ценнее.
            </p>
            <span>От первого решения до готовой квартиры — один замысел.</span>
          </div>
        </div>
      </section>

      <section className="spaces section-space" id="spaces">
        <div className="spaces-heading reveal">
          <div className="section-index">
            <span>02</span>
            <span>Пространства</span>
          </div>
          <h2>Материалы. Свет. Пропорции.</h2>
          <p>
            Визуальный язык, в котором нет случайных решений и лишнего декора.
          </p>
        </div>

        <div className="material-gallery">
          {materialStories.map((story, index) => (
            <figure className={`material-story story-${index + 1} reveal`} key={story.title}>
              <div className="material-image">
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 820px) 100vw, 64vw"
                      : "(max-width: 820px) 100vw, 38vw"
                  }
                />
              </div>
              <figcaption>
                <span>{story.title}</span>
                <p>{story.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="principles section-space" id="principles">
        <div className="principles-intro reveal">
          <div className="section-index section-index-light">
            <span>03</span>
            <span>Принципы</span>
          </div>
          <h2>Роскошь, которую не нужно объяснять.</h2>
        </div>
        <div className="principle-grid reveal">
          <article>
            <span>01</span>
            <h3>Архитектура</h3>
            <p>Сначала пространство и сценарий жизни. Затем — всё остальное.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Материал</h3>
            <p>Камень, дерево, стекло и металл — без имитации и визуального шума.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Спокойствие</h3>
            <p>Один процесс, одна ответственность и предсказуемый путь к результату.</p>
          </article>
        </div>
      </section>

      <section className="approach section-space" id="approach">
        <div className="approach-visual reveal">
          <Image
            src="/images/premium-wood.jpg"
            alt="Архитектурная деталь из натурального дерева и мягкого света"
            fill
            sizes="(max-width: 820px) 100vw, 42vw"
          />
        </div>

        <div className="approach-content">
          <div className="section-index reveal">
            <span>04</span>
            <span>Единый процесс</span>
          </div>
          <h2 className="reveal">
            От замысла до готового пространства.
          </h2>
          <div className="discipline-list">
            {disciplines.map((item) => (
              <article className="discipline reveal" key={item.number}>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ownership section-space">
        <div className="ownership-copy reveal">
          <p className="overline">ДеПа Строй</p>
          <h2>
            Пространство — это часть качества жизни.
          </h2>
          <p>
            Мы создаём частные интерьеры как долгосрочную ценность:
            точные, цельные и естественные для человека, который в них живёт.
          </p>
          <a className="text-link" href="#contact">
            Начать диалог <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="ownership-visual reveal">
          <Image
            src="/images/poliform-bedroom.jpg"
            alt="Спокойная спальня в тёплой нейтральной палитре"
            fill
            sizes="(max-width: 820px) 100vw, 52vw"
          />
        </div>
      </section>

      <section className="contact section-space" id="contact">
        <div className="contact-left">
          <div className="contact-copy reveal">
            <div className="section-index section-index-light">
              <span>05</span>
              <span>Личный контакт</span>
            </div>
            <h2>Обсудим ваш проект</h2>
            <p>
              Расскажите о квартире или доме. Мы свяжемся с вами, обсудим задачу
              и предложим оптимальный сценарий реализации.
            </p>
          </div>

          <div className="contact-people reveal">
            <div className="contact-cards">
              {companyConfig.contacts.projectLeads.map((person, index) => (
                <article className="contact-card" key={person.phoneRaw}>
                  <span className="contact-card-index">0{index + 1}</span>
                  <div>
                    <h3>{person.name}</h3>
                    <p>{person.role}</p>
                  </div>
                  <a href={`tel:${person.phoneRaw}`} aria-label={`Позвонить: ${person.name}, ${person.phone}`}>
                    <span aria-hidden="true">↗</span>
                    {person.phone}
                  </a>
                </article>
              ))}
            </div>

            <div className="future-contacts" aria-label="Будущие каналы связи">
              <span>Другие способы связи</span>
              <div>
                {companyConfig.contacts.futureChannels.map((channel) => (
                  <span key={channel}>{channel}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <div className="form-heading">
            <span>Оставить заявку</span>
            <p>Мы ответим и согласуем удобное время для разговора.</p>
          </div>
          <label>
            <span>Имя</span>
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            <span>Телефон</span>
            <input name="phone" type="tel" autoComplete="tel" required />
          </label>
          <label>
            <span>Площадь квартиры</span>
            <input name="area" type="text" inputMode="numeric" />
          </label>
          <label>
            <span>Тип объекта</span>
            <select name="objectType" defaultValue="" required>
              <option value="" disabled>Выберите тип объекта</option>
              <option>Квартира без отделки</option>
              <option>Квартира с готовым ремонтом</option>
              <option>Апартаменты</option>
              <option>Частный дом</option>
            </select>
          </label>
          <label>
            <span>Комментарий</span>
            <textarea name="comment" rows={3} />
          </label>
          <label className="consent">
            <input type="checkbox" required />
            <span>
              Согласен(а) на обработку персональных данных. Форма пока работает
              в демонстрационном режиме.
            </span>
          </label>
          <button className="button button-brass" type="submit">
            Обсудить проект
          </button>
          {submitted && (
            <p className="form-status" role="status">
              Спасибо. Форма заполнена — подключение отправки заявки будет следующим шагом.
            </p>
          )}
        </form>
      </section>

      <footer className="footer">
        <a className="footer-brand" href="#top">
          <Logo className="footer-logo" variant="dark-background" />
        </a>
        <nav aria-label="Навигация в подвале">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} {companyConfig.brandName}</span>
          <span>{companyConfig.city}</span>
          <span>{companyConfig.legalName}</span>
        </div>
      </footer>
    </main>
  );
}
