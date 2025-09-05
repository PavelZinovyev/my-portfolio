import styles from './styles.module.scss';
import photo from '../../assets/home_self.png';

export const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <div>social</div>
        <div>info</div>
        <div>
          <img src={photo}></img>
        </div>
      </div>
    </section>
  );
};
