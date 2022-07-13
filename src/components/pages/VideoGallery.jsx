import React from "react";
import { useSelector } from "react-redux";

import { HeaderText, Gallery } from "@common";

const VideoGallery = () => {
  return (
    <div className="videogallery">
      <div className="wrapper">
        <div className="videogallery__header">
          <HeaderText
            h2Header={"Фото галерея"}
            h1Header={"Праздники, поздравления и не только"}
            pHeader={
              "События нашей компнии, которые мы запечетлели в фото формате, Вы можете посмотреть на этой странице"
            }
          />
        </div>

        {/* <div className="videogallery__albums albums">
          <ul className="albums__list">
            {albums &&
              albums.map((album) => {
                return (
                  <Gallery album={album} />
                );
              })}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default VideoGallery;
