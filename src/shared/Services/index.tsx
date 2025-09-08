import { SERVICES_LIST } from '../../constants/servicesList';
import styles from './styles.module.scss';

export const Services = () => {
  return (
    <div className={styles.services}>
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
    </div>
  );
};
