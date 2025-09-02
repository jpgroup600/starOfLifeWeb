import s from "./archive.module.scss";
import type { Data } from "./data";

type Props = Data & { id: number };

const Card: React.FC<Props> = ({
  imgVarient,
  heading,
  para,
  position,
  id,
  video,
  lessPad,
  newStyle,
}) => {
  return (
    <div
      data-varient={position}
      data-unknown={imgVarient}
      className={`archive-card-${id} ${s.card} ${newStyle ? s[newStyle] : ''}`}
      
    >
      <div
        style={{ backgroundImage: `url(/archive-frame/${imgVarient}.png)` }}
        data-varient={imgVarient}
        className={s.card_img}
      >
        <div data-varient={imgVarient} className={s.card_video_box}>
          {video && (
            <video
              data-varient={imgVarient}
              src={video}
              className={s.card_video}
              muted
            loop
              autoPlay
              playsInline
            />
          )}
        </div>
      </div>

      <div data-varient={imgVarient} data-less={lessPad} className={s.card_box}>
        <div>
          {heading.map((e, i) => {
            return <h2 key={i}>{e}</h2>;
          })}
        </div>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default Card;
