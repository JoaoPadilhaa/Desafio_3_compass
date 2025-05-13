import React from 'react';
import styles from  './herosection.module.css';
import type { url } from 'inspector';

const HeroSection: React.FC = () => {
    return (
    <section className={styles.hero}>

      <div className={styles.textContent}>
        <h1>
          <span className={styles.highlight}>One More Friend</span>
          <br />
          <span className={styles.moreFun}>Thousands More Fun!</span>
        </h1>
        <p>
          Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. 
          We have 200+ different pets that can meet your needs!
        </p>
        <div className={styles.buttons}>
          <button className={styles.viewIntro}>View Intro</button>
          <button className={styles.exploreNow}>Explore Now</button>
        </div>
      </div>
    </section>
    );
};

export default HeroSection;