import FeaturedPosts from "@/components/home/featured-posts";
import Hero from "@/components/home/hero";
import { Post } from "@/types/post";

const DUMMY_POSTS: Post[] = [
  {
    title: "Ode à Lua",
    slug: "ode-a-lua",
    image: "https://images.pexels.com/photos/3489072/pexels-photo-3489072.jpeg",
    excerpt: "Noite silenciosa, / Iluminada pela lua, / Oh, como é bela!",
    date: new Date("2022-03-15"),
  },
  {
    title: "Soneto de Amor",
    slug: "soneto-de-amor",
    image:
      "https://images.pexels.com/photos/14606285/pexels-photo-14606285.jpeg",
    excerpt:
      "Teus olhos brilham / Como estrelas no céu / E meu coração bate mais forte",
    date: new Date("2022-02-14"),
  },
  {
    title: "A Árvore Solitária",
    slug: "arvore-solitaria",
    image:
      "https://images.pexels.com/photos/14856666/pexels-photo-14856666.jpeg",
    excerpt:
      "Uma árvore solitária / No meio do campo vasto / Contempla o horizonte",
    date: new Date("2022-01-05"),
  },
  {
    title: "Haikai da Primavera",
    slug: "haikai-da-primavera",
    image:
      "https://images.pexels.com/photos/16180907/pexels-photo-16180907.jpeg",
    excerpt: "As flores florescem / E o vento sopra suave / Primavera chegou",
    date: new Date("2022-03-21"),
  },
  {
    title: "O Mar Infinito",
    slug: "mar-infinito",
    image: "https://images.pexels.com/photos/4175773/pexels-photo-4175773.jpeg",
    excerpt: "O mar infinito / Traz consigo mistérios / E o som das ondas",
    date: new Date("2022-04-10"),
  },
  {
    title: "Poema da Noite",
    slug: "poema-da-noite",
    image:
      "https://images.pexels.com/photos/16317327/pexels-photo-16317327.jpeg",
    excerpt:
      "A noite é misteriosa / Mas ao mesmo tempo bela / Como um segredo guardado",
    date: new Date("2022-05-03"),
  },
  {
    title: "O Voo do Pássaro",
    slug: "voo-do-passaro",
    image: "https://images.pexels.com/photos/207237/pexels-photo-207237.jpeg",
    excerpt:
      "O pássaro voa alto / E o céu é seu limite / Como um sonho realizado",
    date: new Date("2022-06-08"),
  },
  {
    title: "A Chuva de Verão",
    slug: "chuva-de-verao",
    image: "https://images.pexels.com/photos/8575051/pexels-photo-8575051.jpeg",
    excerpt:
      "A chuva de verão / Refresca o corpo e a alma / E traz vida à terra",
    date: new Date("2022-07-20"),
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
