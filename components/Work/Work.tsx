import { useRef, useState } from "react";
import s from "./work.module.scss";
import { data } from "./data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { WorkHeading } from "../Svg/Svg";
import Image from "next/image";
import { useSnapshot } from "valtio";
import { store } from "@/store";
import Shape from "./Shape";
import Link from "next/link";
import MediaDisplay from "./MediaDisplay";

const Work = () => {
  const container = useRef<HTMLElement>(null);

  const [counter, setCounter] = useState<number>(1);

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
                fastScrollEnd: isDesktop,
                preventOverlaps: isDesktop,
              },
              defaults: {
                ease: "power4.inOut",
              },
            })
            .from(".work-heading path", {
              strokeDashoffset: 2340,
              duration: 0.8,
              ease: "none",
            })
            .to(".work-heading path", {
              duration: 0.8,
              fill: "black",
              ease: "power3",
            });

          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: `.slider`,
              start: isDesktop ? "top+=100 top" : "top top",
              end: `bottom+=${data.length * 1000} bottom`,
              scrub: 3,
              pin: true,
              pinSpacing: true,
            },
            defaults: { ease: "none" },
          });

          data.map((e, i) => {
            tl.call(() => setCounter(i + 1))
              .to(`.slide-${i - 1}`, { yPercent: -100 })
              .to(
                `.shapebox-shape-${i}`,
                {
                  x: i % 2 === 0 ? "100vw" : "-100vw",
                  yPercent: 70,
                  stagger: 0.8,
                  duration: 4,
                },
                "<"
              )
              .from(`.slide-${i}`, { yPercent: i === 0 ? 0 : 100 }, "<")
              .from(`.heading-${i}`, { scale: 1.6 }, "<0.7")
              .from(`.image-${i}`, {
                left: isDesktop ? "110%" : "80%",
                top: isDesktop ? "60%" : "100%",
                rotate: -35,
                duration: 5,
              })
              .from(
                `.image-second-${i}`,
                {
                  left: isDesktop ? "120%" : "80%",
                  top: isDesktop ? "50%" : "130%",
                  rotate: -35,
                  duration: 5,
                },
                "<0.6"
              )
              .call(() => setCounter(i + 1));
          });
        }
      );
    },
    { scope: container }
  );

  const { workHeadingPointerEnter, workHeadingPointerLeave } =
    useSnapshot(store);

  return (
    <section id="work" ref={container} className={s.main}>
      <div className={`work-heading ${s.heading}`}>
        <WorkHeading />
      </div>

      <div className={`slider ${s.slider}`}>
        <div className={s.counter}>
          <h2>
            0{counter}/0{data.length}
          </h2>
        </div>

        {data.map(({ name, link,media}, i) => {
          return (
            <Link href={link ? link : "#"}>
              <div key={i} className={`slide-${i} ${s.slide}`}>
                <Shape id={i} />
                <div
                  className={`image-${i} ${s.image}`}
                >
                  <MediaDisplay isVideo={media?.[0]?.isVideo || false}
                    mediaSrc={media?.[0]?.url || ""}
                    altText={`video`} />
                </div>

                <div
                  className={`image-second-${i} ${s.image}`}

                >
                   <MediaDisplay isVideo={media?.[1]?.isVideo || false}
                    mediaSrc={media?.[1]?.url || ""}
                    altText={`video`} />
                </div>


                <div
                  onPointerEnter={workHeadingPointerEnter}
                  onPointerLeave={workHeadingPointerLeave}
                >
                  <h2
                    className={`heading-${i}`}
                    dangerouslySetInnerHTML={{ __html: name }}
                  ></h2>
                  <h2 className={`heading-${i}`} data-stroke
                    dangerouslySetInnerHTML={{ __html: name }}
                  >

                  </h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
