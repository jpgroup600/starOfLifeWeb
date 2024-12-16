import Image from "next/image";
import s from "./archive.module.scss";

const Shape = () => {
  return (
    <div className={`${s.shapeBox} shapebox`}>
      {[...Array(10)].map((e, i) => {
        return (
          <div key={i} className="shapebox-shape">
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
