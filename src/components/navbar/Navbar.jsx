"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  const linksArray = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <div className={styles.links}>
        {linksArray.map((link, index) => (
          <Links key={index} title={link.title} path={link.path} />
        ))}
        {session ? (
          <>
            {isAdmin && <Links title={"Admin"} path={"/admin"} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <Links title={"Login"} path={"/login"} />
        )}
      </div>
      <button
        className={styles.burgerMenu}
        onClick={() => setOpen((prev) => !prev)}
      >
        <GiHamburgerMenu className={styles.menuIcon} size={35} />
      </button>
      <div className={`${styles.sidebar} ${open && styles.sidebarOpen}`}>
        <div className={styles.closeBtn}>
          <button
            className={styles.burgerMenu}
            onClick={() => setOpen((prev) => !prev)}
          >
            <IoMdClose className={styles.menuIcon} size={35} />
          </button>
        </div>
        <div className={styles.sideLinks}>
          {linksArray.map((link, index) => (
            <Links key={index} title={link.title} path={link.path} />
          ))}
          {session ? (
            <>
              {isAdmin && <Links title={"Admin"} path={"/admin"} />}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <Links title={"Login"} path={"/login"} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
