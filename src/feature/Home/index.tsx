import styles from './styles.module.scss';

export const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <div>social</div>
        <div>info</div>
        <div>img</div>
      </div>
    </section>
  );
};
