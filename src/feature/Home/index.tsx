import styles from './styles.module.scss';
import photo from '../../assets/home_self_compress.webp';
import { Services } from '../../shared/Services';
import { Button } from '../../shared/Button';
import { TELEGRAM_LINK } from '../../constants/telegramLink';

import Lottie from 'lottie-react';
import planeAnimation from '../../assets/lotties/telegram.json';

export const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <Services />
        <div className={styles.homeWrapper}>
          <h1 className={styles.headerInfo}>Hi, i am Pavel!</h1>
          <h3 className={styles.postTitle}>Front-end Developer</h3>
          <p className={styles.about}>
            Passionate about creating engaging digital experiences and fostering a collaborative,
            positive team environment
          </p>
          <Button
            text={'Contact me'}
            variant={'primary'}
            href={TELEGRAM_LINK}
            icon={<Lottie animationData={planeAnimation} loop style={{ width: 40, height: 40 }} />}
            onClick={() => console.log('click')}
          />
        </div>
        <div className={styles.imageContainer}>
          <img src={photo}></img>
        </div>
      </div>
    </section>
  );
};
