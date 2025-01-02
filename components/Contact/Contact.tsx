import Link from "next/link";
import s from "./contact.module.scss";
import { ContactHeading, ContactPathOne } from "../Svg/Svg";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ContactInput from "./ContactInput";
import { useSnapshot } from "valtio";
import { store } from "@/store";
import {useState} from "react";

interface UserLeads {
  companyName: string;
  email: string;
  phone: string;
  name: string;
}


const Contact = () => {
  const container = useRef<HTMLDivElement>(null);
  const { workHeadingPointerEnter, workHeadingPointerLeave } =
  useSnapshot(store);
  const [userLeads, setUserLeads] = useState<UserLeads>({
    companyName: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async () => {
    const response = await fetch('/api/addLeads', {
      method: 'POST',
      body: JSON.stringify(userLeads),
    });
    const data = await response.json();
    if(data.success) {
      alert('상담 신청이 완료되었습니다.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLeads({...userLeads, [e.target.id]: e.target.value});
    console.log(userLeads);
  };

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
        <p>당신의 아이디어를 현실로!</p>
        <h4>
        당신의 대행사가 아닌 <br></br>파트너가 되어드리겠습니다 
        <br></br>
        <br></br>
        어떤 도움이 필요하신가요?
          <span className={`contact-path-1 ${s.pathOne}`}>
            <ContactPathOne />
          </span>
        </h4>
        <p>
        </p>
      </div>
      <div className={s.form}
      >
        <div className={s.box}>
          <div className={s.box_input}>
            <ContactInput label="회사명" id="companyName" onchange={handleChange} value={userLeads.companyName} />
            <ContactInput label="담당자명" id="name" onchange={handleChange} value={userLeads.name} />
            <ContactInput label="이메일" id="email" onchange={handleChange} value={userLeads.email} />
            <ContactInput label="연락처" id="phone" onchange={handleChange} value={userLeads.phone} />
            <button 
            className={s.submit}
            onClick={handleSubmit}
            >상담 신청하기</button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
