import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";

import Swiper, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

const MainUserCard = ({ newWorkers, day, month }) => {
  const [visible, setVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(null);

  const toggleModal = (index) => {
    setVisible(true);
    console.log(index);
    setCurrentSlide(index);
  };

  useEffect(() => {
    Swiper.use([Navigation]);
    new Swiper(".mainPersonCard__photoContainer", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: true,
      initialSlide: currentSlide,
      watchOverflow: true,
      speed: 800,
    });
  }, [currentSlide]);

  return (
    <>
      {newWorkers &&
        newWorkers.map((person, index) => {
          return (
            <div key={person._id} className="mainPersonCard">
              <div className="mainPersonCard__photo">
                <Button
                  onClick={() => toggleModal(index)}
                  className="mainPersonCard__switchModal"
                >
                  <img src={person.img} alt={`${person.firstName} ${person.lastName}`} />
                </Button>
              </div>
              <div className="mainPersonCard__descr">
                <div className="mainPersonCard__personInfo">
                  <div className="mainPersonCard__name">{`${person.firstName} ${person.lastName}`}</div>
                  <div className="mainPersonCard__position">
                    {person.position}
                  </div>
                  <div className="mainPersonCard__depart">{person.introdusing}</div>

                  {day && (
                    <>
                      <div className="mainPersonCard__birthDay">
                        {`${day}.${month < 10 ? `0${month}` : month}`}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )
        })}

      <Modal
        title={" "}
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={570}
        footer={null}
        className="popup__content"
      >
        <div className="swiper-container mainPersonCard__photoContainer">
          <div className="swiper-wrapper">
            {newWorkers.map((person) => {
              return (
                <div key={person._id} className="swiper-slide">
                  <div className="mainPersonCard__modalInfo">
                    <div className="mainPersonCard__modalPhoto">
                      <img src={person.imgBig} alt={`${person.firstName} ${person.lastName}`} />
                    </div>

                    <div className="mainPersonCard__name">{`${person.firstName} ${person.lastName}`}</div>
                    <div className="mainPersonCard__position">
                      {person.position}
                    </div>
                    <div className="mainPersonCard__depart">
                      {person.introdusing}
                    </div>
                    {person.birthDay && (
                      <>
                        <div className="mainPersonCard__birthDay">
                          {`${person.birthDay}.${
                            person.birthMonth < 10
                              ? `0${person.birthMonth}`
                              : person.birthMonth
                          }`}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </Modal>
    </>
  );
};

export default MainUserCard;
