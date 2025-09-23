import type { RadarSectionProps, SkillType } from '@/types/Radar';

export const SKILLS_EN: SkillType[] = [
  {
    name: 'Frontend',
    current: 4,
    future: 5,
    tooltip: `Developed full services and interactive widgets in large companies.`,
  },
  {
    name: 'Backend',
    current: 2,
    future: 3,
    tooltip: `Non-commercial experience with Express, Sequelize, PostgreSQL, and pgAdmin. Currently studying backend architecture.`,
  },
  {
    name: 'UI/UX',
    current: 4,
    future: 5,
    tooltip: `Experienced in Figma, Miro, Pixso for designing interfaces and workflows.`,
  },
  {
    name: 'Soft skills',
    current: 4,
    future: 5,
    tooltip: `Public speaking experience (demos, retrospectives, AI hackathons) and strong commitment to healthy team atmosphere.`,
  },
  {
    name: 'Languages',
    current: 3,
    future: 4,
    tooltip: `Russian - native, English - technical B1-B2.`,
  },
  {
    name: 'Testing',
    current: 3,
    future: 4,
    tooltip: `Integrated AI bot for frontend test automation in CI/CD; some experience with unit testing.`,
  },
];

export const SKILLS_RU: SkillType[] = [
  {
    name: 'Frontend',
    current: 4,
    future: 5,
    tooltip: `Разрабатывал целые сервисы и виджеты в крупных компаниях. Интеграция DOR-шаблона и активно участвовал в бизнес-процессах`,
  },
  {
    name: 'Backend',
    current: 2,
    future: 3,
    tooltip: `Некомерческий опыт с Express, Sequelize, PostgreSQL и pgAdmin. Сейчас изучаю архитектуру бекенда.`,
  },
  {
    name: 'UI/UX',
    current: 4,
    future: 5,
    tooltip: `Умею работать с Figma, Miro, Pixso для дизайна интерфейсов и прототипов.`,
  },
  {
    name: 'Soft skills',
    current: 4,
    future: 5,
    tooltip: `Опыт выступлений на публике (демо, ретроспективы, AI-хакатоны) и желание поддерживать комфортную атмосферу в команде.`,
  },
  {
    name: 'Языки',
    current: 3,
    future: 4,
    tooltip: `Русский - родной, Английский - технический B1-B2.`,
  },
  {
    name: 'Testing',
    current: 3,
    future: 4,
    tooltip: `Опыт интеграции AI-бота для автоматизации фронтенд-тестов в CI/CD; небольшой опыт unit-тестирования.`,
  },
];
export const SIZE = 340;
export const LEVELS = 5;
export const CENTER = SIZE / 2;
export const MARGIN = 40;
export const RADIUS = CENTER - MARGIN;
export const TOOLTIP_MOBILE_OFFSET = 146;

export const RADAR_SECTIONS: RadarSectionProps[] = [
  {
    name: 'Future',
    fill: 'rgba(34, 197, 94, 0.15)',
    stroke: 'rgba(34, 197, 94, 0.7)',
    color: 'rgba(34, 197, 94, 0.7)',
    hoverColor: 'rgba(34, 197, 94, 1)',
    key: 'future',
  },
  {
    name: 'Current',
    fill: 'rgba(59, 130, 246, 0.18)',
    stroke: 'rgba(59, 130, 246, 0.9)',
    color: 'rgba(59, 130, 246, 0.9)',
    hoverColor: 'rgba(59, 130, 246, 1)',
    key: 'current',
  },
];
