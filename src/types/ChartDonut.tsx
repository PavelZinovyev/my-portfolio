export interface LegendaItemProps {
  name: string;
  value: number;
  color: string;
}

export interface ChartDonutProps {
  data: LegendaItemProps[] | null;
  segmentSize?: number;
  segmentGap?: number;
  innerPadding?: number;
  minAngle?: number;
}

export interface LegendaProps {
  data: LegendaItemProps[];
}
