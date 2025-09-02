import s from "./services.module.scss";
import { ServicesHeading } from "../Svg/Svg";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { TopLeftArrow } from "./Svgs";
import { koreanData } from "./data";

gsap.registerPlugin(ScrollTrigger);

const KoreanServices = () => {
  const container = useRef<HTMLElement>(null);
  const [currentTitle, setCurrentTitle] = useState("Marketing");
  const [currentSectionIndex, setCurrentSectionIndex] = useState(-1);

  useGSAP(
    () => {
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

      koreanData.map((e, i) => {
        gsap.set(`.cover-${i}`, { yPercent: 150 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section",
          end: () => `+=${800 * koreanData.length}`, // Reduced from 1500
          pin: true,
          pinSpacing: true,
          scrub: 1, // Reduced from 2 for snappier feel
          snap: {
            snapTo: 1 / koreanData.length, // Snap to each section
            duration: 0.3,
            delay: 0.1,
          },
          onUpdate: (self) => {
            const progress = self.progress;
            const totalSections = koreanData.length;
            const sectionProgress = progress * totalSections;
            const activeSectionIndex = Math.floor(sectionProgress);
            const sectionCompletion = sectionProgress - activeSectionIndex;
            
            // Determine which title should be shown based on scroll direction and thresholds
            let targetSectionIndex = -1;
            let targetTitle = "Marketing"; // Default title
            
            if (activeSectionIndex >= 0 && activeSectionIndex < totalSections) {
              // Forward scrolling: change title when section is 90% in view
              if (sectionCompletion >= 0.9) {
                targetSectionIndex = activeSectionIndex;
                targetTitle = koreanData[activeSectionIndex].nextTitle;
              }
              // Backward scrolling: revert to previous title when section is 50% out of view
              else if (sectionCompletion <= 0.5 && activeSectionIndex > 0) {
                targetSectionIndex = activeSectionIndex - 1;
                targetTitle = activeSectionIndex === 1 ? "Marketing" : koreanData[activeSectionIndex - 1].nextTitle;
              }
              // If we\'re in the first section and less than 50% complete, show default title
              else if (activeSectionIndex === 0 && sectionCompletion <= 0.5) {
                targetSectionIndex = -1;
                targetTitle = "Marketing";
              }
              // Otherwise, maintain current title based on current section
              else if (currentSectionIndex >= 0) {
                targetSectionIndex = currentSectionIndex;
                targetTitle = currentSectionIndex === -1 ? "Marketing" : koreanData[currentSectionIndex].nextTitle;
              }
            }
            
            // Update title only if it has changed
            if (targetTitle !== currentTitle) {
              setCurrentTitle(targetTitle);
              setCurrentSectionIndex(targetSectionIndex);
            }
          },
        },
      });

      koreanData.map(({ nextTitle }, i) => {
        tl.to(`.cover-${i}`, {
          yPercent: 0,
          duration: 1.5, // Reduced from 2
          ease: "power2.out",
        })
          .to(`.heading-${i}`, {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "power2.inOut",
            duration: 0.3, // Added duration
          }, "-=0.5") // Start before previous ends
          .to(`.imageWrapper-1-${i}`, {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "power2.inOut", 
            duration: 0.4,
          }, "-=0.3")
          .to(`.imageWrapper-2-${i}`, {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "power2.inOut",
            duration: 0.4,
          }, "-=0.2");
        // Removed the text animation: .to(".title span", { text: nextTitle });
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
          <span>{currentTitle}</span>
        </h2>
        <div className={s.koreansection_relative}>
          {koreanData.map(
            ({ heading, menu, isVideo, mediaSrcOne, mediaSrcTwo = "" }, i) => {
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
                      <h3 className={`heading-${i} ${s.heading}`}>{heading}</h3>
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
                      <div
                        className={`imageWrapper-1-${i} ${
                          isVideo ? s.videoWrapper : s.imageWrapper
                        }`}
                      >
                        {isVideo ? (
                          <iframe
                            src={mediaSrcOne}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <Image
                            src={mediaSrcOne}
                            alt="img"
                            height={1080}
                            width={1920}
                          />
                        )}
                      </div>

                      <div
                        data-small
                        className={`imageWrapper-2-${i} ${
                          isVideo ? s.videoWrapper : s.imageWrapper
                        } `}
                      >
                        {isVideo ? (
                          <iframe
                            src={mediaSrcTwo}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          mediaSrcTwo && <Image
                            src={mediaSrcTwo}
                            alt="img"
                            height={1080}
                            width={1920}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default KoreanServices;