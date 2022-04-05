import React from 'react';
import cn from 'classnames';

import { BlockHeader } from '@common';

const Rating = ({ leaders }) => {
  const topThree = leaders && leaders.sort((a, b) => a.fee - b.fee).reverse().slice(0, 3);
  const othersLeaders = leaders && leaders.sort((a, b) => a.fee - b.fee).reverse().slice(3);


  return (
    <div className="rating">
      <div className="wrapper">
        <div className="rating__headerBlock">
          <BlockHeader
            blue
            textH2={'Лидеры УКЦ по сборам'}
            textB={'в этом месяце'}
            textP={'Тройка лидеров по телефонным сборам отображается в реальном времени'}
          />
        </div>

        <div className="rating__info">
          <div className="rating__top top">
            {
              topThree && topThree.sort((a, b) => a.fee - b.fee).reverse().map((leader, index) => {
                return (
                  <div key={leader.id} className={cn(
                    'top__circlePlace',
                    {
                      'first': index + 1 === 1,
                      'second': index + 1 === 2,
                      'third': index + 1 === 3
                    }
                  )}>
                    <div className="top__leaderPhoto">
                      {
                        leader.photo ? <img src={leader.photo} alt={leader.name} />
                          : <img src={leader.plug} alt={leader.name} />
                      }
                    </div>

                    <div className="top__place">
                      <span className="top__number">
                        {index + 1}
                      </span> место
                    </div>

                    <div className="top__leaderInfo">
                      <span className="top__leaderName">
                        {leader.name}
                      </span>

                      <span className="top__leaderGroup">
                        {leader.city}, группа {leader.group}
                      </span>

                      <span className="top__leaderFee">
                        {(leader.fee).toLocaleString('ru')}
                      </span>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className="rating__overallRating overallRating">
            {
              othersLeaders && othersLeaders.sort((a, b) => a.fee - b.fee).reverse().map((person, index) => {
                let feesValue = person.fee ? ((person.fee * 100) / 5000000) : 'Can`t count this';

                return (
                  <div key={person.id} className="overallRating__behindPersons">
                    <div className="overallRating__photo">
                      {
                        person.photo ? <img src={person.photo} alt={person.name} />
                          : <img src={person.plug} alt={person.name} />
                      }
                    </div>
                    <div className="overallRating__info info">
                      <div className="info__personInfo">
                        <div className="info__place">

                          <div className="info__name">
                            <h3>{person.name}</h3>
                            <span className="info__cityGroup">
                              Группа {person.group}, {person.city}
                            </span>
                          </div>

                          <span className="info__placeNumber">
                            {
                              index + 4 < 10 ? `0${index + 4}` : `${index + 4}`
                            }
                          </span>
                        </div>
                      </div>

                      <div className="info__feesRating">
                        <div className="info__feesCount">{(person.fee).toLocaleString('ru')}</div>
                        <div
                          className="info__feesValue"
                          style={{ width: `${feesValue}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rating;
