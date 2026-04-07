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
      eyebrow: "Full stack разработчик с фокусом на backend",
      titleLine1: "Создаю масштабируемые",
      titleLine2: "SaaS-системы с",
      titleLine3: "чистой архитектурой.",
      description:
        "Я создаю production-ready приложения на ASP.NET Core и React, делая упор на поддерживаемость, границы сервисов, SOLID и долгосрочную масштабируемость.",
      primaryCta: "Смотреть проекты",
      secondaryCta: "Связаться",
      featuredLabel: "Ключевой проект",
      featuredTitle: "Planzy",
      featuredText: "Мультитенантная SaaS CRM/ERP платформа для бронирования.",
      stackLabel: "Основной стек",
      focusLabel: "Инженерный фокус",
      focusText:
        "Clean Architecture, поддерживаемый код, принципы SOLID и масштабируемые границы сервисов.",
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
      p1: "Planzy — это мультитенантная SaaS CRM/ERP система бронирования, созданная для онбординга бизнеса, управления компаниями и потоков записи.",
      p2: "Платформа строится с расчётом на backend-масштабируемость, с чёткими границами сервисов и архитектурой, поддерживающей долгосрочное развитие.",
      points: [
        "JWT-аутентификация и refresh token flow",
        "Онбординг бизнеса и настройка компании",
        "Разделение сервисов в стиле микросервисной архитектуры",
        "Frontend на React + Vite с модульной структурой",
      ],
      mock: [
        "Auth & access flow",
        "Onboarding journey",
        "Company management modules",
        "Appointment workflow",
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
      right: "Создано на React + Vite",
    },

    languages: {
      az: "AZ",
      en: "EN",
      ru: "RU",
    },
  },
};

export default ru;