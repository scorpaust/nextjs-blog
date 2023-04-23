import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import { Post } from "@/types/post";
import { NormalComponents } from "react-markdown/lib/complex-types";
import { CodeProps, SpecialComponents } from "react-markdown/lib/ast-to-react";
import { ElementType, FunctionComponent } from "react";
import { language } from "gray-matter";

type Props = {
  post: Post;
};

const PostContent = (props: Props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers: Partial<
    Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
  > = {
    // image(image) {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph: { children?: any; node?: any }) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code({ node, inline, className, children, ...props }: CodeProps) {
      const match = /language-(\w+)/.exec(className || "");

      return !inline && match ? (
        <SyntaxHighlighter
          style={atomDark}
          language={match[1]}
          children={String(children).replace(/\n$/, "")}
        />
      ) : (
        <code className={className} {...props} />
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader post={post} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
