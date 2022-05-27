import React from 'react';

const MainUserCard = ({ image, name, pos, dep }) => {
  return (
    <div className="mainPersonCard">
      <div className="mainPersonCard__photo">
        <img src={image} alt="Person" />
      </div>
      <div className="mainPersonCard__descr">
        <div className="mainPersonCard__personInfo">
          <div className="mainPersonCard__name">
            {name}
          </div>
          <div className="mainPersonCard__position">
            {pos}
          </div>
          <div className="mainPersonCard__depart">
            {dep}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainUserCard;
