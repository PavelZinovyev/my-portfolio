import type { LangProps } from '@/types/Lang';

export type ExperienceType = {
  title: string;
  company: string;
  date: string;
  contents: string[];
};

export const EXPERIENCE_LIST: Record<LangProps, ExperienceType[]> = {
  en: [
    {
      title: 'Frontend Developer(Junior)',
      company: 'Happy Numbers, Inc.',
      date: '2021 - 2024',
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
      title: 'Frontend Developer(Junior)',
      company: 'Uchi.ru',
      date: '2024 - 2025',
      contents: [
        'Developed features and services for the teacher’s personal account (product development).',
        'Integrated Sentry and Grafana for monitoring and error tracking.',
        'Created contracts with the backend (API schema) and designed endpoints.',
        'Implemented event logging and collaborated with data analysts.',
        'Actively contributed to team processes: retrospectives, code reviews, and joint feature design.',
      ],
    },
    {
      title: 'Frontend Developer(Middle)',
      company: 'Uchi.ru',
      date: '2025 - 2025',
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
    {
      title: 'Frontend Developer',
      company: 'Wildberries & Russ',
      date: '2025 - Present',
      contents: [
        'Implemented an image optimization strategy in Next.js: introduced a client-side resizer(accounting for actual width and dpr) to generate cdn urls with required quality levels and pre-blur, split loading flows(cdn vs next image optimizer), fixed banner handling (enabled optimizer and TTL caching), reducing traffic usage and improving page load speed.',
        'Optimized bff performance(node.js, ssr): identified and resolved bottlenecks(excessive ssr requests, connection saturation), introduced caching and redistributed logic between server and client, increasing throughput ~9x.',
      ],
    },
  ],
  ru: [
    {
      title: 'Фронтенд разработчик(Junior)',
      company: 'Happy Numbers, Inc.',
      date: '2021 - 2024',
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
      title: 'Фронтенд разработчик(Junior)',
      company: 'Учи.ру',
      date: '2024 - 2025',
      contents: [
        'Разработка фич и сервисов для личного кабинета учителя (продуктовая разработка).',
        'Интеграция Sentry и Grafana для мониторинга.',
        'Составление контрактов с бэкендом (api-schema) и проектирование эндпоинтов.',
        'Логирование ивентов, взаимодействие с дата-аналитиками.',
        'Активное участие в командных процессах: ретроспективы, код-ревью, совместное проектирование.',
      ],
    },
    {
      title: 'Фронтенд разработчик',
      company: 'Учи.ру',
      date: '2025 - 2025',
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
    {
      title: 'Фронтенд разработчик',
      company: 'Wildberries & Russ',
      date: '2025 - настоящее время',
      contents: [
        'Реализовал стратегию оптимизации изображений в next.js: внедрил клиентский ресайзер(учет фактической ширины и dpr) для генерации cdn-url с нужным качеством и pre-blur, разделил потоки загрузки(cdn vs next image optimizer), исправил обработку баннеров (включил optimizer и кэширование через TTL), что снизило объем трафика и ускорило загрузку страниц.',
        'Оптимизировал производительность bff(node.js, ssr): выявил и устранил узкие места(избыточные ssr-запросы, перегрузка соединений), внедрил кэширование и перераспределил логику между сервером и клиентом, увеличив пропускную способность в 9 раз.',
      ],
    },
  ],
};
