import React from 'react';
import styles from './styles.module.scss';
import { HEADER_LIST } from '../../constants/headerList';
import { Container } from '../../shared/Container';

export const Header = () => {
  return (
    <div className={styles.header}>
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
