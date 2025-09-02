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
          .to(".content", { scale: 0, duration: 2 })
          .to(".box-1", { xPercent: 0, duration: 2 })
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
          .to(".content", { scale: 0, duration: 8 })
          .to(".box-1", { xPercent: 0, duration: 4 })
          .to(".box-2", { xPercent: 0, duration: 8 })

      });
    },
    { scope: container }
  );

  return (
    <section id="archive" ref={container} className={s.main}>

      <div className={`content ${s.koreanContent_text}`}>
        <p style={{fontSize:"3.5rem",fontWeight:"bold", lineHeight:"1.2"}}>브랜딩이 잘되야 <br></br> 가성비가 올라갑니다</p>
        <p>
          소비자의 하루에 스며들어 <br></br>  
          브랜드가 아닌 취향이 되도록 <br></br>
          당신의 브랜드를 다시 정의합니다
        </p>
      </div>
    </section>
  );
};

export default KoreanArchive;
