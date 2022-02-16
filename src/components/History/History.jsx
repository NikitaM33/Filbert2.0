import React, { useState } from 'react';
import Swiper, { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import classnames from 'classnames'

import { BluButton } from '@common';
import chevron from '@assets/icons/chevron-solid.svg';

function History() {
  const [isSliderOn, setIsSliderOn] = useState(false);

  Swiper.use([Autoplay, Navigation, Pagination, EffectFade]);
  new Swiper('.history__narrative', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    speed: 800,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
      slideShadows: true
    },
    slidesPerView: 1
  });

  const turnOnSlider = () => {
    setIsSliderOn(!isSliderOn);
  }

  return (
    <section className="history">
      <div className="history__helper"></div>
      <div className={classnames(
        'history__banner',
        {
          'banner': !isSliderOn,
          'banner_invis': isSliderOn
        }
      )}>
        <div className="banner__wrapper">
          <div className="banner__corpName">
            <span>История</span><br />
            <span>Filbert</span>
          </div>
          <div className="banner__text">
            <p>
              Крупнейшее коллекторское агентство в СЗФО РФ, работает в сфере взыскания просроченной задолженности с 2010 года. Организация была создана на базе одного из старейших банков Северо-Запада.
            </p>
            <div className="banner__button">
              <BluButton
                onPush={turnOnSlider}
              >
                Истроия Filbert
                <img src={chevron} alt="Go" />
              </BluButton>
            </div>
          </div>
        </div>
      </div>

      <div className={classnames(
        'history__slider',
        {
          'slider': isSliderOn,
          'slider_invis': !isSliderOn
        }
      )}>
        <div className="swiper-container history__narrative">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="history__card">
                <div className="history__item item">
                  <div className="item__corpName">
                    <span>4 августа</span><br />
                    <span>2010</span>
                  </div>

                  <div className="item__text">
                    <p>
                      Создание компании ООО "Регионмежторг", впоследствии переименованной в ООО "Филберт"
                    </p>
                    <div className="banner__button">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="history__card">
                <div className="history__item item">
                  <div className="item__corpName">
                    <span>26 июня</span><br />
                    <span>2012</span>
                  </div>

                  <div className="item__text">
                    <p>
                      Учреждение ООО «Центр-Профи»
                    </p>
                    <div className="banner__button">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="history__card">
                <div className="history__item item">
                  <div className="item__corpName">
                    <span>23 января</span><br />
                    <span>2015</span>
                  </div>

                  <div className="item__text">
                    <p>
                      Переименование в ООО «Филберт»
                    </p>
                    <div className="banner__button">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="history__card">
                <div className="history__item item">
                  <div className="item__corpName">
                    <span>11 сентября</span><br />
                    <span>2015</span>
                  </div>

                  <div className="item__text">
                    <p>
                      Cоздание второй площадки подразделения УКЦ в г. Псков
                    </p>
                    <div className="banner__button">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="history__card">
                <div className="history__item item">
                  <div className="item__corpName">
                    <span>6 сентября</span><br />
                    <span>2016</span>
                  </div>

                  <div className="item__text">
                    <p>
                      Получение лицензии на деятельность по технической защите конфиденциальной информации (ФСТЭК)
                    </p>
                    <div className="banner__button">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="history__card">
                <div className="history__item item">
                  <div className="item__corpName">
                    <span>11 января</span><br />
                    <span>2017</span>
                  </div>

                  <div className="item__text">
                    <p>
                      Включение в реестр ФССП
                    </p>
                    <div className="banner__button">
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>

          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  )
}

export default History;
