import styles from './styles.module.scss';

export const NavMobile = () => {
  return (
    <nav>
      <div className={styles.menuToggle}>
        <input type="checkbox" className={styles.menuCheckbox} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
        <ul className={styles.menu}>
          <li>
            <a href="#">
              <label>Home</label>
            </a>
          </li>
          <li>
            <a href="#">
              <label>About</label>
            </a>
          </li>
          <li>
            <a href="#">
              <label>Experience</label>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
