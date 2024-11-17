import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Give life to your ideas!</h1>
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
        <Image className={styles.img} src="/bannerImg1.png" alt="idea" fill />
      </div>
    </main>
  );
}
