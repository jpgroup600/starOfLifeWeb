export type Data = {
  heading: string[];
  para: string;
  imgVarient: "normal" | "long" | "square" | "full" | "mobile";
  position: "normal" | "full";
  video?: string;
  lessPad?: boolean;
  newStyle?:string;
};

export const data: Data[] = [
  {
    heading: [
      "쇼핑몰",
      "상품이 커스텀 가능한 쇼핑몰",
    ],
    para: "3D 모델링, 홈페이지 제작",
    imgVarient: "normal",
    position: "normal",
    video: "/archive-videos/0.mov",
  },

  {
    heading: [
      "흥보 영상",
      "크리스마스 흥보 영상 제작",
    ],
    para: "3D 모델링, 영상 제작",
    imgVarient: "normal",
    position: "normal",
    video: "/archive-videos/1.mp4",
  },

  {
    heading: [
      "웹 사이트",
      "에이전시 브랜딩 사이트",
    ],
    para: "3D 모델링, 3D 구현, 웹사이트 제작",
    imgVarient: "mobile",
    position: "normal",
    lessPad: true,
    video: "/archive-videos/2.mov",
    newStyle:'newStyle'
  },

  {
    heading: [
      "웹 제작 & 영상 제작",
      "모델 하우스를 위한 웹 & 영상 제작",
    ],
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vero quaerat a, neque nostrum in assumenda facilis ipsam modi illo at vitae nobis blanditiis veritatis.",
    imgVarient: "normal",
    position: "normal",
    video: "/archive-videos/3.webm",
  },
  {
    heading: [
      "모바일 앱",
      "가족과 친구들이 같이하는 게임",
    ],
    para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vero quaerat a, neque nostrum in assumenda facilis ipsam modi illo at vitae nobis blanditiis veritatis.",
    imgVarient: "mobile",
    position: "normal",
    lessPad: true,
    video: "/archive-videos/4.mov",
    newStyle : "styleTwo"
  },
];
