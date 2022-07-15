import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowUp } from "@fortawesome/free-solid-svg-icons";

import ReactPlayer from "react-player";

import { fetchVideoAlbumById } from "@redux/actions/gallery";

const VideoAlbum = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { videoAlbumById } = useSelector(({ gallery }) => gallery);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const albumId = window.location.search.slice(4);

    dispatch(fetchVideoAlbumById(albumId));
  }, []);

  if (!videoAlbumById) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 0",
          color: "#08415C",
        }}
      >
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="album">
      <div className="wrapper">
        <div className="album__info">
          <div className="album__back">
            <button onClick={handleGoBack}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </div>
          <div className="album__header">
            <div className="h2Header">{videoAlbumById.albumYear}</div>
            <b>{videoAlbumById.albumName}</b>
          </div>
        </div>

        <div className="album__pictures">
          {videoAlbumById.videos &&
            videoAlbumById.videos.map((video) => {
              return (
                <ReactPlayer
                  url={video.movie}
                  controls={true}
                  className="album__video"
                />
              );
            })}
        </div>

        <div className="album__goTop">
          <button onClick={handleGoTop}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoAlbum;
