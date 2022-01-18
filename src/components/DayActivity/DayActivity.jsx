import React, { useEffect } from 'react';
import Swiper, { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Link } from 'react-router-dom';

import person1 from '@assets/Test/test1.jpg';
import person2 from '@assets/Test/test2.jpg';
import person3 from '@assets/Test/test3.jpg';

function DayActivity() {

  useEffect(() => {
    Swiper.use([Autoplay, EffectCoverflow, Navigation, Pagination]);
    new Swiper('.birthday__personCard', {
      // Arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      // Bullets
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      //   dynamicBullets: true
      // },
      slidesPerView: 2,
      slidesPerGroup: 1,
      simulateTouch: false,
      centeredSlides: true,
      watchOverflow: true,
      // initialSlide: 1,
      // loop: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false
      },
      speed: 800,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 40,
        stretch: 50,
        slideShadows: true
      }
    });
  }, []);

  return (
    <div className="dayActivity">
      <div className="wrapper">
        <div className="dayActivity__content">
          <div className='dayActivity__birthday birthday'>
            <div className="birthday__header">
              <h2>День рождение коллег</h2>
              <h1>Сегодня поздравляем:</h1>
            </div>

            {/* Slider */}
            <div className="birthday__personCard swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide mySlide">
                  <div className="birthday__personImg">
                    <div className="birthday__card card">
                      <div className="card__img">
                        <img src={person1} alt="Some person" />
                      </div>
                      <div className="card__text">
                        <h2>Белецкая Ольга</h2>
                        <h3>Руководитель отдела УСВД</h3>

                        <p>
                          Желаем Вам в работе вдохновенья,
                          В кругу семьи - тепла и доброты.
                          Среди друзей - любви и уваженья
                          И в жизни сбывшейся мечты.
                        </p>
                      </div>
                      <div className="card__button">
                        <Link to="/#birthday">Поздравить</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide mySlide">
                  <div className="birthday__personImg">
                    <div className="birthday__card card">
                      <div className="card__img">
                        <img src={person2} alt="Some person" />
                      </div>

                      <div className="card__text">
                        <h2>Белецкая Ольга</h2>
                        <h3>Руководитель отдела УСВД</h3>

                        <p>
                          Желаем Вам в работе вдохновенья,
                          В кругу семьи - тепла и доброты.
                          Среди друзей - любви и уваженья
                          И в жизни сбывшейся мечты.
                        </p>
                      </div>

                      <div className="card__button">
                        <Link to="/#birthday">Поздравить</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide mySlide">
                  <div className="birthday__personImg">
                    <div className="birthday__card card">
                      <div className="card__img">
                        <img src={person3} alt="Some person" />
                      </div>

                      <div className="card__text">
                        <h2>Белецкая Ольга</h2>
                        <h3>Руководитель отдела УСВД</h3>

                        <p>
                          Желаем Вам в работе вдохновенья,
                          В кругу семьи - тепла и доброты.
                          Среди друзей - любви и уваженья
                          И в жизни сбывшейся мечты.
                        </p>
                      </div>
                      <div className="card__button">
                        <Link to="/#birthday">Поздравить</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>

              {/* Bullets */}
              <div className="swiper-pagination"></div>

            </div>
          </div>

          <div className='dayActivity__wrldHollydays'>
            <h2>Что еще интересного сегодня?</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayActivity;
