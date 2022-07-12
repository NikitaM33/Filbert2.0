import React from "react";
import { Link } from "react-router-dom";

import plugFemale from "@assets/Plugs/PlugFemale.png";
import plugMale from "@assets/Plugs/PlugMale.png";

const DayActivityBirthdays = ({ person }) => {
  return (
    <div className="swiper-slide birthday__cardContainer" key={person.id}>
      <div className="birthday__personImg">
        <div className="birthday__card card">
          {person.img ? (
            <div className="card__img">
              <img src={person.img} alt={person.name} />
            </div>
          ) : person.sex === "female" ? (
            <div className="card__plug">
              <img
                src={plugFemale}
                alt={`${person.name} ${person.lastName}`}
              />
            </div>
          ) : (
            <div className="card__plug">
              <img src={plugMale} alt={`${person.name} ${person.lastName}`} />
            </div>
          )}
          <div className="card__text">
            <h2>{`${person.name} ${person.lastName}`}</h2>
            {/* TO DO: Сделать должность */}
            <h3>
              <b>{person.depart}</b>
            </h3>
            <h3>{`г. ${person.city}`}</h3>

            <div className="card__congratulation">{person.corpCongrat}</div>
          </div>
          <div className="card__button">
            <Link to="/corpLive">Поздравить</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayActivityBirthdays;
