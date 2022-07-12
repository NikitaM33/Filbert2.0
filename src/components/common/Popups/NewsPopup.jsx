import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Swiper, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

import {
  fetchInnerNewsById,
  fetchWorldNewsById,
  fetchCollectionNewsById,
} from "@redux/actions/fetchAllNews";

const NewsPopup = ({ innerNews, worldNews, id }) => {
  const dispatch = useDispatch();
  const { newsById } = useSelector(({ news }) => news);
  const [modal2Visible, setModal2Visible] = useState(false);

  const toggleModal2Visible = () => {
    if (innerNews) {
      dispatch(fetchInnerNewsById(id));
      setModal2Visible(!modal2Visible);
    } else if (worldNews) {
      dispatch(fetchWorldNewsById(id));
      setModal2Visible(!modal2Visible);
    } else {
      dispatch(fetchCollectionNewsById(id));
      setModal2Visible(!modal2Visible);
    }
  };

  useEffect(() => {
    Swiper.use([Navigation]);
    new Swiper(".popup__imgContent", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      sliderPerView: 1,
      sliderPerGroup: 1,
      centeredSlides: true,
      watchOverflow: true,
      speed: 800,
      spaceBetween: 50,
      rebuildOnUpdate: true,
    });
  }, []);

  // TO DO: Нужно сделать новости + поменять базу
  return (
    <>
      <Button onClick={toggleModal2Visible} className="popup">
        Читать
      </Button>
      {newsById && (
        <Modal
          key={newsById._id}
          title={newsById.newsHeader}
          centered
          visible={modal2Visible}
          onCancel={() => setModal2Visible(false)}
          footer={null}
          width={920}
          className="popup__content"
        >
          <div className="swiper-container popup__imgContent">
            <div className="swiper-wrapper">
              {newsById.newsCarousel.carousel1 ?
                newsById.newsCarousel.carousel1.map((elem) => {
                  return <img src={elem.src} alt="News" />;
                })
                : ''
              }
            </div>
          </div>
          <div className="popup__textContent">
            {newsById.newsText.part2
              ? newsById.newsText.part2.map((elem) => {
                  return <p>{elem}</p>;
                })
              : ''}
          </div>
        </Modal>
      )}

      {/* {
        newsById && newsById.map((item, index) => {
          return (
            <Modal
              key={item + index}
              title={item.newsHeader}
              centered
              visible={modal2Visible}
              onCancel={() => setModal2Visible(false)}
              footer={null}
              width={920}
              className="popup__content"
            >
              <div className="popup__imgContent">
                <img src={item.newsImage} alt="News" />
              </div>
              <div className="popup__textContent">
                <p>{item.newsArticle}</p>
              </div>
            </Modal>
          )
        })
      } */}
    </>
  );
};

export default NewsPopup;
