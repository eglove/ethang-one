import { PropertiesChildren } from '../../../types/common';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { ParticlesContainer } from '../particles/particles';
import styles from '../styles/particles.module.css';

export const Page = ({ children }: PropertiesChildren): JSX.Element => {
  return (
    <div className={styles.ParticleContainer}>
      <ParticlesContainer />
      <div className={styles.ContentContainer}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};
