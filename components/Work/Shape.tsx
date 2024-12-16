import Image from "next/image";
import s from "./work.module.scss";

const Shape = ({ id }: { id: number }) => {
  return (
    <div data-even={id % 2} className={`${s.shapeBox} shapebox`}>
      {[...Array(6)].map((e, i) => {
        return (
          <div data-even={id % 2} key={i} className={`shapebox-shape-${id}`}>
            <Image
              className={`shapebox-img`}
              src={`/archive-shape/${i}.png`}
              alt="shape"
              height={200}
              width={200}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Shape;
