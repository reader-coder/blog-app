import styles from "./loading.module.css";
import Image from "next/image";

const Loading = () => {
  return (
    <div className={styles.container}>
      <Image src="/loading.gif" alt="loading" width={500} height={500} />
    </div>
  );
};

export default Loading;
