import Image from "next/image";
import s from "./client.module.scss";
import { useRef } from "react";
import SplitType from "split-type";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { useGSAP } from "@gsap/react";
import { ClientsHeading } from "../Svg/Svg";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import Shape from "./Shape";

const Client = () => {
  const container = useRef<HTMLDivElement>(null);
  const para = useRef<HTMLParagraphElement>(null);
  const paraHide = useRef<HTMLParagraphElement>(null);

  useIsomorphicLayoutEffect(() => {
    SplitType.create(para.current!, {
      types: "words",
      wordClass: "client-para-word",
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
                start: "top top",
                pin: ".shapebox",
                scrub: 3,
              },
            })
            .to(".shapebox-shape", { x: "100vw", y: -500, stagger: 0.08 });

          gsap
            .timeline({
              scrollTrigger: {
                trigger: container.current!,
                start: isDesktop ? "top 40%" : "top-=50 center",
                toggleActions: "play none none reverse",
                fastScrollEnd: true,
                preventOverlaps: true,
              },
              defaults: {
                ease: "power4.inOut",
              },
            })
            .from(
              ".client-heading path",
              {
                strokeDashoffset: 1260,
                duration: 0.8,
                ease: "none",
              },
              "<"
            )
            .to(".client-heading path", {
              duration: 0.8,
              fill: "black",
              ease: "power3",
            });

          if (isDesktop) {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".client-grid-para",
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
              .to(".client-para-word", {
                clipPath: "inset(0% 0% 0% 0%)",
                stagger: 0.2,
              });
          } else {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".client-grid",
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
              .from(".client-logo", {
                clipPath: "inset(100% 0% 0% 0%)",
                stagger: 0.1,
              });

            gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".client-grid-para",
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
              .to(".client-para-word", {
                clipPath: "inset(0% 0% 0% 0%)",
                stagger: 0.2,
              });
          }
        }
      );
    },
    { scope: container }
  );

  return (
    <section ref={container} id="clients" className={s.main}>
      {/* <Elements /> */}
      <Shape />
      <div className={`client-heading ${s.heading}`}>
        {/* <ClientsHeading /> */}
        <h1>Why us?</h1>
      </div>
      <div className={s.grid}>
        {/* <div className={`client-grid ${s.grid_logos}`}>
          <Marquee>
            {[...Array(38)].map((e, i) => {
              return (
                <Image
                  key={i}
                  className={`client-logo ${s.grid_logo}`}
                  src={`/clients/${i}.png`}
                  height={1000}
                  width={1000}
                  alt="logo"
                />
              );
            })}
          </Marquee>
          <Marquee direction="right">
            {[...Array(38)].map((e, i) => {
              return (
                <Image
                  key={i}
                  className={`client-logo ${s.grid_logo}`}
                  src={`/clients/${i}.png`}
                  height={1000}
                  width={1000}
                  alt="logo"
                />
              );
            })}
          </Marquee>
        </div> */}
        <div className={`client-grid-para ${s.grid_para}`}>
          <p ref={para}>
          우리의 마케팅은 당신의 브랜드를 다시 정의하는 것으로 부터 시작합니다. <br /> 그리고 우리가 가장 잘하는 일들을 당신의 브랜드에 맞춰 재구성합니다  {" "}
          </p>
          <p ref={paraHide} className={s.grid_para_hide}>
          우리의 마케팅은 당신의 브랜드를 다시 정의하는 것으로 부터 시작합니다. <br /> 그리고 우리가 가장 잘하는 일들을 당신의 브랜드에 맞춰 재구성합니다  {" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Client;
