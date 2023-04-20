import FeaturedPosts from "@/components/home/featured-posts";
import Hero from "@/components/home/hero";
import { getFeaturedPosts } from "@/lib/posts-util";
import { AppProps } from "next/dist/shared/lib/router/router";

const HomePage = ({ posts }: AppProps) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 100,
  };
}

export default HomePage;
