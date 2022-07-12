import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BlockHeader, UserBirthdayCard } from '@common';
import birthdayStar from '@assets/icons/LightYellowStar.svg';
// import { setTodayBirthday } from '@redux/actions/fetchBirthdays';

const TodayBirthday = () => {
  // const dispatch = useDispatch();
  const { todayUserBirth } = useSelector(({ corpLive }) => corpLive);

  // useEffect(() => {
  //   dispatch(setTodayBirthday());
  // }, []);

  return (
    <section className="todayBirthday">
      <div className="wrapper">
        <div className="todayBirthday__header birthdayHeader">
          <div className="todayBirthday__headerCircle">
            <div>
              <img src={birthdayStar} alt="star" />
            </div>
            <div>
              <img src={birthdayStar} alt="star" />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="birthdayHeader__container">
            <BlockHeader
              yellow
              textH3={"Дни рождения"}
              textH2={"Сегодня поздравляем"}
              textP={"На этой странице Вы можете узнать о ближайших днях рождениях. Узнать кто сегодня празднует свой День рождения и поздравить именниника лично"}
            />
          </div>
        </div>

        <div className="todayBirthday__personEvent personEvent">
          <div className="personEvent__background">
            <div>
              <img src={birthdayStar} alt="star" />
            </div>
            <div>
              <img src={birthdayStar} alt="star" />
            </div>
            <div>
              <img src={birthdayStar} alt="star" />
            </div>
            <div>
              <img src={birthdayStar} alt="star" />
            </div>
            <div>
              <img src={birthdayStar} alt="star" />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {
            todayUserBirth
              ? todayUserBirth.map((user) => {
                return <UserBirthdayCard
                  key={user._id}
                  user={user}
                />
              })
              : 'Сегодня никто не отмечает день рождения :('
          }
        </div>
      </div>
    </section>
  )
}

export default TodayBirthday;
