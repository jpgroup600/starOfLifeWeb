import React from 'react';
import s from "./work.module.scss";

const MediaDisplay = ({ isVideo, mediaSrc, altText } : { isVideo: boolean, mediaSrc: string, altText: string }) => {
  return (
    <div className={`${s.mediaContainer}`}>
      {isVideo ? (
        <video
          src={mediaSrc}
          autoPlay
          muted
          loop
          playsInline
          className={`${s.mediaVideo} ${s.centeredVideo}`}
        ></video>
      ) : (
        <img
          src={mediaSrc}
          alt={altText}
          className={`${s.mediaImage} ${s.centeredImage}`}
        />
      )}
    </div>
  );
};

export default MediaDisplay;