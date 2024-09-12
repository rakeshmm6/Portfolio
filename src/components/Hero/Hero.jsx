import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rakesh</h1>
        <p className={styles.description}>
        I am a skilled Flutter, React Native, React.js, and Next.js developer with a strong command of these technologies. If you'd like to know more about my work or collaborate, feel free to reach out!
        </p>
        
      </div>
      <img
        src={getImageUrl("hero/heroSelf.JPG")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
