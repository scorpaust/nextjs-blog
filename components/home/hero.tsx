import classes from "@/components/home/hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Dinis.jpg"
          alt="Fotografia de Dinis Costa"
          width={300}
          height={300}
        />
      </div>
      <h1>Olá, sou o Dinis</h1>
      <p>Blog sobre Poesia</p>
    </section>
  );
};

export default Hero;
