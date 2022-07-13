import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { HeaderText, Gallery } from "@common";

const PhotoGallery = () => {
  const { albums } = useSelector(({ gallery }) => gallery);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="photoGallery">
      <div className="wrapper">
        <div className="photoGallery__header">
          <HeaderText
            h2Header={"Фото галерея"}
            h1Header={"Праздники, поздравления и не только"}
            pHeader={
              "События нашей компнии, которые мы запечетлели в фото формате, Вы можете посмотреть на этой странице"
            }
          />
        </div>

        <div className="photoGallery__albums albums">
          <ul className="albums__list">
            {albums &&
              albums.map((album) => {
                return (
                  <Gallery album={album} />
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
