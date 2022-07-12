import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swiper, {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/swiper-bundle.min.css";

import { fetchBirthdays } from "@redux/actions/fetchBirthdays";
import { DayActivityBirthdays } from '@common';


import flag1 from "@assets/Test/flag1.svg";
import flag2 from "@assets/Test/flag2.svg";
import flag3 from "@assets/Test/flag3.svg";
import flag4 from "@assets/Test/flag4.svg";
import flag5 from "@assets/Test/flag5.svg";
import flag6 from "@assets/Test/flag6.svg";
import flag7 from "@assets/Test/flag7.svg";

function DayActivity() {
  const { todayUserBirth } = useSelector(({ corpLive }) => corpLive);
  const dispatch = useDispatch();

  useEffect(() => {
    Swiper.use([Autoplay, EffectCoverflow, Navigation, Pagination]);
    new Swiper(".birthday__personCard", {
      // Arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 2,
      slidesPerGroup: 1,
      simulateTouch: true,
      centeredSlides: true,
      watchOverflow: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: true,
      },
      speed: 800,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 20,
        stretch: 50,
        slideShadows: true,
      },
    });
    new Swiper(".wrldHollydays__item", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        stretch: 50,
        slideShadows: true,
      },
      speed: 800,
      watchOverflow: true,
      initialSlide: 0,
      direction: "vertical",
    });
  }, []);

  useEffect(() => {
    dispatch(fetchBirthdays());
  }, []);

  return (
    <section className="dayActivity">
      <div className="wrapper">
        <div className="dayActivity__content">
          {/* Birthdays */}
          <div className="dayActivity__birthday birthday">
            <div className="birthday__header">
              <h2>День рождение коллег</h2>
              <h1>Сегодня поздравляем:</h1>
            </div>

            {/* Slider */}
            <div className="swiper-container birthday__personCard">
              <div className="swiper-wrapper">
                {todayUserBirth
                  ? todayUserBirth.map((person) => {
                      return (
                        <DayActivityBirthdays key={person._id} person={person} />
                      );
                    })
                  : "Сегодня никто не отмечает ДР"}
              </div>

              {/* Navigation */}
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>

          {/* Hollydays */}
          <div className="dayActivity__wrldHollydays wrldHollydays">
            <div className="wrldHollydays__header">
              <h2>Что еще интересного сегодня?</h2>
            </div>

            {/* TO DO: Сделать возможность вставлять видосы вместо таблиц ы праздниками */}
            {/* Slider */}
            <div className="wrldHollydays__item swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="wrldHollydays__global">
                    <div className="wrldHollydays__card card">
                      <div className="card__text">
                        <span>Праздники 7 октября в мире:</span>
                      </div>

                      <ul>
                        <li>
                          <div className="card__celebration">
                            <div className="card__celebrationText">
                              <span className="card__city">
                                Антигуа и Барбуда
                              </span>
                              <br />
                              <span className="card__celebrationName">
                                Торговый праздник
                              </span>
                            </div>
                            <div className="card__flag">
                              <img src={flag1} alt="National flag" />
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="card__celebration">
                            <div className="card__celebrationText">
                              <span className="card__city">Армения</span>
                              <br />
                              <span className="card__celebrationName">
                                День библиотекаря
                              </span>
                            </div>
                            <div className="card__flag">
                              <img src={flag2} alt="National flag" />
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="card__celebration">
                            <div className="card__celebrationText">
                              <span className="card__city">Иран</span>
                              <br />
                              <span className="card__celebrationName">
                                День деревень и народов
                              </span>
                            </div>
                            <div className="card__flag">
                              <img src={flag3} alt="National flag" />
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="card__celebration">
                            <div className="card__celebrationText">
                              <span className="card__city">Испания</span>
                              <br />
                              <span className="card__celebrationName">
                                День памяти Пресвятой Девы Марии Розарии
                              </span>
                            </div>
                            <div className="card__flag">
                              <img src={flag4} alt="National flag" />
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="card__celebration">
                            <div className="card__celebrationText">
                              <span className="card__city">Кыргызстан</span>
                              <br />
                              <span className="card__celebrationName">
                                День гражданской авиации
                              </span>
                            </div>
                            <div className="card__flag">
                              <img src={flag5} alt="National flag" />
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="card__celebration">
                            <div className="card__celebrationText">
                              <span className="card__city">Лаос</span>
                              <br />
                              <span className="card__celebrationName">
                                День хорошего отношения
                              </span>
                            </div>
                            <div className="card__flag">
                              <img src={flag6} alt="National flag" />
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="card__celebration">
                            <div className="card__celebrationText">
                              <span className="card__city">США</span>
                              <br />
                              <span className="card__celebrationName">
                                День кофе-фраппе
                              </span>
                            </div>
                            <div className="card__flag">
                              <img src={flag7} alt="National flag" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="wrldHollydays__global">
                    <div className="wrldHollydays__card card">
                      <div className="card__text">
                        <span>Праздники 7 октября в России:</span>
                      </div>

                      <ul>
                        <li>
                          <div className="card__celebration">
                            <div className="card__celebrationText">
                              <span className="card__city">Просто день</span>
                              <br />
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="card__celebration">
                            <div className="card__celebrationText">
                              <span className="card__city">А я томат</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="card__celebration">
                            <div className="card__celebrationText">
                              <span className="card__city">День тупления</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="card__celebration">
                            <div className="card__celebrationText">
                              <span className="card__city">
                                День ПОНЕДЕЛЬНИК УТРО!!!!
                              </span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="card__celebration">
                            <div className="card__celebrationText">
                              <span className="card__city">404 not found</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="card__celebration">
                            <div className="card__celebrationText">
                              <span className="card__city">
                                День "куда подевалось доброе утро?"
                              </span>
                              <br />
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="card__celebration">
                            <div className="card__celebrationText">
                              <span className="card__city">
                                День потертого кофе
                              </span>
                              <br />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DayActivity;
