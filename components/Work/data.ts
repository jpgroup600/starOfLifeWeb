type Data = {
  name: string;
  desc: string[];
  color: string;
  link?:string;
  media?: {url: string, isVideo: boolean}[];
};

export const data: Data[] = [
  {
    name: "당신의 <br> 아이디어를",
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
      { url: "/work/1.mov", isVideo: true },
      { url: "/work/1-2.mp4", isVideo: true },
    ],
  },
  {
    name: "빠르게",
    desc: [
      "Identité de marque",
      "Direction artistique",
      "print / digital",
      "Print haut de gamme",
      "Shooting photo / vidéo",
    ],
    color: "#fcebe4",
    media: [
      { url: "/work/2.mov", isVideo: true },
      { url: "/work/2-1.mp4", isVideo: true },
    ],
  },
  {
    name: "많은 사람들에게",
    desc: ["Direction artistique", "Identité de marque", "print / digital"],
    color: "#fff4ce",
    media: [
      { url: "/work/3.mov", isVideo: true },
      { url: "/work/3-1.mp4", isVideo: true },
    ],
  },
  {
    name: "<span class=small-stroke>효과적으로 <br> 연결하는 제안을 드립니다</span>",
    desc: [
      "Contenu Editorial",
      "Direction de production",
      "Identité de marque",
      "print / digital",
    ],
    color: "#daf2e0",
    media: [
      { url: "/work/4.mov", isVideo: true },
      { url: "/work/4-2.mp4", isVideo: true },
    ],
  },
  // {
  //   name: "Everphone",
  //   desc: ["Identité de marque", "Shooting photo"],
  //   color: "#dbedf2",
  // },
  // {
  //   name: "Vermietet.de",
  //   desc: [
  //     "design product",
  //     "Direction artistique",
  //     "Identité de marque",
  //     "Packaging",
  //     "print / digital",
  //     "Shooting photo / vidéo",
  //     "Signalétique",
  //   ],
  //   color: "#eafcf8",
  // },
  // {
  //   name: "Mynd Yoga",
  //   desc: [
  //     "Identité de marque",
  //     "Direction artistique",
  //     "print / digital",
  //     "Print haut de gamme",
  //     "Shooting photo / vidéo",
  //   ],
  //   color: "#faf2fe",
  // },
  // {
  //   name: "Monipol",
  //   desc: ["Direction artistique", "Identité de marque", "print / digital"],
  //   color: "#ebebeb",
  // },
];
