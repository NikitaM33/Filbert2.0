import React from "react";
import { Link } from "react-router-dom";

const Gallery = ({ album }) => {
  return (
    <li key={album.id} className="albums__item">
      <Link to={`/album?id=${album.id}`}>
        <div className="albums__cover">
          <div className="albums__curtain"></div>
          <img
            src={album.ulbumCover}
            alt={`${album.albumName} ${album.albumYear}`}
          />
        </div>
        <span className="albums__descr">
          <b>{album.albumName}</b>
          <br />
          {album.albumYear}
        </span>
      </Link>
    </li>
  );
};

export default Gallery;
