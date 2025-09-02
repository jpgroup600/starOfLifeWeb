import Image from "next/image";
import s from "./about.module.scss";
import { useRef } from "react";
import SplitType from "split-type";
import Elements from "./Elements";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AboutHeading } from "../Svg/Svg";
import Shape from "./Shape";

const About = () => {
  const container = useRef<HTMLDivElement>(null);
  const para = useRef<HTMLParagraphElement>(null);
  const paraHide = useRef<HTMLParagraphElement>(null);

  const htmlContent = `
    
우리는 고객을 먼저 이해하는것부터 시작합니다 <br>
우리는 문제를 정확히 정의하고, 그들의 언어로 답하며 <br>
모든 채널의 타이밍을 놓치지 않습니다 <br>
모든 픽셀에 당신의 브랜드의 가치를 담아 고객을 연결하고<br>
결국 숫자로 증명되는 결과를 만듭니다.
  `

  useIsomorphicLayoutEffect(() => {
    SplitType.create(para.current!, {
      types: "words",
      wordClass: "about-para-word",
    });
    SplitType.create(paraHide.current!, {
      types: "words",
    });
  }, [para, paraHide]);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add(
        { isDesktop: `(min-width: 800px)`, isMobile: `(max-width: 799px)` },
        (context) => {
          let { isDesktop } = context.conditions as { isDesktop: boolean };
          gsap
            .timeline({
              scrollTrigger: {
                trigger: container.current!,
                start: "top 40%",
                toggleActions: "play none none reverse",
                fastScrollEnd: true,
                preventOverlaps: true,
              },
              defaults: {
                ease: "power4.inOut",
              },
            })
            .from(".about-heading path", {
              strokeDashoffset: 1120,
              duration: 0.8,
              ease: "none",
            })
            .to(".about-heading path", {
              duration: 0.8,
              fill: "black",
              ease: "power3",
            });

          gsap
            .timeline({
              scrollTrigger: {
                trigger: isDesktop ? "#about-grid" : ".about-para-box",
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none reverse",
                fastScrollEnd: true,
                preventOverlaps: true,
                scrub: true,
              },
              defaults: {
                ease: "power4.inOut",
              },
            })
            .to(
              ".about-para-word",
              {
                clipPath: "inset(0% 0% 0% 0%)",
                stagger: 0.2,
              },
              "<"
            );
          gsap
            .timeline({
              scrollTrigger: {
                trigger: "#about-grid",
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none reverse",
                fastScrollEnd: true,
                preventOverlaps: true,
              },
              defaults: {
                ease: "power4.inOut",
              },
            })
            .from(".about-img", { clipPath: "inset(100% 0% 0% 0%)" })
            .from(".about-path-1", { xPercent: -50, y: -400, scale: 0 });
        }
      );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current!,
            start: "top bottom",
            end: "bottom+=140% bottom",
            pin: ".shapebox",
            scrub: 3,
          },
        })
        .to(".shapebox-shape", { x: "-80vw", y: 0, stagger: 0.08 })
        .to(
          ".shapebox-shape",
          { x: "30vw", yPercent: -200, stagger: 0.08 },
          "<0.6"
        );
    },
    { scope: container }
  );

  return (
    <section ref={container} id="about" className={s.main}>
      <Elements />
      <Shape />
      <div className={`about-heading ${s.heading}`}>
        <AboutHeading />
      </div>
      <div id="about-grid" className={s.grid}>
        <Image
          className={`about-img ${s.image}`}
          src="/owner.png"
          height={1000}
          width={1000}
          alt="owner"
        />
        <div className={`about-para-box ${s.box}`}>
          <p ref={para} className={s.content} dangerouslySetInnerHTML={{ __html: htmlContent }} />
          <p ref={paraHide} data-hide className={s.content} dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </div>
    </section>
  );
};

export default About;
