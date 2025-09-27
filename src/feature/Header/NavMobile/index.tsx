import styles from './styles.module.scss';
import { HEADER_LIST } from '@/constants/headerList';

export const NavMobile = () => {
  return (
    <nav>
      <div className={styles.menuToggle}>
        <input type="checkbox" className={styles.menuCheckbox} />
        {Array.from({ length: 3 }).map(() => (
          <div className={styles.line} />
        ))}

        <ul className={styles.menu}>
          {HEADER_LIST.map((section) => (
            <li>
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
