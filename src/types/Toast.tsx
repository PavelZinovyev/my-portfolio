export type ToastProps = {
  id: number;
  message: string;
  type: 'success' | 'error';
};

export interface ToastStateProps extends ToastProps {
  closing?: boolean;
  next?: ToastProps;
}

export interface ToastViewProps extends ToastStateProps {
  onDone: () => void;
}

export type ToastContextProps = {
  showToast: (toast: Omit<ToastProps, 'id'>) => void;
};
