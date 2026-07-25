"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import {
  companyConfig,
  faqItems,
  navItems,
  processSteps,
  projects,
  services,
  stats,
  testimonials,
} from "./site-config";
import { Logo } from "./components/Logo";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [comparison, setComparison] = useState(52);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main>
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label={`${companyConfig.brandName}, на главную`}>
          <Logo
            className="header-logo"
            variant={isScrolled || menuOpen ? "light-background" : "dark-background"}
            showTagline={false}
          />
        </a>

        <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label="Основная навигация">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Обсудить проект
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <Image
          src="/images/hero.jpg"
          alt="Светлая гостиная с панорамным остеклением и отделкой натуральным деревом"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">Комплексный ремонт квартир во Владивостоке</p>
          <h1 id="hero-title">
            Ремонт, в котором <em>всё продумано</em>
          </h1>
          <p className="hero-copy">
            Берём на себя весь процесс — от технического проекта и сметы до комплектации
            и сдачи готовой квартиры.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#projects">
              Посмотреть проекты
            </a>
            <a className="text-link light-link" href="#contact">
              Обсудить квартиру <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <p className="hero-index" aria-hidden="true">
          43°06′N&nbsp;&nbsp;131°53′E
        </p>
      </section>

      <section className="statement section-pad" id="about">
        <div className="section-label reveal">
          <span>01</span>
          <span>Подход</span>
        </div>
        <div className="statement-copy reveal">
          <h2>
            Мы не продаём отдельные строительные работы.
            <em> Мы отвечаем за весь результат целиком.</em>
          </h2>
          <p>
            Организуем проектирование, закупки, работы, технический контроль и отчётность
            в одной системе.
          </p>
        </div>
        <div className="stats reveal">
          {stats.map((item) => (
            <article key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading reveal">
          <div className="section-label">
            <span>02</span>
            <span>Услуги</span>
          </div>
          <h2>
            Одна команда.
            <br />
            <em>Весь процесс.</em>
          </h2>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card reveal" key={service.title}>
              <div className="service-image">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
              <div className="service-meta">
                <span>{service.number}</span>
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section-pad" id="projects">
        <div className="projects-intro reveal">
          <div className="section-label">
            <span>03</span>
            <span>Избранные проекты</span>
          </div>
          <h2>
            Пространства для
            <br />
            <em>настоящей жизни</em>
          </h2>
          <p>
            Временная подборка показывает направление будущего портфолио. Реальные объекты
            будут добавлены перед публикацией финальной версии.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project project-${index + 1} reveal`} key={project.title}>
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, 62vw"
                />
                <div className="project-overlay">
                  <span>{project.type}</span>
                  <span>Смотреть проект ↗</span>
                </div>
              </div>
              <div className="project-info">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.location}</p>
                </div>
                <dl>
                  <div>
                    <dt>Площадь</dt>
                    <dd>{project.area}</dd>
                  </div>
                  <div>
                    <dt>Срок</dt>
                    <dd>{project.duration}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="transformation section-pad">
        <div className="transformation-heading reveal">
          <div className="section-label">
            <span>04</span>
            <span>Трансформация</span>
          </div>
          <h2>
            Результат начинается задолго
            <br />
            <em>до чистовой отделки</em>
          </h2>
        </div>

        <div className="comparison reveal">
          <Image
            src="/images/after.jpg"
            alt="Готовый современный интерьер после ремонта"
            fill
            sizes="100vw"
            className="compare-image"
          />
          <div
            className="before-layer"
            style={{ clipPath: `inset(0 ${100 - comparison}% 0 0)` }}
          >
            <Image
              src="/images/before-generated.png"
              alt="Квартира без отделки до начала ремонта"
              fill
              sizes="100vw"
              className="compare-image"
            />
          </div>
          <span className="compare-tag tag-before">Было</span>
          <span className="compare-tag tag-after">Стало</span>
          <div className="compare-line" style={{ left: `${comparison}%` }}>
            <span aria-hidden="true">‹&nbsp;›</span>
          </div>
          <input
            type="range"
            min="5"
            max="95"
            value={comparison}
            onChange={(event) => setComparison(Number(event.target.value))}
            aria-label="Сравнить квартиру до и после ремонта"
          />
        </div>

        <div className="comparison-facts reveal">
          <div>
            <span>Было</span>
            <strong>Квартира без отделки</strong>
          </div>
          <div>
            <span>Стало</span>
            <strong>Полностью готовый интерьер</strong>
          </div>
          <div>
            <span>Срок</span>
            <strong>7 месяцев</strong>
          </div>
        </div>
      </section>

      <section className="process section-pad" id="process">
        <div className="process-top reveal">
          <div className="section-label">
            <span>05</span>
            <span>Как мы работаем</span>
          </div>
          <h2>
            Понятный маршрут
            <br />
            <em>от идеи до ключей</em>
          </h2>
        </div>
        <div className="process-list">
          {processSteps.map((step) => (
            <article className="process-step reveal" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="approach section-pad">
        <div className="approach-title reveal">
          <div className="section-label">
            <span>06</span>
            <span>Система</span>
          </div>
          <h2>
            Почему комплексный
            <br />
            <em>подход выгоднее</em>
          </h2>
        </div>
        <div className="approach-grid reveal">
          <article className="approach-column muted-column">
            <span className="column-number">A</span>
            <h3>Отдельные подрядчики</h3>
            <ul>
              {companyConfig.comparison.separate.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="approach-column accent-column">
            <span className="column-number">B</span>
            <h3>Одна управляющая команда</h3>
            <ul>
              {companyConfig.comparison.managed.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="company section-pad">
        <div className="company-image reveal">
          <Image
            src="/images/team.jpg"
            alt="Временная фотография команды за обсуждением проекта"
            fill
            sizes="(max-width: 760px) 100vw, 48vw"
          />
          <span>Временная фотография команды</span>
        </div>
        <div className="company-copy reveal">
          <div className="section-label">
            <span>07</span>
            <span>О компании</span>
          </div>
          <h2>
            Строительный опыт, перенесённый
            <em> в частные интерьеры</em>
          </h2>
          <p>
            Мы много лет управляли крупными строительными объектами и перенесли этот подход
            в ремонт квартир. Планирование, снабжение, технический контроль и ответственность
            за сроки для нас не дополнительные услуги, а основа работы.
          </p>
          <span className="legal-name">{companyConfig.legalName}</span>
        </div>
      </section>

      <section className="reviews section-pad">
        <div className="reviews-heading reveal">
          <div className="section-label">
            <span>08</span>
            <span>Отзывы</span>
          </div>
          <h2>
            Спокойствие в процессе.
            <br />
            <em>Уверенность в результате.</em>
          </h2>
          <p>Тексты ниже — временные макеты. Перед публичным запуском их нужно заменить.</p>
        </div>
        <div className="review-list">
          {testimonials.map((review) => (
            <blockquote className="review reveal" key={review.name}>
              <p>«{review.text}»</p>
              <footer>
                <strong>{review.name}</strong>
                <span>{review.project}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="faq section-pad" id="faq">
        <div className="faq-heading reveal">
          <div className="section-label">
            <span>09</span>
            <span>Вопросы</span>
          </div>
          <h2>
            До начала проекта
            <br />
            <em>важно прояснить детали</em>
          </h2>
        </div>
        <div className="faq-list reveal">
          {faqItems.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.question}
                <i aria-hidden="true">+</i>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-intro reveal">
          <p className="eyebrow light">Начать разговор</p>
          <h2>
            Давайте обсудим
            <br />
            <em>вашу квартиру</em>
          </h2>
          <p>
            Расскажите немного об объекте. Мы свяжемся с вами, уточним задачу и предложим
            следующий шаг.
          </p>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <div className="field-row">
            <label>
              <span>Имя</span>
              <input name="name" type="text" placeholder="Как к вам обращаться" required />
            </label>
            <label>
              <span>Телефон</span>
              <input name="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
            </label>
          </div>
          <div className="field-row">
            <label>
              <span>Площадь квартиры</span>
              <input name="area" type="text" placeholder="Например, 96 м²" />
            </label>
            <label>
              <span>Жилой комплекс или адрес</span>
              <input name="address" type="text" placeholder="Где находится объект" />
            </label>
          </div>
          <label>
            <span>Какой ремонт планируется</span>
            <select name="projectType" defaultValue="">
              <option value="" disabled>
                Выберите вариант
              </option>
              <option>Квартира без отделки</option>
              <option>Капитальный ремонт</option>
              <option>Ремонт по готовому дизайн-проекту</option>
              <option>Нужна консультация</option>
            </select>
          </label>
          <label>
            <span>Комментарий</span>
            <textarea name="comment" rows={3} placeholder="Расскажите о задаче" />
          </label>
          <label className="consent">
            <input type="checkbox" required />
            <span>
              Я согласен(а) на обработку персональных данных. Форма работает в демонстрационном
              режиме и пока не отправляет данные на сервер.
            </span>
          </label>
          <button className="button button-accent" type="submit">
            Обсудить проект
          </button>
          {submitted && (
            <p className="form-success" role="status">
              Спасибо. Форма заполнена — в рабочей версии здесь будет отправка заявки.
            </p>
          )}
        </form>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <a className="footer-brand" href="#top">
            <Logo className="footer-logo" variant="dark-background" />
          </a>
          <p>
            Комплексный ремонт квартир
            <br />
            во Владивостоке
          </p>
        </div>
        <div className="footer-grid">
          <div>
            <span>Навигация</span>
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div>
            <span>Связаться</span>
            <a href={`tel:${companyConfig.contacts.phoneRaw}`}>
              {companyConfig.contacts.phone}
            </a>
            <a href={`mailto:${companyConfig.contacts.email}`}>
              {companyConfig.contacts.email}
            </a>
          </div>
          <div>
            <span>Мессенджеры</span>
            <a href={companyConfig.contacts.telegramUrl}>Telegram</a>
            <a href={companyConfig.contacts.whatsappUrl}>WhatsApp</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {companyConfig.brandName}</span>
          <span>{companyConfig.legalName}</span>
          <span>Контакты временные</span>
        </div>
      </footer>
    </main>
  );
}
