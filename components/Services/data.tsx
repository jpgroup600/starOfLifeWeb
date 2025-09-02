import s from "./services.module.scss";

type Data = {
  menu: string[];
  title: string;
  nextTitle: string;
  heading: JSX.Element;
  mediaSrcOne: string;
  mediaSrcTwo?: string;
  isVideo: boolean;
};

export const koreanData: Data[] = [
  {
    menu: ["광고 마케팅", "컨텐츠 마케팅", "퍼포먼스 마케팅"],
    title: "Furniture",
    nextTitle: "Furniture",
    heading: (
      <>
        하고싶은 말은 다 내려놓고<br /> 듣고싶어하는 말을 들려줍니다
        <span className={s.result}>Result / 매출 1300% 증가</span>
      </>
    ),
    mediaSrcOne: "https://www.youtube.com/embed/mkwWWYBhFRA",
    isVideo: true,
  },
  {
    menu: ["광고 마케팅","컨텐츠 마케팅","퍼포포먼스 마케팅"],
    title: "Sports Gear",
    nextTitle: "Sports Gear",
    heading: (
      <>
        질문을 제대로해야 <br/> 답이 '제대로' 나옵니다
        <span className={s.result}>Result / 매출 1300% 증가</span>
      </>
    ),
    mediaSrcOne: "https://www.youtube.com/embed/ARrQcqt1yLc",
    isVideo: true,
  },
  {
    menu: [
      "광고 마케팅",
      "컨텐츠 마케팅",
      "퍼포먼스 마케팅",
    ],
    title: "IT Service",
    nextTitle: "IT Service",
    heading: (
      <>
        브랜드네임으로 'WattEver' 어떨까요?  <br /> 무엇이든지(What ever)가능한전기차IT <br></br>서비스 이름으로 좋을 것 같습니다
        <span className={s.result}>브랜드 네이밍부터 브랜드 필름까지</span>
      </>
    ),
    mediaSrcOne: "/service2/service3-1.png",
    mediaSrcTwo: "/service2/service3-2.png",
    isVideo: false,
  },
 
  {
    menu: ["광고 마케팅", "컨텐츠 마케팅", "퍼포먼스 마케팅"],
    title: "Education",
    nextTitle: "Education",
    heading: (
      <>
        학생의 목소리 100% 로 <br></br> '진정성'있는 마케팅이 필요합니다
        <span className={s.result}>Result / ROI 270% 달성</span>
      </>
    ),
    mediaSrcOne: "https://www.youtube.com/embed/nD9jPm2oLCQ",
    mediaSrcTwo: "https://www.youtube.com/embed/s-fXONdppyU?start=26",
    isVideo: true,
  },
  {
    menu: ["광고 마케팅", "컨텐츠 마케팅", "퍼포먼스 마케팅"],
    title: "Fashion",
    nextTitle: "Fashion",
    heading: (
      <>
        선망성은 넘사벽이 아니라 <br></br> 친숙함과 솔직함에서 옵니다
        <span className={s.result}>Result / 팔로워 600% 증가</span>
      </>
    ),
    mediaSrcOne: "https://www.youtube.com/embed/PlnFo4EPbA4",
    isVideo: true,
  },
  {
    menu: ["광고 마케팅", "컨텐츠 마케팅", "퍼포먼스 마케팅"],
    title: "Opreation",
    nextTitle: "Opreation",
    heading: (
      <>
        일관성 있게 <br></br> 타이밍 놓치지 않고, <br></br> 꾸준한 퀄리티로
        <span className={s.result}>Result / 팔로워 200% 증가</span>
      </>
    ),
    mediaSrcOne: "/service2/service6-1.png",
    isVideo: false,
  },
  {
    menu: ["광고 마케팅", "컨텐츠 마케팅", "퍼포먼스 마케팅"],
    title: "SNS",
    nextTitle: "SNS",
    heading: (
      <>
        강남주부를 공략! <br></br> Pin Point 타겟팅으로 <br></br> 고가 전략을 완성
        <span className={s.result}>Result / 팔로워 800%증가, 매출 42%상승</span>
      </>
    ),
    mediaSrcOne: "/service2/service7-2.jpeg",
    isVideo: false,
  },
  {
    menu: ["광고 마케팅", "컨텐츠 마케팅", "퍼포먼스 마케팅"],
    title: "Youtube Brand",
    nextTitle: "Youtube Brand",
    heading: (
      <>
        풀집공예박물관의 컨텐츠를<br></br> 소비자가 보게 만들려면 <br></br> 어떻게해야합니까?
        <span className={s.result}>Result / 팔로워 1300% 증가 , 평균 조회수 1.8만 달성</span>
      </>
    ),
    mediaSrcOne: "https://www.youtube.com/embed/KkURQpiPYJk",
    mediaSrcTwo: "https://www.youtube.com/embed/UDN9xQCZ5k0",
    isVideo: true,
  },
  {
    menu: ["광고 마케팅", "컨텐츠 마케팅", "퍼포먼스 마케팅"],
    title: "Youtube Contents",
    nextTitle: "Youtube Contents",
    heading: (
      <>
        흔들리지 않는 컨셉이란<br></br> 절제의 미학에서 나온다고 하더군요
        <span className={s.result}>Result / 조회수 600% 증가</span>
      </>
    ),
    mediaSrcOne: "https://www.youtube.com/embed/oZRm3GmmhuI?start=5",
    isVideo: true,
  },
];

