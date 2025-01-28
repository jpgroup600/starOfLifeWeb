import { useRef } from "react";
import s from "./archive.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArchiveHeading } from "../Svg/Svg";
import Image from "next/image";

const KoreanArchive = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

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
        .from(".archive-heading path", {
          strokeDashoffset: 1360,
          duration: 0.8,
          ease: "none",
        })
        .to(".archive-heading path", {
          duration: 0.8,
          fill: "black",
          ease: "power3",
        });

      gsap.set(".box-1", { xPercent: -100 });
      gsap.set(".box-2", { xPercent: 100 });

      mm.add("(min-width: 800px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".korean",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
              preventOverlaps: true,
              pin: true,
              pinSpacing: true,
              scrub: 1,
              end: "400%",
            },
            defaults: {
              ease: "power4.inOut",
            },
          })
          .to(".content", { scale: 0 , duration:2})
          .to(".box-1", { xPercent: 0,duration:2 })
          .to(".box-2", { xPercent: 0, duration: 2 }, "<0.2");
      });

      mm.add("(max-width: 799px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".korean",
              toggleActions: "play none none reverse",
              fastScrollEnd: true,
              preventOverlaps: true,
              pin: true,
              pinSpacing: true,
              scrub: 1,
              end: "400%",
            },
            defaults: {
              ease: "power4.inOut",
            },
          })
          .to(".content", { scale: 0,duration:8 })
          .to(".box-1", { xPercent: 0, duration:4 })
          .to(".box-2", { xPercent: 0, duration:8 })
          
      });
    },
    { scope: container }
  );

  return (
    <section id="archive" ref={container} className={s.main}>
      <div className={`archive-heading ${s.heading}`}>
        {/* <ArchiveHeading /> */}
      </div>
      <div className={`korean ${s.koreanContent}`}>
        <div className={`box-1 ${s.koreanContent_box}`}>
          <Image fill src="/korean-archive/marketing.jpg" alt="img" />
          <h2>Marketing</h2>
          <p className={s.koreanContent_box_p}>믿을만한 마케터가 필요하신가요?</p>
          <p className={s.koreanContent_box_smallp}>
            대기업 프로젝트를 운영하는 마케터가 여러분의 파트너가<br></br>
            되어드리겠습니다
          </p>
        </div>
        <div className={`box-2 ${s.koreanContent_box}`}>
          <Image fill src="/korean-archive/programming.jpg" alt="img" />
          <h2>Programming</h2>
          <p className={s.koreanContent_box_p}>믿을만한 개발자가 필요하신가요?</p>
          <p className={s.koreanContent_box_smallp}>
            글로벌 기업 프로젝트를 진행한 개발자가 여러분의 파트너가 <br></br>
            되어드리겠습니다
          </p>
        </div>
        <div className={`content ${s.koreanContent_text}`}>
          <h2>Start Your Business</h2>
          <p>
            사업의 복잡한 과정을
            <br />
            한번에 해결할수있게 도와드립니다
          </p>
        </div>
      </div>
    </section>
  );
};

export default KoreanArchive;
