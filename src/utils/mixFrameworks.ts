export type LangsNamesProps = 'TypeScript' | 'HTML' | 'SCSS' | 'JavaScript' | 'Next' | 'React';
import { DEFAULT_FRAMEWORKS, LANGS_COLORS } from '../constants/langsList';

interface LangsProps {
  name: LangsNamesProps;
  value: number;
}

export const mixFrameworks = (langs: LangsProps) => {
  if (!langs) return null;

  const total = Object.values(langs).reduce((aсс, item) => aсс + item, 0);

  const langsPercent = Object.entries(langs).map(([key, value]) => {
    return {
      name: key,
      value: (value / total) * 100,
    };
  });

  const combined = [...langsPercent, ...DEFAULT_FRAMEWORKS];

  const combinedSum = combined.reduce((acc, item) => acc + item.value, 0);

  return combined.map((item) => ({
    ...item,
    color: LANGS_COLORS[item.name as LangsNamesProps],
    value: Number(((item.value / combinedSum) * 100).toFixed(1)),
  }));
};
