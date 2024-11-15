import React from "react";
import Links from "./links/Links";

const Navbar = () => {
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
    <nav>
      <div>Logo</div>
      <div>
        {linksArray.map((link, index) => (
          <Links key={index} title={link.title} path={link.path} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
