import { data } from "./data";
import s from "./services.module.scss";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ServicesHeading } from "../Svg/Svg";
import Shape from "../Work/Shape";
import Image from "next/image";

const Services = () => {
  const container = useRef<HTMLElement>(null);

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
                start: "top 100%",
                toggleActions: "play none none reverse",
                fastScrollEnd: isDesktop,
                preventOverlaps: isDesktop,
              },
              defaults: {
                ease: "power4.inOut",
              },
            })
            .from(".services-heading path", {
              strokeDashoffset: 1500,
              duration: 12,
              ease: "power3",
            })
            .to(".services-heading path", {
              duration: 12,
              fill: "black",
              ease: "power3",
            });
        }
      );
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.slider`,
          start: "top top",
          end: "bottom+=8000 top",
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
        defaults: { ease: "none" },
      });
      data.map((e, i) => {
        tl.to(`.slide-${i}`, { clipPath: "circle(100% at 50% 50%)" }) //
          .to(
            `.shapebox-shape-${i}`,
            {
              x: i % 2 === 0 ? "100vw" : "-100vw",
              yPercent: 100,
              stagger: 0.8,
              duration: 4,
            },
            "<"
          )
          .to(
            `.slide-img-${i}`,
            { right: "100%", duration: 8, ease: "none" },
            "<"
          );
      });
    },
    { scope: container }
  );

  return (
    <section id="services" ref={container} className={s.main}>
      <div className={`services-heading ${s.heading}`}>
        <ServicesHeading />
      </div>
      <div className={`slider ${s.slider}`}>
        {data.map(({ heading, info }, i) => {
          return (
            <div
              key={i}
              style={{ backgroundColor: "#ebebeb", zIndex: i }}
              className={`slide-${i} ${s.slide}`}
            >
              <Shape id={i} />
              <h3>{heading}</h3>
              <div className={`slide-img-${i} ${s.slide_img}`}
              >
                <div className={s.slide_img_info_box}>
                {info?.map((e, i) => {
                  return <div key={i} className={s.slide_img_info}>
                    <p>{e}</p>
                      
                    </div>
                })}
                </div>
              </div>
              {/* <Image
                className={`slide-img-${i} ${s.slide_img}`}
                src={`/services/${i}.png`}
                alt="slide-img"
                width={1920}
                height={1080}
              /> */}
              
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
