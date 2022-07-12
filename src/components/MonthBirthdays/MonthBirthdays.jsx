import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "antd";

import Swiper, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

import { HeaderText } from "@common";
import { fetchBirthdays } from "@redux/actions/fetchBirthdays";
import birthdayStar from "@assets/icons/LightYellowStar.svg";
import plugFemale from "@assets/Plugs/PlugFemale.png";
import plugMale from "@assets/Plugs/PlugMale.png";

const MonthBirthdays = () => {
  const dispatch = useDispatch();
  const { userMonthBirthdays } = useSelector(({ corpLive }) => corpLive);
  const [visible, setVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(null);

  const toggleModal = (index) => {
    setVisible(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    dispatch(fetchBirthdays());
  }, []);

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
    <section className="monthBirthdays">
      <div className="wrapper">
        <div className="monthBirthdays__flecks">
          <div></div>
          <div></div>
          <div></div>
          <div>
            <img src={birthdayStar} alt="Star" />
          </div>
          <div>
            <img src={birthdayStar} alt="Star" />
          </div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div>
            <img src={birthdayStar} alt="Star" />
          </div>
          <div>
            <img src={birthdayStar} alt="Star" />
          </div>
        </div>

        <div className="monthBirthdays__headerText">
          <div className="monthBirthdays__headerContainer">
            <HeaderText
              h2Header={"Дни рождения"}
              h1Header={"В этом месяце будут отмечать"}
            />
          </div>
        </div>

        <div className="monthBirthdays__items">
          {/* TO DO: ИДЕЯ: Сделать слайдер для днюх и перематывать на тех у кого
          будет др в ближайшее время */}

          {userMonthBirthdays ? (
            <>
              {userMonthBirthdays
                .sort((a, b) => a.dayOfBirthday - b.dayOfBirthday)
                .map((person, index) => (
                  <div key={person.img + index} className="mainPersonCard">
                    <div className="mainPersonCard__photo">
                      <Button
                        onClick={() => toggleModal(index)}
                        className="mainPersonCard__switchModal"
                      >
                        {person.img ? (
                          <img
                            src={person.img}
                            alt={`${person.name} ${person.lastName}`}
                          />
                        ) : person.sex === "female" ? (
                          <img
                            src={plugFemale}
                            alt={`${person.name} ${person.lastName}`}
                          />
                        ) : (
                          <img
                            src={plugMale}
                            alt={`${person.name} ${person.lastName}`}
                          />
                        )}
                      </Button>
                    </div>

                    <div className="mainPersonCard__descr">
                      <div className="mainPersonCard__personInfo">
                        <div className="mainPersonCard__name">
                          {`${person.name} ${person.lastName}`}
                        </div>
                        <div className="mainPersonCard__position">
                          {person.position}
                        </div>
                        <div className="mainPersonCard__depart">
                          {person.depart}
                        </div>
                        {person.city && (
                          <div className="mainPersonCard__city">
                            г. {person.city}
                          </div>
                        )}

                        {person.dayOfBirthday && (
                          <>
                            <div className="mainPersonCard__birthDay">
                              {`${person.dayOfBirthday}.${
                                person.monthOfBirthday < 10
                                  ? `0${person.monthOfBirthday}`
                                  : person.monthOfBirthday
                              }`}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

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
                    {userMonthBirthdays &&
                      userMonthBirthdays.map((person) => {
                        return (
                          <div key={person.img} className="swiper-slide">
                            <div className="mainPersonCard__modalInfo">
                              <div className="mainPersonCard__modalPhoto">
                                {person.img ? (
                                  <img
                                    src={person.img}
                                    alt={`${person.name} ${person.lastName}`}
                                  />
                                ) : person.sex === "female" ? (
                                  <img
                                    src={plugFemale}
                                    alt={`${person.name} ${person.lastName}`}
                                  />
                                ) : (
                                  <img
                                    src={plugMale}
                                    alt={`${person.name} ${person.lastName}`}
                                  />
                                )}
                              </div>

                              <div className="mainPersonCard__name">
                                {`${person.name} ${person.lastName}`}
                              </div>
                              <div className="mainPersonCard__position">
                                {person.position}
                              </div>
                              <div className="mainPersonCard__depart">
                                {person.depart}
                              </div>
                              {person.city && (
                                <div className="mainPersonCard__city">
                                  г. {person.city}
                                </div>
                              )}
                              {/* TO DO: Добавить в базу должность */}
                              {person.dayOfBirthday && (
                                <>
                                  <div className="mainPersonCard__birthDay">
                                    {`${person.dayOfBirthday}.${
                                      person.monthOfBirthday < 10
                                        ? `0${person.monthOfBirthday}`
                                        : person.monthOfBirthday
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
          ) : (
            <div>
              <h1 className="h1Sub">
                В этом месяце никто не отмечает свой День рождения
              </h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MonthBirthdays;
