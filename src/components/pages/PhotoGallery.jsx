import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { HeaderText } from "@common";
import { useSelector } from "react-redux";

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
                  <li key={album.id} className="albums__item">
                    <Link to={`/album?id=${album.id}`}>
                      <div className="albums__cover">
                        <div className="albums__curtain"></div>
                        <img src={album.ulbumCover} alt={`${album.albumName} ${album.albumYear}`} />
                      </div>
                      <span className="albums__descr">
                        <b>{album.albumName}</b>
                        <br />
                        {album.albumYear}
                      </span>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
