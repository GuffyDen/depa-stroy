import Image from "next/image";
import { ContactForm } from "./components/ContactForm";
import {
  acceptanceChecks,
  companyConfig,
  navItems,
  process,
  services,
} from "./site-config";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-label={companyConfig.brandName}>
      <span>ДеПа</span>
      <span>Строй</span>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">
        Перейти к содержанию
      </a>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="header-brand" href="#top">
            <BrandMark />
          </a>

          <nav className="desktop-nav" aria-label="Основная навигация">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="header-contact" href="#contact">
            Начать проект
            <ArrowIcon />
          </a>

          <details className="mobile-menu">
            <summary>Меню</summary>
            <nav aria-label="Мобильная навигация">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </header>

        <div className="hero-layout" id="content">
          <div className="hero-copy">
            <div className="hero-overline">
              <span>{companyConfig.serviceLine}</span>
              <span>{companyConfig.city}</span>
            </div>

            <h1 id="hero-title">
              Квартира,
              <br />
              готовая
              <br />
              <em>к жизни.</em>
            </h1>

            <div className="hero-intro">
              <p>
                Проектируем и реализуем современные квартиры целиком — от пустых
                стен до последней детали.
              </p>
              <div className="hero-actions">
                <a className="button button-orange" href="#contact">
                  Обсудить проект
                  <ArrowIcon />
                </a>
                <a className="button button-ghost" href="#services">
                  Посмотреть услуги
                </a>
              </div>
            </div>
          </div>

          <figure className="hero-visual">
            <Image
              src="/images/v2/hero-vladivostok.jpg"
              alt="Современная квартира с панорамным видом на Владивосток"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <figcaption>
              <span>43°07′ N</span>
              <span>Владивосток</span>
            </figcaption>
          </figure>

          <aside className="hero-code" aria-label="Направления работы">
            <span>VVO / 001</span>
            <p>Ремонт</p>
            <p>Дизайн</p>
            <p>Приёмка</p>
          </aside>
        </div>

        <div className="hero-ticker" aria-hidden="true">
          <span>ПРОСТРАНСТВО</span>
          <i />
          <span>ТОЧНОСТЬ</span>
          <i />
          <span>ГОТОВНОСТЬ</span>
          <i />
          <span>ВЛАДИВОСТОК</span>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-index">
          <span>01</span>
          <span>Что мы делаем</span>
        </div>
        <div className="services-heading">
          <h2>
            От ключей
            <br />
            до новоселья.
          </h2>
          <p>
            Не соединяем разрозненных подрядчиков. Собираем одну команду и один
            управляемый процесс вокруг вашей квартиры.
          </p>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service-item" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-meta">{service.meta}</span>
              <span className="service-arrow">
                <ArrowIcon />
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="visual-story" aria-labelledby="visual-title">
        <div className="visual-story-head">
          <div className="section-index section-index-light">
            <span>02</span>
            <span>Визуальный язык</span>
          </div>
          <h2 id="visual-title">
            Материалы
            <br />
            вместо декора.
          </h2>
          <p>
            Камень, дерево, металл и свет. Чем точнее основа, тем меньше интерьеру
            нужны визуальные эффекты.
          </p>
        </div>

        <div className="visual-grid">
          <figure className="visual-large">
            <Image
              src="/images/v2/kitchen.jpg"
              alt="Кухня из натурального дерева, металла и кобальтового стекла"
              fill
              sizes="(max-width: 800px) 100vw, 66vw"
            />
            <figcaption>
              <span>Объём / Свет / Функция</span>
              <span>01—03</span>
            </figcaption>
          </figure>
          <figure className="visual-tall">
            <Image
              src="/images/v2/bathroom.jpg"
              alt="Современная ванная из камня, дерева и рифлёного стекла"
              fill
              sizes="(max-width: 800px) 100vw, 34vw"
            />
            <figcaption>
              <span>Тактильность / Точность</span>
              <span>02—03</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="approach-sticky">
          <div className="section-index">
            <span>03</span>
            <span>Как всё устроено</span>
          </div>
          <h2>
            Один процесс.
            <br />
            Без хаоса.
          </h2>
          <p>
            У проекта есть логика, бюджет, сроки и человек, который отвечает за
            результат.
          </p>
        </div>

        <div className="process-list">
          {process.map((item) => (
            <article className="process-item" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="acceptance" id="acceptance">
        <div className="acceptance-image">
          <Image
            src="/images/v2/acceptance.jpg"
            alt="Специалист проверяет квартиру от застройщика лазерным уровнем"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
          <span className="acceptance-tag">Новая услуга</span>
        </div>

        <div className="acceptance-copy">
          <div className="section-index section-index-blue">
            <span>04</span>
            <span>Приёмка квартиры</span>
          </div>
          <h2>
            Сначала
            <br />
            проверить.
            <br />
            Потом принять.
          </h2>
          <p className="acceptance-lead">
            Помогаем принять квартиру у застройщика без спешки и эмоций. Проверяем
            то, что сложно оценить на первой встрече, и фиксируем замечания.
          </p>

          <ul>
            {acceptanceChecks.map((item) => (
              <li key={item}>
                <span aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <a className="button button-dark" href="#contact">
            Записаться на приёмку
            <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="principles" aria-labelledby="principles-title">
        <div className="section-index section-index-light">
          <span>05</span>
          <span>Три опоры</span>
        </div>
        <h2 id="principles-title">
          Не обещания.
          <br />
          Система.
        </h2>
        <div className="principle-grid">
          <article>
            <span>01</span>
            <h3>Единый бюджет</h3>
            <p>
              Смета объединяет работы, материалы и комплектацию. Изменения не
              появляются без согласования.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Личный руководитель</h3>
            <p>
              Один человек держит контекст проекта и остаётся вашим главным
              контактом на всех этапах.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Проверяемый результат</h3>
            <p>
              Решения фиксируются до реализации, а каждый этап принимается прежде,
              чем команда двигается дальше.
            </p>
          </article>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-title">
          <div className="section-index">
            <span>06</span>
            <span>Начало проекта</span>
          </div>
          <h2>
            Давайте
            <br />
            обсудим
            <br />
            квартиру.
          </h2>
          <p>
            Расскажите, где находится объект и что хотите получить. Мы зададим
            несколько точных вопросов и предложим следующий шаг.
          </p>
        </div>

        <div className="contact-panel">
          <ContactForm />

          <div className="contact-people">
            <div className="people-heading">
              <span>Можно позвонить напрямую</span>
              <p>На связи руководители проектов</p>
            </div>
            {companyConfig.contacts.projectLeads.map((person, index) => (
              <article className="person-card" key={person.phoneRaw}>
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
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <a className="footer-brand" href="#top">
          <BrandMark />
        </a>
        <p>Ремонт квартир под ключ и приёмка от застройщика</p>
        <div>
          <span>{companyConfig.city}</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  );
}
