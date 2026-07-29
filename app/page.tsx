"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { Logo } from "./components/Logo";
import { companyConfig, disciplines, materialStories, navItems } from "./site-config";

const principles = [
  {
    number: "01",
    title: "Архитектура до декора",
    text: "Сначала выстраиваем объём, свет и маршруты. Предметы появляются только там, где они усиливают пространство.",
  },
  {
    number: "02",
    title: "Материал без имитации",
    text: "Работаем с камнем, деревом, стеклом и металлом так, чтобы они красиво жили и старели.",
  },
  {
    number: "03",
    title: "Тишина в деталях",
    text: "Инженерия, хранение и свет интегрированы в архитектуру и не требуют внимания владельца.",
  },
] as const;

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
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
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
      <section className="hero" id="top" aria-labelledby="hero-title">
        <header className="site-header">
          <a
            className="header-logo"
            href="#top"
            aria-label={`${companyConfig.brandName}, на главную`}
          >
            <Logo variant="light-background" showTagline={false} />
          </a>

          <nav
            className={`desktop-nav ${menuOpen ? "is-open" : ""}`}
            aria-label="Основная навигация"
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href="#contact">
            Обсудить проект
            <span aria-hidden="true">↗</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span>{menuOpen ? "Закрыть" : "Меню"}</span>
            <i aria-hidden="true" />
          </button>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span>Частные интерьеры</span>
              <span>{companyConfig.city}</span>
            </div>

            <h1 id="hero-title">
              Пространства,
              <br />
              в которых
              <br />
              хочется жить.
            </h1>

            <div className="hero-bottom">
              <p>
                Комплексный ремонт квартир под ключ.
                <br />
                Создаём современные интерьеры, продуманные до последней детали.
              </p>
              <div className="hero-actions">
                <a className="button button-solid" href="#contact">
                  Обсудить проект
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="button button-line" href="#spaces">
                  Наши работы
                </a>
              </div>
            </div>
          </div>

          <figure className="hero-image">
            <div className="hero-image-frame">
              <Image
                src="/images/poliform-living.jpg"
                alt="Современная гостиная с натуральным деревом, камнем и панорамным остеклением"
                fill
                priority
                sizes="(max-width: 840px) 100vw, 56vw"
              />
            </div>
            <figcaption>
              <span>Резиденция 01</span>
              <span>Архитектура · Материал · Свет</span>
              <span>Дальний Восток</span>
            </figcaption>
          </figure>
        </div>

        <a className="scroll-cue" href="#manifesto" aria-label="Перейти к следующему разделу">
          <span>Смотреть проект</span>
          <i aria-hidden="true" />
        </a>
      </section>

      <section className="manifesto section-pad" id="manifesto">
        <div className="section-meta reveal">
          <span>01</span>
          <span>Манифест</span>
        </div>
        <div className="manifesto-content reveal">
          <p className="manifesto-lead">
            Жизнь меняется, когда пространство перестаёт быть фоном.
          </p>
          <div className="manifesto-note">
            <span className="accent-dot" aria-hidden="true" />
            <p>
              Мы создаём не набор эффектных решений, а цельную среду — спокойную,
              точную и естественную для человека, который будет в ней жить.
            </p>
          </div>
        </div>
      </section>

      <section className="spaces section-pad" id="spaces">
        <div className="section-heading reveal">
          <div className="section-meta">
            <span>02</span>
            <span>Пространства</span>
          </div>
          <h2>Материал говорит тише. И остаётся дольше.</h2>
          <p>
            Три основы интерьера, который не устаревает вместе с визуальными трендами.
          </p>
        </div>

        <div className="editorial-grid">
          {materialStories.map((story, index) => (
            <figure className={`space-story space-story-${index + 1} reveal`} key={story.title}>
              <div className="space-image">
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 840px) 100vw, 62vw"
                      : "(max-width: 840px) 100vw, 34vw"
                  }
                />
              </div>
              <figcaption>
                <span>0{index + 1}</span>
                <h3>{story.title}</h3>
                <p>{story.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="principles section-pad" id="principles">
        <div className="principles-title reveal">
          <div className="section-meta section-meta-light">
            <span>03</span>
            <span>Принципы</span>
          </div>
          <h2>
            Ничего
            <br />
            случайного.
          </h2>
          <p>
            Роскошь здесь — не количество деталей, а точность каждого решения.
          </p>
        </div>

        <div className="principles-list">
          {principles.map((principle) => (
            <article className="principle-row reveal" key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cinema">
        <div className="cinema-image reveal">
          <Image
            src="/images/premium-wood.jpg"
            alt="Архитектурная композиция из натурального дерева и мягкого света"
            fill
            sizes="100vw"
          />
        </div>
        <div className="cinema-caption">
          <span>Свет как архитектурный материал</span>
          <span>Дерево · Камень · Воздух</span>
        </div>
      </section>

      <section className="approach section-pad" id="approach">
        <div className="approach-intro reveal">
          <div className="section-meta">
            <span>04</span>
            <span>Единый процесс</span>
          </div>
          <h2>Один замысел. Одна команда. Один результат.</h2>
          <p>
            Берём на себя весь путь — от первых пространственных решений до момента,
            когда можно открыть дверь и начать жить.
          </p>
        </div>

        <div className="process-list">
          {disciplines.map((item) => (
            <article className="process-step reveal" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="statement section-pad">
        <div className="statement-copy reveal">
          <p className="statement-kicker">{companyConfig.brandName}</p>
          <h2>Пространство — самая личная форма качества жизни.</h2>
          <a className="text-link" href="#contact">
            Начать разговор
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="statement-image reveal">
          <Image
            src="/images/poliform-bedroom.jpg"
            alt="Спальня в тёплой нейтральной палитре с панелями из натурального дерева"
            fill
            sizes="(max-width: 840px) 100vw, 48vw"
          />
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-left">
          <div className="contact-copy reveal">
            <div className="section-meta section-meta-light">
              <span>05</span>
              <span>Личный контакт</span>
            </div>
            <h2>Обсудим ваш проект</h2>
            <p>
              Расскажите о квартире или доме. Мы свяжемся с вами, обсудим задачу и
              предложим оптимальный сценарий реализации.
            </p>
          </div>

          <div className="contact-people reveal">
            {companyConfig.contacts.projectLeads.map((person, index) => (
              <article className="person" key={person.phoneRaw}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </div>
                <a
                  href={`tel:${person.phoneRaw}`}
                  aria-label={`Позвонить: ${person.name}, ${person.phone}`}
                >
                  {person.phone}
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}

            <div className="future-channels" aria-label="Будущие каналы связи">
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
            <p>Ответим и согласуем удобное время для разговора.</p>
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
              <option value="" disabled>
                Выберите тип объекта
              </option>
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
              Согласен(а) на обработку персональных данных. Форма пока работает в
              демонстрационном режиме.
            </span>
          </label>

          <button className="submit-button" type="submit">
            Обсудить проект
            <span aria-hidden="true">↗</span>
          </button>

          {submitted && (
            <p className="form-status" role="status">
              Спасибо. Заявка подготовлена — подключение отправки будет следующим шагом.
            </p>
          )}
        </form>
      </section>

      <footer className="footer">
        <a className="footer-logo" href="#top">
          <Logo variant="dark-background" />
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
