import React, { useEffect } from 'react';
import Swiper, { Autoplay, EffectFade, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

import star from '@assets/icons/Star.svg';
import borderPlus from '@assets/icons/borderPlus.svg';

const Statistic = () => {
  useEffect(() => {
    Swiper.use([Autoplay, EffectFade, Navigation]);
    new Swiper('.statistic__section', {
      autoplay: {
        delay: 5500,
        disabledOnIneraction: false
      },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev'
      // },
      allowTouchMove: false,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
        slideShadows: false
      },
    })
  }, []);

  return (
    <section className="statistic">
      <div className="swiper-container statistic__section">
        <div className="swiper-wrapper swiperAbsoluteWrapper">

          <div className="swiper-slide">
            <div className="statistic__yellowCircle yellowCircle">
              <div className="yellowCircle__borderCircle"></div>
              <div className="yellowCircle__borderCircle"></div>
              <div className="yellowCircle__borderCircle"></div>
              <div className="yellowCircle__borderCircle"></div>
              <div className="yellowCircle__borderCircle"></div>

              <div className="yellowCircle__moveHorizontalLine"></div>
              <div className="yellowCircle__moveHorizontalLine"></div>

              <div className="yellowCircle__moveVerticalLine"></div>
              <div className="yellowCircle__moveVerticalLine"></div>

              <div className="yellowCircle__transparentNumber">10</div>

              <div className="yellowCircle__circle circle">
                <div className="circle__years">
                  <h1 className="circle__number">10</h1>
                  <h1 className="circle__numberText">Лет</h1>
                </div>

                <div className="circle__text">
                  <h3>на рынке</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="statistic__regions regions">
              <div className="regions__regionMoveVerticalLine"></div>
              <div className="regions__regionMoveVerticalLine"></div>
              <div className="regions__regionMoveVerticalLine"></div>

              <div className="regions__starBlock">
                <img src={star} alt="star"></img>
                <img src={star} alt="star"></img>
                <img src={star} alt="star"></img>
                <img src={star} alt="star"></img>
                <img src={star} alt="star"></img>
                <img src={star} alt="star"></img>
                <img src={star} alt="star"></img>
                <img src={star} alt="star"></img>
              </div>

              <div className="regions__ghostStar">
                <img src={star} alt="star"></img>
                <img src={star} alt="star"></img>
              </div>

              <div className="regions__squareOne"></div>

              <div className="regions__yellowBlock">
                <div className="regions__yellowBar">
                  <h1>Б<span>о</span><span>л</span>ее 35</h1>
                </div>

                <div className="regions__text">
                  <h3>Регионов</h3>
                  <p>Присутствия</p>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="statistic__employees employees">
              <div className="employees__movingSquer"></div>

              <div className="employees__plusPlus"></div>
              <img src={borderPlus} alt="Plus" className="employees__borderPlus" />
              <img src={borderPlus} alt="Plus" className="employees__borderPlus" />

              <div className="employees__triangleGoseRound triangleGoseRound">
                <div className="triangleGoseRound__triangle"></div>
              </div>

              <div className="regions__regionMoveVerticalLine"></div>
              <div className="employees__moveVerticalLine"></div>
              <div className="employees__moveVerticalLine"></div>

              <div className="employees__ghost350">350+</div>

              <div className="employees__square">
                <span>350</span>
                <span>штатных</span>
                <span>сотрудников</span>
                <div className="employees__plus"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Statistic;
