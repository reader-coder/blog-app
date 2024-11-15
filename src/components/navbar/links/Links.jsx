import Link from "next/link";

const Links = ({ title, path }) => {
  return <Link href={path}>{title}</Link>;
};

export default Links;
