import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

const SinglePostPage = async ({ params }) => {
  const { slug } = await params;

  const post = await getPost(slug);
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
      <div className={styles.textContainer}>
        <h2 className={styles.blogHeading}>{post.title}</h2>
        <div className={styles.dateAuthorBox}>
          <p className={styles.date}>14/11/2024</p>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
        </div>
      </div>
      <hr />
      <div className={styles.content}>
        {post.desc?.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            <p className={styles.paragraph}>{line}</p>
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SinglePostPage;
