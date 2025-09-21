import { createContext } from 'react';
import type { ToastContextProps } from '@/types/Toast';

export const ToastContext = createContext<ToastContextProps | undefined>(undefined);
