import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>About Us!</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
          laboriosam, officiis ullam distinctio ab facere, voluptatem ex, cum
          impedit obcaecati nihil architecto aliquam vero magnam deserunt!
          Voluptas ab pariatur ratione!
        </p>
        <Link href="/about" className={styles.learnMore}>
          Learn More
        </Link>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/bannerImg.png" alt="idea" fill />
      </div>
    </main>
  );
};

export default AboutPage;
