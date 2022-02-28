import React, { useEffect, useState, useRef } from 'react';
import cn from 'classnames';

import bus from '../../assets/bus.png';
import { AnimationPosition } from '../../helpers/AnimationPosition';

const EmployeesDeliver = () => {
  const [ isAnimate, setIsAnimate ] = useState(false);
  const busCircleRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setTimeout(() => {
        AnimationPosition(busCircleRef, 4, setIsAnimate);
      }, 1000)
    })
  }, []);

  return (
    <section className="deliver">
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
              <p className="pHeader">
                Утренняя развозка от ст. м. "Кировский завод". Автобус ожидает на остановке общественного транспорта на пр. Стачек со стороны ДК им Газа.
              </p>
              <p className="pHeader">
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
    </section>
  )
}

export default EmployeesDeliver;
