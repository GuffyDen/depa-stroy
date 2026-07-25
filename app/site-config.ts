export const companyConfig = {
  brandName: "ДеПа Строй",
  legalName: "Юридическое наименование уточняется",
  city: "Владивосток",
  contacts: {
    projectLeads: [
      {
        name: "Павел",
        role: "Руководитель проектов",
        phone: "+7 984 191-19-91",
        phoneRaw: "+79841911991",
      },
      {
        name: "Денис",
        role: "Руководитель проектов",
        phone: "+7 914 693-90-45",
        phoneRaw: "+79146939045",
      },
    ],
    futureChannels: ["Telegram", "WhatsApp", "E-mail"],
  },
} as const;

export const navItems = [
  { label: "Пространства", href: "#spaces" },
  { label: "Принципы", href: "#principles" },
  { label: "Подход", href: "#approach" },
  { label: "Контакты", href: "#contact" },
] as const;

export const disciplines = [
  {
    number: "01",
    title: "Концепция пространства",
    description:
      "Определяем архитектуру, сценарии жизни, свет и характер будущего интерьера.",
  },
  {
    number: "02",
    title: "Техническая точность",
    description:
      "Сводим инженерные решения и детали в единую систему до начала реализации.",
  },
  {
    number: "03",
    title: "Материалы и предметы",
    description:
      "Формируем палитру натуральных материалов, мебели, света и оборудования.",
  },
  {
    number: "04",
    title: "Реализация",
    description:
      "Управляем всем процессом и отвечаем за то, чтобы замысел стал готовым пространством.",
  },
] as const;

export const materialStories = [
  {
    title: "Камень",
    note: "Тактильность и спокойный вес",
    image: "/images/poliform-kitchen.jpg",
    alt: "Современная кухня с натуральным камнем и графитовыми фасадами",
  },
  {
    title: "Дерево",
    note: "Тепло без декоративности",
    image: "/images/poliform-bedroom.jpg",
    alt: "Минималистичная спальня с панелями из натурального дерева",
  },
  {
    title: "Свет",
    note: "Архитектура, которая меняется в течение дня",
    image: "/images/premium-detail.jpg",
    alt: "Фрагмент интерьера с деревянной стеной, камнем и естественным светом",
  },
] as const;
