import { useState } from 'react';
import { createPortal } from 'react-dom';

import { Toast } from '.';
import { ToastContext } from './Context';

import type { ReactNode } from 'react';
import type { ToastProps, ToastStateProps } from '@/types/Toast';

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastStateProps[]>([]);

  const showToast = ({ message, type }: Omit<ToastProps, 'id'>) => {
    const id = Date.now();

    setToasts((prev) => {
      if (prev.length === 0) {
        return [{ id, message, type }];
      }
      const [current] = prev;

      return [{ ...current, closing: true, next: { id, message, type } }];
    });
  };

  const removeToast = (id: number) => {
    setToasts((prev) => {
      if (prev[0]?.id === id && prev[0].next) {
        return [prev[0].next];
      }
      return prev.filter((toast) => toast.id !== id);
    });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {createPortal(
        toasts.map((data) => <Toast {...data} key={data.id} onDone={() => removeToast(data.id)} />),
        document.body
      )}
    </ToastContext.Provider>
  );
};
