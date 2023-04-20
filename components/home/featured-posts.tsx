import classes from "@/components/home/featured-posts.module.css";
import { Post } from "@/types/post";
import PostsGrid from "../posts/posts-grid";

type Props = {
  posts: Post[];
};

const FeaturedPosts = ({ posts }: Props) => {
  return (
    <section className={classes.latest}>
      <h2>Postagens em Destaque</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
