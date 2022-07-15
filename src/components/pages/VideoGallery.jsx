import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { VIDEO_GALLERY } from '@redux/constants';
import { HeaderText, Gallery } from "@common";
import { fetchVideoAlbums } from '@redux/actions/gallery';

const VideoGallery = () => {
  const dispatch = useDispatch();

  const { videos } = useSelector(({ gallery }) => gallery);

  useEffect(() => {
    dispatch(fetchVideoAlbums());
  }, []);

  return (
    <div className="videogallery">
      <div className="wrapper">
        <div className="videogallery__header">
          <HeaderText
            h2Header={"Видео галерея"}
            h1Header={"Корпоративные события запечетленные на видео"}
            pHeader={
              "События нашей компнии, которые мы запечетлели в видео формате"
            }
          />
        </div>

        <div className="videogallery__albums albums">
          <ul className="albums__list">
            {videos &&
              videos.map((video) => {
                return (
                  <Gallery
                    key={video.id}
                    galleryAddres={VIDEO_GALLERY}
                    album={video}
                  />
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
