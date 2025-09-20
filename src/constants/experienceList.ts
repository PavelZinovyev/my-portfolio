export type ExperienceType = {
  title: string;
  company: string;
  date: string;
  contents: string[];
};

export const EXPERIENCE_LIST: ExperienceType[] = [
  {
    title: 'Frontend Developer (Junior)',
    company: 'Happy Numbers, Inc.',
    date: '2021-2024',
    contents: [
      'Developed educational app interfaces using React, TypeScript, and xState.',
      'Implemented server-side authentication with JWT.',
      'Built features for sorting, search, filtering, and pagination.',
      'Managed application state with MobX.',
      'Worked with animations (@keyframes, React Transition Group, requestAnimationFrame, Lottie).',
      'Fixed legacy code and implemented event logging.',
      'Collaborated with designers, methodologists, and QA to deliver educational content.',
    ],
  },
  {
    title: 'Frontend Developer (Junior)',
    company: 'Uchi.ru',
    date: '2024-2025',
    contents: [
      'Developed features and services for the teacher’s personal account (product development).',
      'Integrated Sentry and Grafana for monitoring and error tracking.',
      'Created contracts with the backend (API schema) and designed endpoints.',
      'Implemented event logging and collaborated with data analysts.',
      'Actively contributed to team processes: retrospectives, code reviews, and joint feature design.',
    ],
  },
  {
    title: 'Frontend Developer (Middle)',
    company: 'Uchi.ru',
    date: '2025-Present',
    contents: [
      'Developed and currently maintain a student performance analytics service.',
      'Developed services for teachers to streamline their workflow.',
      'Optimized website SEO to improve search visibility and traffic.',
      'Worked with CMS platforms to enhance content management and publishing processes.',
      'Integrated and collaborated with key external services to extend product functionality.',
      'Led initiatives for UI-kit development and unit testing.',
      'Created and introduced a frontend DOR template, which standardized approaches and accelerated project onboarding.',
      'Led a hackathon team solution that generated new product improvement ideas.',
      'Onboarded and successfully integrated a new frontend developer into the team.',
      'Designed a retrospective template that improved the efficiency of team meetings.',
    ],
  },
];

export const EXPERIENCE_LIST_RU: ExperienceType[] = [
  {
    title: 'Frontend Developer (Junior)',
    company: 'Happy Numbers, Inc.',
    date: '2021-2024',
    contents: [
      'Создание интерфейсов образовательного приложения с использованием React, TypeScript и xState.',
      'Разработка авторизации на сервере через JWT.',
      'Реализация сортировок, поиска, фильтрации и пагинации.',
      'Управление состоянием приложения с помощью MobX.',
      'Работа с анимациями (@keyframes, React Transition Group, requestAnimationFrame, Lottie).',
      'Фиксы легаси-кода и логирование событий.',
      'Взаимодействие с дизайнерами, методистами и QA для выпуска образовательного контента.',
    ],
  },
  {
    title: 'Frontend Developer (Junior)',
    company: 'Учи.ру',
    date: '2024-2025',
    contents: [
      'Разработка фич и сервисов для личного кабинета учителя (продуктовая разработка).',
      'Интеграция Sentry и Grafana для мониторинга.',
      'Составление контрактов с бэкендом (api-schema) и проектирование эндпоинтов.',
      'Логирование ивентов, взаимодействие с дата-аналитиками.',
      'Активное участие в командных процессах: ретроспективы, код-ревью, совместное проектирование.',
    ],
  },
  {
    title: 'Frontend Developer (Middle)',
    company: 'Учи.ру',
    date: '2025-Present',
    contents: [
      'Разработал и поддерживаю сервис аналитики успеваемости студентов.',
      'Разработал сервисы для учителей, упрощающие их работу.',
      'Оптимизировал SEO сайта для повышения видимости в поиске и роста трафика.',
      'Работал с CMS для улучшения управления контентом и процессов публикации.',
      'Интегрировал и наладил взаимодействие с ключевыми внешними сервисами для расширения функциональности продукта.',
      'Инициировал разработку UI-kit и внедрение unit-тестирования.',
      'Создал и внедрил шаблон frontend DOR, стандартизировавший подходы и ускоривший онбординг проектов.',
      'Возглавил командное решение на хакатоне, которое принесло идеи по улучшению продукта.',
      'Провёл онбординг и успешно интегрировал нового frontend-разработчика в команду.',
      'Разработал шаблон ретроспективы, который повысил эффективность командных встреч.',
    ],
  },
];
