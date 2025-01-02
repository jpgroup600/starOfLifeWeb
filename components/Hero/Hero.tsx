import s from "./hero.module.scss";
import { HeroArrowDown } from "../Svg/Svg";
import { useScrollTo } from "react-use-window-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Shape from "./Shape";
import { useRef } from "react";

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const scrollTo = useScrollTo();

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Desktop animation
    mm.add("(min-width: 800px)", () => {
      gsap
        .timeline({
          ease: "elastic.inOut(1, 0.3)", // Easing function
        })
        .to(".shapebox-shape-hero", {
          x: "160vw",
          y: "20vw",
          stagger: {
            each: 0.08,
            repeatDelay: 0.5,
          },
          delay: 0.3,
          duration: 8,
          ease: "elastic.out(1, 0.3)", // Starts slow and speeds up
        })
        .to(
          ".shapebox-shape-hero",
          {
            scale: 0.4,
            delay: 0.2,
            duration: 1,
            ease: "power1.in", // Starts slow and speeds up
          },
          "<0.3"
        )
        .to(
          ".shapebox-shape-hero",
          {
            scale: 1,
            y: "-20vw",
            delay: 0.4,
            duration: 4,
            ease: "power1.in", // Starts slow and speeds up
          },
          "<0.3"
        );
    });

    // Mobile animation
    mm.add("(max-width: 799px)", () => {
      gsap
        .timeline({
          ease: "elastic.inOut(1, 0.3)", // Easing function
        })
        .to(".shapebox-shape-hero", {
          x: "300vw",
          y: "70vw",
          stagger: {
            each: 0.1,
            repeatDelay: 0.3,
          },
          delay: 0.2,
          duration: 4,
          ease: "elastic.out(1, 0.3)", // Starts slow and speeds up
        })
        .to(
          ".shapebox-shape-hero",
          {
            scale: 0.5,
            delay: 0.1,
            duration: 0.5,
            ease: "power1.in", // Starts slow and speeds up
          },
          "<0.2"
        )
        .to(
          ".shapebox-shape-hero",
          {
            scale: 1,
            delay: 0.3,
            duration: 2,
            ease: "power1.in", // Starts slow and speeds up
          },
          "<0.2"
        );
    });
  });

  useGSAP(
    () => {
      gsap
        .timeline()
        .to(".para span", { opacity: 1, stagger: 0.06, y: 0, rotate: 0,delay:2});
    },
    { scope: container }
  );

  const text =
    "아이템과 아이디어는 있으신데 <br/> 함께 실행할 파트너는 없으신가요?";

  const para =
    "필요한 기획, 실행, 운영까지 대행사가 아닌 \n아이디어를 실행할 파트너가 되어드리겠습니다";

    const wrapTextInSpan = (str: string) => {
      return str.split("").map((char, index) => {
        if (char === "\n") {
          return <br key={index} />;
        }
        if (char === " ") {
          return <span key={index}>&nbsp;</span>;
        }
        return <span key={index}>{char}</span>;
      });
    };

  return (
    <section ref={container} id="hero" className={s.main}>
      <Shape />
      <div
        onClick={() => scrollTo({ top: innerHeight, behavior: "smooth" })}
        className={s.arrow}
      >
        <HeroArrowDown />
      </div>

      <div className={s.content}>
        <h2 className={`${s.heading} heading`}
        dangerouslySetInnerHTML={{ __html: text }}
        >
        </h2>
        <p className={`${s.para} para`}>{wrapTextInSpan(para)}</p>
      </div>
    </section>
  );
};

export default Hero;
