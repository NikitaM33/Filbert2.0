import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "antd";
import Swiper, { Navigation } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import PrismaZoom from "react-prismazoom";

import { fetchAlbumById } from "@redux/actions/gallery";

const PhotoAlbum = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { albumById } = useSelector(({ gallery }) => gallery);
  const [visible, setVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const albumId = window.location.search.slice(4);

    dispatch(fetchAlbumById(albumId));
  }, []);

  useEffect(() => {
    Swiper.use([Navigation]);
    new Swiper(".album__modalContainer", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: true,
      initialSlide: currentSlide,
      spaceBetween: 50,
      watchOverflow: true,
      simulateTouch: false,
      speed: 800,
    });
  }, [currentSlide]);

  const toggleModal = (index) => {
    setVisible(true);
    setCurrentSlide(index);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoTop = () => {
    window.scrollTo(0, 0);
  };

  if (!albumById) {
    return "Loading...";
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
            <div className="h2Header">{albumById.albumYear}</div>
            <b>{albumById.albumName}</b>
          </div>
        </div>

        <div className="album__pictures">
          {albumById.photos &&
            albumById.photos.map((photo, index) => {
              return (
                <Button key={photo} onClick={() => toggleModal(index)}>
                  <img src={photo} alt={albumById.albumName} />
                </Button>
              );
            })}

          <Modal
            title={" "}
            centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            width={1200}
            footer={null}
            className="popup__content"
          >
            <div className="swiper-container album__modalContainer">
              <div className="swiper-wrapper">
                {albumById.photos &&
                  albumById.photos.map((photo) => {
                    return (
                      <div key={photo} className="swiper-slide">
                        <div className="album__modalPhoto">
                          <PrismaZoom className="zzzoom">
                            <img src={photo} alt={albumById.albumName} />
                          </PrismaZoom>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </Modal>
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

export default PhotoAlbum;
