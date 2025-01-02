import { Star } from "../Svg/Svg";
import s from "./footer.module.scss";
import CustomLink from "./CustomLink";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


type Props = {
  handlePointerEnter: () => void;
  handlePointerLeave: () => void;
};

const Footer: React.FC<Props> = ({
  handlePointerEnter,
  handlePointerLeave,
}) => {
  const container = useRef<HTMLDivElement>(null);
 

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: "power4.inOut",
          },
        })
        .from(".footer-star-2", { scale: 0, rotate: 360 })
        .from(
          ".footer-nav-1 a",
          { clipPath: "inset(100% 0% 0% 0%)", stagger: 0.1 },
          "<0.2"
        )
        .from(".footer-nav-2 a", {
          clipPath: "inset(100% 0% 0% 0%)",
          stagger: 0.1,
        });
    },
    { scope: container }
  );

  return (
    <footer
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      ref={container}
      id="footer"
      className={s.main}
    >
      <div className={`footer-star-2 ${s.star}`}>
        <Star />
      </div>
      <nav className={`footer-nav-1 ${s.nav}`}>
        <CustomLink href="/" text="Work" />
        <CustomLink href="/" text="Archive" />
        <CustomLink href="/" text="Why Us" />
        <CustomLink href="/" text="Services" />
        <CustomLink href="/" text="About" />
        <CustomLink href="/" text="Contact" />
      </nav>
      {/* <div className={`footer-nav-2 ${s.nav}`}>
        <CustomLink
          href="https://www.linkedin.com/in/philippe-layani-56636a77"
          text="Linkedin"
        />
        <CustomLink
          href="https://www.instagram.com/layanidigital/?hl=de"
          text="Instagram"
        />
        <CustomLink href="https://www.behance.net/Layani" text="Behance" />
      </div> */}
      <div className={s.foot}>
        <p className="footer-foot">Copyright © Wise Rootree | 회사명 : 에이씨아이 | 대표자 : 김동석 | 사업자 번호 : 247-48-00896</p>
      </div>
    </footer>
  );
};

export default Footer;
