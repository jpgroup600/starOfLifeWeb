import { useRef } from "react";
import Card from "./Card";
import Elements from "./Elements";
import s from "./archive.module.scss";
import { data } from "./data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArchiveHeading } from "../Svg/Svg";
import Shape from "./Shape";

const Archive = () => {
  const container = useRef<HTMLElement>(null);
  const grid = useRef<HTMLDivElement>(null);

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

      mm.add(
        { isDesktop: `(min-width: 800px)`, isMobile: `(max-width: 799px)` },
        (context) => {
          let { isDesktop } = context.conditions as { isDesktop: boolean };

          if (isDesktop) {
            gsap.to(".archive-card-0", {
              yPercent: -80,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-0",
                scrub: 1,
              },
            });
            gsap.to(".archive-card-1", {
              yPercent: -40,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-1",
                scrub: 1,
              },
            });
            gsap.to(".archive-card-2", {
              yPercent: -80,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-0",
                scrub: 1,
              },
            });
            gsap.to(".archive-card-3", {
              yPercent: -20,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-3",
                scrub: 1,
              },
            });
            gsap.to(".archive-card-4", {
              yPercent: -60,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-2",
                scrub: 1,
              },
            });
            gsap.to(".archive-card-5", {
              yPercent: -20,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-5",
                scrub: 1,
              },
            });
            gsap.to(".archive-card-6", {
              yPercent: -60,
              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-5",
                scrub: 1,
              },
            });
            gsap.to(".archive-card-7", {
              yPercent: -20,
              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-5",
                scrub: 1,
              },
            });
            gsap.to(".archive-card-8", {
              yPercent: -20,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-8",
                scrub: 1,
              },
            });
            gsap.to(".archive-card-9", {
              yPercent: -20,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-7",
                scrub: 1,
              },
            });
            gsap.to(".archive-card-10", {
              yPercent: -60,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-10",
                scrub: 1,
              },
            });
            gsap.to(".archive-card-11", {
              yPercent: -100,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-9",
                scrub: 1,
              },
            });
            gsap.to(".archive-card-12", {
              yPercent: -40,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-12",
                scrub: 1,
              },
            });
            gsap.to(".archive-card-13", {
              yPercent: -70,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-11",
                scrub: 1,
              },
            });
            gsap.to(".archive-card-15", {
              yPercent: -70,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-13",
                scrub: 1,
              },
            });
          }
        }
      );

      gsap.set(".shapebox-shape", { x: "40vw" });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current!,
            start: "top top",
            pin: ".shapebox",
            scrub: 3,
          },
        })
        .to(".shapebox-shape", { scale: 1, stagger: 0.07 })
        .to(".shapebox-shape", { x: "100vw", y: -200, stagger: 0.08 }, "<0.1")
        .to(".shapebox-shape", { x: "-100vw", y: -800, stagger: 0.06 })
        .to(".shapebox-shape", { x: "50vw", stagger: 0.06 })
        .to(".shapebox-shape", { y: 0, stagger: 0.06 }, "<0.2")
        .to(".shapebox-shape", { scale: 0, stagger: 0.06 }, "<0.2");
    },
    { scope: container }
  );

  return (
    <section id="archive" ref={container} className={s.main}>
      {/*<Elements />*/}
      <Shape />
      <div className={`archive-heading ${s.heading}`}>
        <ArchiveHeading />
      </div>
      <div ref={grid} className={s.grid}>
        {[...data].map((e, i) => {
          return <Card id={i} {...e} key={i} />;
        })}
      </div>
    </section>
  );
};

export default Archive;
