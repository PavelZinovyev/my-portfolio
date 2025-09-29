import styles from './styles.module.scss';
import photo from '../../assets/home_self_compress.webp';
import { Services } from '../../shared/Services';
import { Button } from '../../shared/Button';
import { TELEGRAM_LINK } from '../../constants/telegramLink';
import { useWindowSize } from '../../hooks/useWindowSize';
import { ScrollDownBlock } from '@/shared/ScrollDownBlock';
import { motion } from 'framer-motion';
import { FADE_IN_LEFT, FADE_IN_RIGHT } from '@/constants/motion';

export const Home = () => {
  const { width } = useWindowSize();

  const isDesktop = width && width > 1024;
  const servicesDirection = isDesktop ? 'column' : 'row';

  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <Services direction={servicesDirection} />
        <motion.div className={styles.homeWrapper} {...FADE_IN_LEFT}>
          <h1 className={styles.headerInfo}>Hi, i am Pavel!</h1>
          <h3 className={styles.postTitle}>Front-end Developer</h3>
          <p className={styles.about}>
            Passionate about creating engaging digital experiences and fostering a collaborative,
            positive team environment
          </p>
          <Button text={'Contact me'} variant={'primary'} href={TELEGRAM_LINK} />
        </motion.div>
        <motion.div className={styles.imageContainer} {...FADE_IN_RIGHT}>
          <img src={photo} alt="Portrait of Pavel Zinovyev"></img>
        </motion.div>
      </div>
      <ScrollDownBlock />
    </section>
  );
};
