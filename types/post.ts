export type Post = {
  title: string;
  image: string;
  excerpt: string;
  slug: string;
  date: Date;
  content: string;
  isFeatured: boolean;
};

export type ContactDetails = {
  email: string;
  name: string;
  message: string;
};
