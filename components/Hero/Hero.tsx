import s from "./hero.module.scss";
import { HeroArrowDown } from "../Svg/Svg";
import { useScrollTo } from "react-use-window-scroll";

const Hero = () => {
  const scrollTo = useScrollTo();

  return (
    <section id="hero" className={s.main}>
      <div
        onClick={() => scrollTo({ top: innerHeight, behavior: "smooth" })}
        className={s.arrow}
      >
        <HeroArrowDown />
      </div>
      <div className={s.content}>
        <h2>
          아이템과 아이디어만 가져오세요
          <br />
          실행과 운영은 저희가 해드릴게요
        </h2>
        <p>아이디어 구현에 필요한 구축 부터 운영까지 모든것을 제공해드립니다</p>
      </div>
    </section>
  );
};

export default Hero;
