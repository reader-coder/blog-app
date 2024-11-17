import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ url, title, desc }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.unsplash.com/photo-1731491895205-efb4def35547?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="blog image"
          fill
        />
      </div>
      <h3 className={styles.cardTitle}>Locations to explore!</h3>
      <Link className={styles.readMore} href="#">
        Read More
      </Link>
    </div>
  );
};

export default PostCard;
