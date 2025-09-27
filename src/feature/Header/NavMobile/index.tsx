import styles from './styles.module.scss';
import { HEADER_LIST } from '@/constants/headerList';

export const NavMobile = () => {
  return (
    <nav>
      <div className={styles.menuToggle}>
        <input type="checkbox" className={styles.menuCheckbox} />
        {Array.from({ length: 3 }).map((_, idx) => (
          <div className={styles.line} key={idx} />
        ))}

        <ul className={styles.menu}>
          {HEADER_LIST.map((section) => (
            <li key={section.id}>
              <a href={section.id}>
                <label>{section.name}</label>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
