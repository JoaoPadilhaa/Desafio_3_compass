import React from 'react';
import styles from './DogCards.module.css';

const DogCards = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img src="/imgs/puppies.jpg" alt="Pomeranian running" className={styles.image} />
        <span className={styles.tag}>Pet knowledge</span>
        <h3 className={styles.title}>What is a Pomeranian? How to Identify Pomeranian Dogs</h3>
        <p className={styles.description}>
          The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only
          that, the small, lovely, smart, friendly, and skillful circu...
        </p>
      </div>

      <div className={styles.card}>
        <img src="/imgs/shiba.jpg" alt="Dog with food" className={styles.image} />
        <span className={styles.tag}>Pet knowledge</span>
        <h3 className={styles.title}>Dog Diet You Need To Know</h3>
        <p className={styles.description}>
          Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can
          easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially...
        </p>
      </div>

      <div className={styles.card}>
        <img src="/imgs/husky.jpg" alt="Dog destroying couch" className={styles.image} />
        <span className={styles.tag}>Pet knowledge</span>
        <h3 className={styles.title}>Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively</h3>
        <p className={styles.description}>
          Dog bites are common during development. However, no one wants to see their furniture or important items
          being bitten by a dog.
        </p>
      </div>
    </div>
  );
};

export default DogCards;
