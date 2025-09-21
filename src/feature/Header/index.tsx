import styles from './styles.module.scss';
import { HEADER_LIST } from '../../constants/headerList';
import { Container } from '../../shared/Container';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.header} ${scrolled ? styles.blur : ''}`}>
      <Container>
        <div className={styles.headerWrapper}>
          <a className={styles.logo}>Pavel Zinovyev</a>
          <div className={styles.nav}>
            <ul className={styles.navMenu}>
              {HEADER_LIST.map((el) => (
                <li className={styles.navLink} key={el}>
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
