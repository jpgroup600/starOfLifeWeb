type Data = {
  name: string;
  desc: string[];
  color: string;
  link?:string;
  media?: {url: string, isVideo: boolean}[];
};

export const data: Data[] = [
  {
    name: "광고 <br/> 마케팅",
    link:"test.html",
    desc: [
      "design product",
      "Direction artistique",
      "Identité de marque",
      "Packaging",
      "print / digital",
      "Shooting photo / vidéo",
      "Signalétique",
    ],
    color: "#dbedf2",
    media: [
      { url: "/work2/ads.webp", isVideo: false },
      { url: "/work2/ads2.webp", isVideo: false },
    ],
  },
  {
    name: "컨텐츠 <br/> 마케팅",
    desc: [
      "Identité de marque",
      "Direction artistique",
      "print / digital",
      "Print haut de gamme",
      "Shooting photo / vidéo",
    ],
    color: "#fcebe4",
    media: [
      { url: "/work2/contents.jpeg", isVideo: false },
      { url: "/work2/contents2.jpeg", isVideo: false },
    ],
  },
  {
    name: "퍼포먼스 <br/> 마케팅",
    desc: ["Direction artistique", "Identité de marque", "print / digital"],
    color: "#fff4ce",
    media: [
      { url: "/work2/perform.png", isVideo: false },
      { url: "/work2/perform2.png", isVideo: false },
    ],
  },
  {
    name: "통합 <br/> 마케팅",
    desc: ["Direction artistique", "Identité de marque", "print / digital"],
    color: "#fff4ce",
    media: [
      { url: "/work2/tonghap.webp", isVideo: false },
      { url: "/work2/tonghap2.webp", isVideo: false },
    ],
  },
  {
    name: "웹/앱 개발",
    desc: ["Direction artistique", "Identité de marque", "print / digital"],
    color: "#fff4ce",
    media: [
      { url: "/work/3.mov", isVideo: true },
      { url: "/work/3-1.mp4", isVideo: true },
    ],
  },
 
];
