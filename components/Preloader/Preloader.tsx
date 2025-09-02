import s from "./preloader.module.scss";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState(true);
    }, 2800);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <div data-hide={state} className={s.main}></div>;
};

export default Preloader;
