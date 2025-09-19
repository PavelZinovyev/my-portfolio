import type { FC, SVGProps } from 'react';

export type ContactProps = {
  label: string;
  value: string;
  type: 'tel' | 'email' | 'media';
  icon: FC<SVGProps<SVGSVGElement>>;
  href?: string;
};
