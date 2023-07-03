import React from "react";
import styles from "./Hero.module.css";
import person_1 from "../../assets/images/person_searching_1.png";
import person_2 from "../../assets/images/person_searching_2.png";
import bg_video from "../../assets/images/bg_video.mp4";

const Hero = () => {
  return (
    <div className={styles.hero}>
        <video className={styles.backgroundVideo} autoPlay loop muted>
        <source src={bg_video} type="video/mp4" />
      </video>
      
      <div className={styles.heroLeft}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>DISCOVER YOUR CAREER POTENTIAL</h1>
          {/* <p className={styles.heroCta}>Find Your Dream Job at MNC</p> */}
          <p className={styles.heroIntro}>
            We connect talented individuals with leading companies for global job placements, providing expert career guidance, personalized matching, and industry connections.
          </p>
          <button className={styles.ctaButton}>Find Your Dream Job</button>
          
        </div>
      </div>
      <div className={styles.heroRight}>
        <img src={person_2} alt="Image 1" className={styles.heroImage} />
        <img src={person_1} alt="Image 2" className={styles.heroImage} />
      </div>
      
    </div>
  );
};

export default Hero;
