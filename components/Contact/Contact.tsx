import Link from "next/link";
import s from "./contact.module.scss";
import { ContactHeading, ContactPathOne } from "../Svg/Svg";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const Contact = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top 40%",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: "power4.inOut",
          },
        })
        .from(".contact-heading path", {
          strokeDashoffset: 1290,
          duration: 0.8,
          ease: "none",
        })
        .to(".contact-heading path", {
          duration: 0.8,
          fill: "black",
          ease: "power3",
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top center",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: "power4.inOut",
          },
        })
        .from(".contact-grid h4", {
          clipPath: "inset(100% 0% 0% 0%)",
        })
        .from(".contact-grid p", {
          clipPath: "inset(100% 0% 0% 0%)",
        })
        .from(".input", {
          clipPath: "inset(100% 0% 0% 0%)",
          stagger: 0.1,
        })
        .from(".submit", {
          clipPath: "inset(100% 0% 0% 0%)",
        });
    },
    { scope: container }
  );

  return (
    <section ref={container} id="contact" className={s.main}>
      <div className={`contact-heading ${s.heading}`}>
        <ContactHeading />
      </div>
      <div className={`contact-grid ${s.grid}`}>
        <h4>
          진정한 올인원 솔루션
          <br />
          원하시는 솔루션을 말해주세요
          <span className={`contact-path-1 ${s.pathOne}`}>
            <ContactPathOne />
          </span>
        </h4>
        <p>이제 사업 구축은 저희에게 맡기고 성장 전략에 집중하세요!</p>
      </div>
      <form className={s.form}>
        <div>
          <input className="input" type="text" placeholder="Company Name" />
          <input className="input" type="text" placeholder="Company Status" />
        </div>
        <div>
          <input className="input" type="email" placeholder="Email" />
          <input className="input" type="text" placeholder="Phone" />
        </div>
        <button className="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
