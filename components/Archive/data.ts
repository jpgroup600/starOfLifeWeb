export type Data = {
  heading: string[];
  para: string;
  imgVarient: "normal" | "long" | "square" | "full" | "mobile";
  position: "normal" | "full";
  video?: string;
  lessPad?: boolean;
};

export const data: Data[] = [
  {
    heading: [
      "Client: Coca Cola",
      "Projekt: dolor sit amet",
      "Date: consetetur ",
    ],
    para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vero quaerat a, neque nostrum in assumenda facilis ipsam modi illo at vitae nobis blanditiis veritatis.",
    imgVarient: "normal",
    position: "normal",
    video: "/archive-videos/0.mov",
  },
  {
    heading: [
      "Client: Lorem ipsum",
      "Projekt: dolor sit amet",
      "Date: consetetur ",
    ],
    para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vero quaerat a, neque nostrum in assumenda facilis ipsam modi illo at vitae nobis blanditiis veritatis.",
    imgVarient: "long",
    position: "normal",
    video: "/archive-videos/0.mov",
  },
  {
    heading: [
      "Client: Zelasit Ksale",
      "Projekt: dolor sit amet",
      "Date: consetetur ",
    ],
    para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vero quaerat a, neque nostrum in assumenda facilis ipsam modi illo at vitae nobis blanditiis veritatis.",
    imgVarient: "mobile",
    position: "normal",
    lessPad: true,
    video: "/archive-videos/0.mov",
  },
  {
    heading: [
      "Client: Neuro Ka",
      "Projekt: dolor sit amet",
      "Date: consetetur ",
    ],
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vero quaerat a, neque nostrum in assumenda facilis ipsam modi illo at vitae nobis blanditiis veritatis.",
    imgVarient: "normal",
    position: "normal",
    video: "/archive-videos/0.mov",
  },
  {
    heading: [
      "Client: Radmweo",
      "Projekt: dolor sit amet",
      "Date: consetetur ",
    ],
    para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vero quaerat a, neque nostrum in assumenda facilis ipsam modi illo at vitae nobis blanditiis veritatis.",
    imgVarient: "normal",
    position: "normal",
    lessPad: true,
    video: "/archive-videos/0.mov",
  },
];
