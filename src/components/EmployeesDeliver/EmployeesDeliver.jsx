import React, { useEffect, useState, useRef } from 'react';
import cn from 'classnames';

import bus from '../../assets/bus.png';

function EmployeesDeliver () {
  const [ isAnimate, setIsAnimate ] = useState(false);
  const busCircleRef = useRef();

  const animOnScroll = () => {
    const windowHeight = window.scrollY; // scrollY Текущая прокрутка страницы
    const animateHeight = busCircleRef.current.offsetHeight; // offsetHeight Высота документа с прокручиваемой частью
    const animOffset = offset(busCircleRef.current).top;
    const animStart = 2;

    let animatePoint = window.innerHeight - animateHeight / animStart; // innerHeight высота окна вместе с полосой прокрутки


    if (animateHeight > window.innerHeight) {
      animatePoint = window.innerHeight - window.innerHeight / animStart
    }

    if ((windowHeight > animOffset - animatePoint) && windowHeight < (animOffset + animateHeight)) {
      setIsAnimate(true);
    }
     else {
      setIsAnimate(false);
     }
  }

  const offset = (el) => {
    const rect = el.getBoundingClientRect(), // getBoundingClientRect координаты относительно окна
      scrollTop = window.scrollY || document.documentElement.scrollTop;

    return {
      top: rect.top + scrollTop
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setTimeout(() => {animOnScroll()}, 1000)
    })
  }, []);

  return (
    <div className="deliver">
      <div className="wrapper">
        <div className="deliver__container">
          <div className="deliver__bus">
            <div
              className={cn(
                'deliver__busCircle',
                {
                  'animateCircle': isAnimate
                }
              )}
              ref={busCircleRef}
            >
              <img src={bus} alt="bus" className="bus" />
            </div>
          </div>
          <div className="deliver__schedule">
            <div className="deliver__text">
              <h2 className="h2Header">Корпоративная развозка</h2>
              <h1 className="h1Header"><b>Для</b> всех <b>сотрудников</b> Filbert
                <b> развозка</b> бесплатная
              </h1>
              <p>
                Утренняя развозка от ст. м. "Кировский завод". Автобус ожидает на остановке общественного транспорта на пр. Стачек со стороны ДК им Газа.
              </p>
              <p>
                Вечером Автобус ожидает на против главного входа в БЦ Терминал
              </p>
            </div>
            <div className="deliver__table">
              <table width="100%" rules="rows" frame="below" border="3" bordercolor="#F2F2F2">
                <thead align="center">
                  <tr>
                    <th></th>
                    <th>Утро</th>
                    <th>Вечер</th>
                  </tr>
                </thead>
                <tbody align="center">
                  <tr>
                    <td>01</td>
                    <td>09:00</td>
                    <td>17:00</td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>09:30</td>
                    <td>18:00</td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td></td>
                    <td>21:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeesDeliver;
