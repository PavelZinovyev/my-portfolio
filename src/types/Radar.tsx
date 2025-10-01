export type RadarSectionKey = 'current' | 'future';

export type RadarSectionProps = {
  name: string;
  color: string;
  fill: string;
  stroke: string;
  hoverColor: string;
  key: RadarSectionKey;
};

export type SectionHoverProps = RadarSectionKey | null;

export type SkillType = {
  name: string;
  tooltip: string;
} & Record<RadarSectionKey, number>;
