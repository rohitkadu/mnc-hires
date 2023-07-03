import React from "react";
import logo from "../../assets/images/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="/" className={styles.navbarBrand}>
          <img src={logo} alt="MNC logo" className={styles.logo} />
          <span className={styles.companyName}>MNC</span>
          <span className={styles.hires}>-Hires</span>
        </a>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="/job-listings" className={styles.navLink}>Job Listings</a>
          </li>
          <li className={styles.navItem}>
            <a href="/blog" className={styles.navLink}>Blog</a>
          </li>
          <li className={styles.navItem}>
            <a href="/about-us" className={styles.navLink}>About Us</a>
          </li>
        </ul>
        <div className={styles.signInButton}>
          <a href="/signin" className={styles.button}>Sign In</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
