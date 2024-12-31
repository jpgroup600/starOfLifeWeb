import s from "./services.module.scss";
import { ServicesHeading } from "../Svg/Svg";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { TopLeftArrow } from "./Svgs";
import TextPlugin from "gsap/dist/TextPlugin";
import { koreanData } from "./data";

const KoreanServices = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(TextPlugin);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current!,
            start: "top 100%",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: "power4.inOut",
          },
        })
        .from(".services-heading path", {
          strokeDashoffset: 1500,
          duration: 0.8,
          ease: "power3",
        })
        .to(".services-heading path", {
          duration: 0.8,
          fill: "black",
          ease: "power3",
        });

      gsap.set(".cover-1", { yPercent: 150 });
      gsap.set(".cover-2", { yPercent: 150 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section",
          end: "+=2000",
          pin: true,
          pinSpacing: true,
          scrub: 1,
        },
      });

      koreanData.map(({ title }, i) => {
        if (koreanData.length !== i + 1) {
          tl.to(`.cover-${i + 1}`, { yPercent: 0, duration: 2 }).to(
            ".title span",
            { text: title },
            "<"
          );
        }
      });
    },
    { scope: container }
  );

  return (
    <section id="services" ref={container} className={s.main}>
      <div className={`services-heading ${s.heading}`}>
        <ServicesHeading />
        <div className={s.heading_text}></div>
      </div>
      <div className={`section ${s.koreansection}`}>
        <h2 className={`${s.title} title`}>
          <span>Marketing</span>
        </h2>
        <div className={s.koreansection_relative}>
          {koreanData.map(({ heading, imageOne, imageTwo, menu }, i) => {
            return (
              <div
                style={{ zIndex: i }}
                key={i}
                className={`cover-${i} ${s.koreansection_cover}`}
              >
                <div className={s.koreansection_cover_list}>
                  {menu.map((e, i) => {
                    return (
                      <h4 key={i}>
                        <span></span>
                        {e}
                      </h4>
                    );
                  })}
                </div>
                <div className={s.koreansection_cover_box}>
                  <div className={s.koreansection_cover_cardHead}>
                    <h3>{heading}</h3>
                    <TopLeftArrow />
                  </div>
                  <div className={s.koreansection_cover_cardMid}>
                    {menu.map((e, i) => {
                      return (
                        <h4 key={i}>
                          <span></span>
                          {e}
                        </h4>
                      );
                    })}
                  </div>

                  <div className={s.koreansection_cover_cardBody}>
                    <Image
                      src={imageOne}
                      alt="img"
                      height={1080}
                      width={1920}
                    />
                    <Image
                      src={imageTwo}
                      alt="img"
                      height={1080}
                      width={1920}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KoreanServices;
