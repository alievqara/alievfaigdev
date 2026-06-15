const ru = {
  translation: {
    nav: {
      work: "Проекты",
      approach: "Подход",
      contact: "Контакты",
      github: "GitHub",
      linkedin: "LinkedIn",
      instagram: "Instagram",
      email: "Email",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      language: "Язык",
      shortcuts: "Быстрые ссылки",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
    },

    hero: {
      eyebrow: "Full stack разработчик",

      titleLine1: "Создаю системы,",
      titleLine2: "которые выглядят просто,",
      titleLine3: "но работают мощно.",

      description:
        "Мои системы быстрые, масштабируемые и надежные. Я создаю не просто рабочие решения, а грамотно построенные продукты.",

      primaryCta: "Смотреть проекты",
      secondaryCta: "Связаться",

      featuredLabel: "Проект",
      featuredTitle: "Planzy",
      featuredText: "Система бронирования и управления для бизнеса.",

      stackLabel: "Технологии",
      focusLabel: "Мой подход",
      focusText:
        "Фокус на простых, понятных и масштабируемых системах.",
    },

    work: {
      eyebrow: "Избранные работы",
      title: "Реальное продуктовое мышление, а не просто красивые экраны.",
      items: [
        {
          index: "01",
          category: "SaaS Платформа",
          title: "Planzy",
          description:
            "Мультитенантная платформа для бронирования и управления бизнесом, построенная с backend-first инженерным подходом.",
          tags: ["ASP.NET Core", "React", "JWT", "Microservices"],
        },
        {
          index: "02",
          category: "System Design",
          title: "Разработка с упором на архитектуру",
          description:
            "Я делаю акцент на слабой связанности, высокой связности и масштабируемой структуре проекта вместо быстрых, но хрупких решений.",
          tags: ["SOLID", "OOP", "Clean Architecture", "Maintainability"],
        },
      ],
    },

    approach: {
      eyebrow: "Подход",
      title: "Для меня качество системы важнее временной сложности.",
      p1: "Я создаю full stack приложения с упором на backend и чётким разделением domain, application и infrastructure.",
      p2: "Моя цель — не просто заставить всё работать, а сделать систему читаемой, масштабируемой и безопасной для дальнейшего развития.",
      p3: "Я предпочитаю сильную основу, понятные имена, слабую связанность и архитектуру, которая выдерживает рост.",
      points: [
        "Структура кода с опорой на SOLID",
        "Чёткие границы сервисов и ответственности",
        "Понятная структура React без лишней сложности",
        "Backend-мышление, ориентированное на production",
      ],
    },

    stack: {
      eyebrow: "Возможности",
      title: "Стек, выстроенный вокруг поддерживаемой продуктовой разработки.",
      items: [
        {
          title: "Backend",
          description:
            "C#, ASP.NET Core, Entity Framework Core, JWT-аутентификация, layered services и масштабируемый API design.",
        },
        {
          title: "Frontend",
          description:
            "React + Vite, модульная структура компонентов, адаптивный UI и поддерживаемая композиция страниц.",
        },
        {
          title: "Architecture",
          description:
            "Clean Architecture, принципы SOLID, ограниченные ответственности и сервисно-ориентированное мышление.",
        },
        {
          title: "Database & Tools",
          description:
            "PostgreSQL, SQL Server, Docker, Git и практичные инженерные процессы для реальных проектов.",
        },
      ],
    },

    featuredPlanzy: {
  eyebrow: "Ключевой проект",
  title: "Planzy",
  p1: "Planzy — это CRM/ERP и система бронирования для малого и среднего бизнеса.",
  p2: "Цель проекта — помочь бизнесу управлять клиентами, записями, данными компании и ежедневными процессами в одной понятной системе.",
  points: [
    "Регистрация и авторизация пользователей",
    "Онбординг бизнеса и настройка компании",
    "Потоки бронирования и записей",
    "Модульный React frontend и ASP.NET Core backend",
  ],
  mock: [
    "Auth & access flow",
    "Company management",
    "Reservation workflow",
    "Customer operations",
  ],
  details: [
    {
      label: "Problem",
      title: "Упростить хаотичное управление бизнесом",
      text: "Многие небольшие бизнесы хранят клиентов, записи и внутренние процессы в разных инструментах. Planzy объединяет эти процессы в одной системе.",
    },
    {
      label: "Solution",
      title: "Одна платформа для ежедневной работы",
      text: "Система объединяет настройку компании, управление пользователями, бронирования и клиентские данные в одном продукте.",
    },
    {
      label: "Architecture",
      title: "Структура с расчетом на рост",
      text: "Проект строится вокруг границ сервисов, JWT-аутентификации, модульного frontend-кода и поддерживаемого backend-подхода.",
    },
  ],
},

    contact: {
      title: "Давайте создавать системы, которые умеют масштабироваться.",
      text:
        "Мне интересны backend-heavy продукты, SaaS-системы и инженерные задачи, где качество архитектуры действительно имеет значение.",
      email: "Написать",
      github: "GitHub",
    },

    footer: {
      left: "© 2026 Aliev Faig",
    },

    languages: {
      az: "AZ",
      en: "EN",
      ru: "RU",
    },
  },
};

export default ru;