import s from "./sub.module.scss";

const Hero = () => {
  return (
    <section className={s.container}>
      <h2 className={s.container_heading}>
        당신의
        <br />
        아이디어를
        <br />
        현실로
      </h2>
    </section>
  );
};

export default Hero;
