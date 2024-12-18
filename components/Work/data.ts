type Data = {
  name: string;
  desc: string[];
  color: string;
  link?:string;
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
  },
  {
    name: "많은 사람들에게",
    desc: ["Direction artistique", "Identité de marque", "print / digital"],
    color: "#fff4ce",
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
