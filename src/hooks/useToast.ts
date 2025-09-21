import { useContext } from 'react';
import { ToastContext } from '@/feature/Toast/Context';

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('toast context should be set');

  return context;
};
