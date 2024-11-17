"use client";

import Link from "next/link";
import styles from "./links.module.css";
import { usePathname } from "next/navigation";

const Links = ({ title, path }) => {
  const pathName = usePathname();
  return (
    <Link
      className={`${styles.navlink} ${
        pathName === path && styles.activenavlink
      }`}
      href={path}
    >
      {title}
    </Link>
  );
};

export default Links;
