import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import { Post } from "@/types/post";

type Props = {
  post: Post;
};

const PostContent = ({ post }: Props) => {
  return (
    <article className={classes.content}>
      <PostHeader post={post} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
