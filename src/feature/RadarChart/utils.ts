import { SKILLS_EN } from './constants';

export const getLabelPosition = (index: number, offset: number, center: number, radius: number) => {
  const angle = (Math.PI * 2 * index) / SKILLS_EN.length - Math.PI / 2;
  const r = radius + offset;
  const x = center + r * Math.cos(angle);
  const y = center + r * Math.sin(angle);
  return { x, y, angle };
};

export const getTextAnchor = (angle: number) => {
  if (Math.cos(angle) > 0.1) return 'start';
  if (Math.cos(angle) < -0.1) return 'end';
  return 'middle';
};

export const getDominantBaseline = (angle: number) => {
  if (Math.sin(angle) > 0.1) return 'hanging';
  if (Math.sin(angle) < -0.1) return 'baseline';
  return 'middle';
};

export const getPoint = (
  index: number,
  value: number,
  maxValue: number,
  center: number,
  radius: number
) => {
  const angle = (Math.PI * 2 * index) / SKILLS_EN.length - Math.PI / 2;
  const r = (value / maxValue) * radius;
  const x = center + r * Math.cos(angle);
  const y = center + r * Math.sin(angle);
  return [x, y] as const;
};
