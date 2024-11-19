import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {post.img ? (
          <Image className={styles.img} src={post.img} alt="blog image" fill />
        ) : (
          <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1731491895205-efb4def35547?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="blog image"
            fill
          />
        )}
      </div>
      <h3 className={styles.cardTitle}>{post.title}</h3>
      <p className={styles.desc}>{`${post.desc
        .split(" ")
        .slice(0, 4)
        .join(" ")}...`}</p>
      <Link className={styles.readMore} href={`/blog/${post.slug}`}>
        Read More
      </Link>
    </div>
  );
};

export default PostCard;
