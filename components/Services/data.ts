type Data = {
  heading: string;
  desc: string;
  color: string;
  deg: number;
  info?: string[];
};

export const data: Data[] = [
  {
    heading: "Marketing",
    desc: "Unleash the power of visual storytelling with my Brand Design expertise. I create unique and memorable visual identities that resonate with your audience, making your brand stand out in today’s competitive landscape.",
    color: "#dbedf2",
    deg: 62,
    info: ["검색광고", "배너광고", "SNS 광고", "유튜브 광고", "브랜딩"],
  },
  {
    heading: "Web & App",
    desc: "Ignite success with my Brand Strategy service. I navigate the complexities of the market, sculpting a roadmap that defines, differentiates, and propels your brand forward. ",
    color: "#daf2e0",
    deg: 25,
    info: [
      "맞춤형 프로그램 개발",
      "자사몰 구축",
      "앱 기획 & 개발",
      "관리 프로그램",
      "브랜딩 페이지",
    ],
  },
  {
    heading: "Design & Video",
    desc: "Immerse users in a seamless digital experience with my UX/UI Web Design. I blend functionality with aesthetics, creating interfaces that captivate and navigate effortlessly. ",
    color: "#fff4ce",
    deg: 342,
    info: ["제품 촬영", "상세페이지 제작", "영상 제작", "배너 제작"],
  },
  {
    heading: "Operation",
    desc: "Elevate your online presence with my expert Web Development services, offered in collaboration with professionals from my extensive network. We specialize in crafting responsive, robust, and dynamic websites that effectively engage users by utilizing cutting-edge development solutions such as Wordpress, Typo3, Squarespace, Webflow, or custom code integrating libraries like Gsap, Next.js, or Locomotive Scroll. ",
    color: "#fcebe4",
    deg: 292,
    info: [
      "상품관리",
      "자사몰",
      "오픈마켓",
      "소셜커머스",
      "검색광고",
      "종합몰 & 폐쇄몰",
    ],
  },
  // {
  //   heading: "ERP-Systeme",
  //   desc: "An ERP system (Enterprise Resource Planning) is a software solution that helps businesses manage their resources efficiently by integrating and automating various business processes. It provides a central platform for data capture, processing, and analysis, spanning accounting, inventory management, and customer relationship management.",
  //   color: "#ecded9",
  //   deg: 243,
  // },
  // {
  //   heading: "Visual Identity",
  //   desc: "I specialize in crafting distinctive visual elements that encapsulate your story and resonate with your audience. Let me elevate your brand’s recognition and leave a lasting impression with my unique design touch.",
  //   color: "#F6F2E9",
  //   deg: 206,
  // },
  // {
  //   heading: "Conversion Rate Optimization",
  //   desc: "Boost your online success with Conversion Rate Optimization (CRO). I analyze, refine, and enhance user experiences, turning clicks into conversions. Elevate your website’s performance and maximize your digital impact with my CRO expertise.",
  //   color: "#EBEBEB",
  //   deg: 152,
  // },
  // {
  //   heading: "SEO & Lead generation",
  //   desc: "",
  //   color: "#fff4ce",
  //   deg: 100,
  // },
];

export const koreanData = [
  {
    menu: ["검색광고", "배너광고", "SNS 광고", "유튜브 광고", "브랜딩"],
    title: "Marketing",
    nextTitle: "Manufacturing",
    heading:
      "좋은 상품이 있으시지만 마케팅이 부족하신가요? 저희를 통해 배 성장을 체험해보세요",
    imageOne: "/services/1.jpg",
    imageTwo: "/services/0.jpg",
  },
  {
    menu: ["검색광고", "배너광고", "SNS 광고", "유튜브 광고", "브랜딩"],
    title: "Manufacturing",
    nextTitle: "Packaging",
    heading:
      "좋은 상품이 있으시지만 마케팅이 부족하신가요? 저희를 통해 배 성장을 체험해보세요",
    imageOne: "/services/1.jpg",
    imageTwo: "/services/0.jpg",
  },
  {
    menu: ["검색광고", "배너광고", "SNS 광고", "유튜브 광고", "브랜딩"],
    title: "Packaging",
    nextTitle: "Packaging",
    heading:
      "좋은 상품이 있으시지만 마케팅이 부족하신가요? 저희를 통해 배 성장을 체험해보세요",
    imageOne: "/services/1.jpg",
    imageTwo: "/services/0.jpg",
  },
];
