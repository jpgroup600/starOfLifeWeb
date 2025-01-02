type Data = {
  menu: string[];
  title: string;
  nextTitle: string;
  heading: JSX.Element;
  mediaSrcOne: string;
  mediaSrcTwo: string;
  isVideo: boolean;
};

export const koreanData: Data[] = [
  {
    menu: ["검색광고", "배너광고", "SNS 광고", "유튜브 광고", "브랜딩"],
    title: "Marketing",
    nextTitle: "Web & App",
    heading: (
      <>
        좋은 상품이 있으시지만 <br />
        상품 알리는게 힘드신가요? <br />
        저희가 도와드릴게요
      </>
    ),
    mediaSrcOne: "/services/mark1.png",
    mediaSrcTwo: "/services/mark2.png",
    isVideo: false,
  },
  {
    menu: [
      "맞춤형 프로그램 개발",
      "앱 기획/개발",
      "관리 프로그램",
      "브랜딩 페이지",
      "AI 인공지능 개발",
    ],
    title: "Web & App",
    nextTitle: "Design & Video",
    heading: (
      <>
        좋은 아이디어가 있지만 구현해줄 팀이 <br /> 없으신가요? 이젠 저희가
        <br />
        구현해드릴게요
      </>
    ),
    mediaSrcOne: "/services/dev1.mp4",
    mediaSrcTwo: "/services/dev3.mov",
    isVideo: true,
  },
  {
    menu: ["제품 촬영", "상세페이지 제작", "영상 제작", "배너 제작"],
    title: "Design & Video",
    nextTitle: "Operation",
    heading: (
      <>
        상품도 있고 마케팅도 있는데 <br /> 상품을 매력적이게 보여주고
        싶으신가요?
        <br /> 저희가 도와드릴게요
      </>
    ),
    mediaSrcOne: "/services/vid1.mp4",
    mediaSrcTwo: "/work/1-2.mp4",
    isVideo: true,
  },
  {
    menu: ["상품 관리", "자사몰", "오픈 마켓", "소셜커머스","검색광고","종합몰 / 폐쇄몰","종합 운영"],
    title: "Operation",
    nextTitle: "Operation",
    heading: (
      <>
        상품도 있고 마케팅도 있는데 <br /> 상품을 매력적이게 보여주고
        싶으신가요?
        <br /> 저희가 도와드릴게요
      </>
    ),
    mediaSrcOne: "/services/op3.png",
    mediaSrcTwo: "/services/op1.png",
    isVideo: false,
  },
];
