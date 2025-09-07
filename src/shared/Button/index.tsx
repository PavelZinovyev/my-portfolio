import type { FC, ReactNode } from 'react';
import type { ButtonVariant } from '../../types/Button';
import styles from './styles.module.scss';

interface ButtonProps {
  text: string;
  variant: ButtonVariant;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ text, variant, icon, href, onClick }) => {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {text}
        {icon}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {text}
      {icon}
    </button>
  );
};
