import { Post } from "@/types/post";
import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

type Props = {
  posts: Post[];
};

const AllPosts = ({ posts }: Props) => {
  return (
    <section className={classes.posts}>
      <h1>Todas as Postagens</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
