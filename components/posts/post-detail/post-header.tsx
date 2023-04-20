import { Post } from "@/types/post";
import Image from "next/image";
import classes from "./post-header.module.css";

type Props = {
  post: Post;
};

const PostHeader = ({ post }: Props) => {
  return (
    <header className={classes.header}>
      <h1>{post.title}</h1>
      <Image src={post.image} alt={post.title} width={200} height={150} />
    </header>
  );
};

export default PostHeader;
