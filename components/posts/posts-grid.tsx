import classes from "@/components/posts/posts-grid.module.css";
import PostItem from "./post-item";
import { Post } from "@/types/post";

type Props = {
  posts: Post[];
};

const PostsGrid = ({ posts }: Props) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
