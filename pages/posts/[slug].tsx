import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "@/lib/posts-util";
import { GetStaticPropsContext } from "next";
import { AppProps } from "next/dist/shared/lib/router/router";
import { ParsedUrlQuery, stringify } from "querystring";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const SinglePostPage = ({ post }: AppProps) => {
  return <PostContent post={post} />;
};

export function getStaticProps(context: GetStaticPropsContext) {
  const { slug } = context.params as IParams;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
}

export default SinglePostPage;
