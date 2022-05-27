import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';

import handshake from '@assets/icons/handshake-solid.svg';
import lock from '@assets/icons/lock-solid.svg';
import efficiency from '@assets/icons/thumbs-up-solid.svg';
import balance from '@assets/icons/balance-scale-solid.svg';
import { MainSideBox } from '@common';
import { AnimationPosition } from '../../helpers/AnimationPosition';

const Mission = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const elemRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      AnimationPosition(elemRef, 4, setIsAnimate);
    });

    return window.removeEventListener('scroll', () => {
      AnimationPosition(elemRef, 4, setIsAnimate);
    });
  }, [])

  return (
    <section className="wrapper">
      <div className="mission">
        <div className="mission__leads">

          <div className="mission__item">
            <div ref={elemRef} className={cn(
              'mission__elem',
              {
                'showPrioritets': isAnimate
              }
            )}>
              <div className="mission__img">
                <img src={handshake} alt="Handshake" />
              </div>
              <span>Профессионализм</span>

              <p>
                Сочетание высокого уровня компетентности всех сотрудников компании со стремлением к постоянному совершенствованию своих профессиональных знаний и умений.
              </p>
            </div>

            <div ref={elemRef} className={cn(
              'mission__elem',
              {
                'showPrioritets': isAnimate
              }
            )}>
              <div className="mission__img">
                <img src={lock} alt="Lock" />
              </div>
              <span>Надежность</span>

              <p>
                Многолетний опыт работы компании обеспечивает прочность и стабильность во взаимоотношениях с контрагентами и сотрудниками.
              </p>
            </div>
          </div>

          <div className="mission__item">
            <div ref={elemRef} className={cn(
              'mission__elem',
              {
                'showPrioritets': isAnimate
              }
            )}>
              <div className="mission__img">
                <img src={efficiency} alt="Efficiency" />
              </div>
              <span>Эффективность</span>

              <p style={{ marginBottom: '4.3rem' }}>
                Регламентированные процессы, командная работа профессионалов обеспечивают высокую скорость и продуктивность деятельности компании.
              </p>
            </div>

            <div ref={elemRef} className={cn(
              'mission__elem',
              {
                'showPrioritets': isAnimate
              }
            )}>
              <div className="mission__img">
                <img src={balance} alt="Balance" />
              </div>
              <span>Справедливость</span>

              <p>
                Компания всегда находит сбалансированные решения для всех сторон финансовых отношений, руководствуясь нормами закона и морали.
              </p>
            </div>
          </div>
        </div>

        <div className="mission__preciusness preciusness">
          <MainSideBox
            bg={'linear-gradient(137.24deg, #1C3D4B 28.96%, #2E4651 51.6%, #282C33 72.01%)'}
          >

            <div className="preciusness__header">
              <h2>Миссия Filbert</h2>
              <h2>и наши ценности</h2>
            </div>

            <div className="preciusness__elem">
              <p>
                Законно и ответственно обеспечить исполнение обязательств участниками кредитно - финансовых отношений:
              </p>

              <p>
                <b>Должникам</b> – открыть перспективу к созданию своего нового финансового будущего;
              </p>

              <p>
                <b>Кредиторам</b> – предоставить гарантию стабильности;
              </p>

              <p>
                <b>Сотрудникам</b> – обеспечить профессиональную реализацию и достойные условия труда.
              </p>

              <i>Иванов А.Б.</i>
            </div>
          </MainSideBox>
        </div>
      </div>
    </section>
  )
}

export default Mission;
