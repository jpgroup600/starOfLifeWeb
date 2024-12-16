import { useRef } from "react";
import s from "./showreel.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ShowreelHeading } from "../Svg/Svg";
import Shape from "./Shape";

const Showreel = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: `(min-width: 800px)`,
          isMobile: `(max-width: 799px)`,
        },
        (context) => {
          let { isDesktop } = context.conditions as { isDesktop: boolean };

          gsap
            .timeline({
              scrollTrigger: {
                trigger: container.current,
                start: "top 40%",
                toggleActions: "play none none reverse",
                fastScrollEnd: isDesktop,
                preventOverlaps: isDesktop,
              },
              defaults: {
                ease: "power4.inOut",
              },
            })
            .from(".showreel-heading path", {
              strokeDashoffset: 1740,
              duration: 0.8,
              ease: "none",
            })
            .to(".showreel-heading path", {
              duration: 0.8,
              fill: "black",
              ease: "power3",
            });

          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".showreel-video",
                start: "top bottom",
                toggleActions: "play none none reverse",
                fastScrollEnd: isDesktop,
                preventOverlaps: isDesktop,
              },
              defaults: {
                ease: "power4.inOut",
              },
            })
            .from(".showreel-video", {
              clipPath: "inset(100% 25% 0% 25%)",
              duration: 2,
            });
        }
      );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current!,
            start: "top-=500 center",
            pin: ".shapebox",
            scrub: 3,
          },
        })
        .to(".shapebox-shape", { x: "-120vw", stagger: 0.08 })
        .to(".shapebox-shape", { scale: 0.4, yPercent: -200 }, "<0.3");
    },
    { scope: container }
  );

  return (
    <section ref={container} id="showreel" className={s.main}>
      <Shape />
      <div className={`showreel-heading ${s.heading}`}>
        <ShowreelHeading />
      </div>
      <div
        className={`showreel-video`}
        style={{ padding: "56.25% 0 0 0", position: "relative" }}
      >
        <iframe
          src="https://player.vimeo.com/video/985974400?h=0afc317c3c&autopause=false&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&controls=0"
          style={{
            position: "absolute",
            inset: 0,
            height: "100%",
            width: "100%",
            pointerEvents: "none",
          }}
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </section>
  );
};

export default Showreel;
