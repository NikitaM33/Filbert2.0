import React from 'react';
import cn from 'classnames';

const BossCard = ({ bossData, x, y, activeOffice, cardOrientation }) => {
  return (
    <>
      {
        bossData &&
        bossData.map((data, index) => {

          return (
            <div
              key={data.id}
              className={cn(
                'bossCard',
                {
                  'active': activeOffice === index
                }
              )}
              style={{ top: `${y}px`, left: `${x}px` }}
            >
              {
                activeOffice === index ?
                <div className="bossCard__card personCard">
                  <div className="personCard__image">
                    <img src={data.image} alt={data.name} />
                  </div>
                  <div className={cn(
                    {
                      'personCard__leftText': !cardOrientation,
                      'personCard__rightText': cardOrientation
                    }
                  )}>
                    <p className="personCard__pos">{data.position}</p>
                    {
                      data.name ? <p className="personCard__name">{data.name}</p>
                      : ''
                    }
                    {
                      data.name ? <p className="personCard__officeNumber">Офисс {data.officeNumber}</p>
                      : ''
                    }
                  </div>
                </div>
                : ''
              }
            </div>
          )
        })
      }
    </>
  );
}

export default BossCard;
