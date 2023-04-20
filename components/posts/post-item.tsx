import classes from "@/components/posts/post-item.module.css";
import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: Post;
};

const PostItem = ({ post }: Props) => {
  const { title, image, excerpt, slug, date } = post;

  const formattedDate = new Date(date).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const linkPath = `posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
