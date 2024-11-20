import { connectDB } from "@/lib/connectDB";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/models";

export default function Home() {
  const postToDB = async (formData) => {
    "use server";
    const { title, desc, img, slug, userId } = Object.fromEntries(formData);
    console.log(title, desc, img, slug, userId);
    try {
      connectDB();
      const newPost = new Post({
        title,
        desc,
        img,
        slug,
        userId,
      });
      await newPost.save();
      console.log("Saved to DB");
    } catch (err) {
      throw new Error("Error while saving");
    }
  };

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
        <form action={postToDB}>
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="desc" placeholder="Description" />
          <input type="text" name="slug" placeholder="Slug" />
          <input type="text" name="img" placeholder="Image URL" />
          <input type="text" name="userId" placeholder="User ID" />
          <button>Submit</button>
        </form>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/bannerImg1.png" alt="idea" fill />
      </div>
    </main>
  );
}
