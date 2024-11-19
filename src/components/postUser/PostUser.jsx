import React from "react";
import styles from "./PostUser.module.css";
import Image from "next/image";
import { getUser } from "@/lib/data";

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <p className={styles.written}>Written by</p>
      <span className={styles.author}>
        <div className={styles.imgContainer}>
          {user.img ? (
            <Image className={styles.img} src={user.img} alt="user" fill />
          ) : (
            <Image className={styles.img} src="/user.png" alt="user" fill />
          )}
        </div>
        <p className={styles.name}>{user.username}</p>
      </span>
    </div>
  );
};

export default PostUser;
