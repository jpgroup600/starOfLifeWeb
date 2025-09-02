import s from "./sub.module.scss";
import { ArrowLeft, ArrowRight } from "./Svgs";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import SW from "swiper";
import {data} from "./data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Slider = () => {
  const container = useRef<HTMLElement>(null);
  const swiperRef = useRef<SW>();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  // const data = ["Graffiti", "ArtStyle", "Awesome"];
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(innerWidth);
  }, []);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 800px)", () => {
        gsap.timeline({ defaults: { duration: 0.3 } }).to(".titleCover", {
          x: () => `${-33.3 * activeIndex}%`,
        });
      });

      mm.add("(max-width: 799px)", () => {
        gsap.timeline({ defaults: { duration: 0.3 } }).to(".titleCover", {
          x: () => `${-100 * activeIndex}%`,
        });
      });
    },
    { scope: container, dependencies: [activeIndex] }
  );

  return (
    <section ref={container} className={s.slider}>
      <div className={s.slider_cover}>
        <button
          onClick={() => swiperRef.current!.slidePrev()}
          className={s.slider_cover_btn}
        >
          <ArrowLeft />
        </button>
        <div>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
            }}
            modules={[Autoplay, Navigation, EffectFade]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            effect={"fade"}
            className={s.slider_frame}
          >
            {data.map((e, i) => {
              return (
                <SwiperSlide key={i}>
                  <Image
                    src={`/menu/${i}.jpeg`}
                    alt="fake-img"
                    height={1080}
                    width={1920}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className={s.titles}>
            <div className={`titleCover ${s.titles_cover}`}>
              {width < 600
                ? data.map((e, i) => {
                    return (
                      <h2 key={i} data-active={i === activeIndex}>
                        {e.title}
                      </h2>
                    );
                  })
                : [{title:""}, ...data].map((e, i) => {
                    return (
                      <h2 key={i} data-active={i === activeIndex + 1}>
                        {e.title}
                      </h2>
                    );
                  })}
            </div>
          </div>
        </div>
        <button
          onClick={() => swiperRef.current!.slideNext()}
          className={s.slider_cover_btn}
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;
