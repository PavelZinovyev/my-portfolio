import { SKILLS_EN } from '@/constants/radar';

export type SkillType = {
  name: string;
  current: number;
  future: number;
  tooltip: string;
};

export type RadarSectionProps = {
  name: string;
  color: string;
  fill: string;
  stroke: string;
  hoverColor: string;
  key: keyof (typeof SKILLS_EN)[number];
};

export type SectionHoverProps = RadarSectionProps['key'] | null;
