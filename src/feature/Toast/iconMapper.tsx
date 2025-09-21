import type { FC, SVGProps } from 'react';
import type { ToastViewProps } from '@/types/Toast';
import { CircleSuccessIcon } from '@/assets/icons/CircleSuccessIcon';
import { CircleErrorIcon } from '@/assets/icons/CircleErrorIcon';

export const iconMapper: Record<ToastViewProps['type'], FC<SVGProps<SVGSVGElement>>> = {
  success: CircleSuccessIcon,
  error: CircleErrorIcon,
};
