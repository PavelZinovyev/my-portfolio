import { SERVICES_LIST } from '../../constants/servicesList';
import styles from './styles.module.scss';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { FADE_IN_LEFT } from '@/constants/motion';

interface ServicesProps {
  direction: 'column' | 'row';
}

export const Services: FC<ServicesProps> = ({ direction }) => {
  return (
    <motion.div className={`${styles.services} ${styles[direction]}`} {...FADE_IN_LEFT}>
      {SERVICES_LIST.map((service) => {
        const IconComponent = service.icon;

        return (
          <a
            key={service.name}
            className={styles.service}
            target="_blank"
            rel="noopener noreferrer"
            href={service.link}
            data-social={service.name}
            style={{ '--accent-color': service.color } as React.CSSProperties}
          >
            <IconComponent />
          </a>
        );
      })}
    </motion.div>
  );
};
