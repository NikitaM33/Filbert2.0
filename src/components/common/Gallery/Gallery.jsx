import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Gallery = ({ galleryAddres, album }) => {
  console.log('Gallery', album);

  return (
    <li key={album.id} className="gallery">
      <Link to={`/${galleryAddres}?id=${album.id}`}>
      {/* <Link to={`/album?id=${album.id}`}> */}
        <div className="gallery__cover">
          <div className="gallery__curtain"></div>
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
