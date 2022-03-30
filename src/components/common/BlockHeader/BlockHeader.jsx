import React from 'react';
import cn from 'classnames';

import bigArrow from '@assets/icons/BigArrow.png';
import DarkYellowStar from '@assets/icons/DarkYellowStar.svg';

const BlockHeader = ({ blue, yellow, textH2, textB, textP }) => {
  return (
    <div className={cn(
      'headerBlock',
      {
        'blue': blue,
        'yellow': yellow
      }
    )}>
      <img src={bigArrow} alt="Arrow" className="headerBlock__bigArrow" />
      <div className="headerBlock__text">
        <h2>
          {textH2}<br />
          <b> {textB}</b>
        </h2>
        <p>
          {textP}
        </p>
      </div>

      <div className="headerBlock__decorations decorations">
        <div className="decorations__decoration"></div>
        <div className="decorations__decoration"></div>
        <div className="decorations__decoration"></div>

        <div className="decorations__decoration"></div>
        <div className="decorations__decoration"></div>
        <div className="decorations__decoration">
          <img src={DarkYellowStar} alt="star" />
        </div>

        <div className="decorations__decoration">
          <img src={DarkYellowStar} alt="star" />
        </div>
      </div>
    </div>
  )
}

export default BlockHeader;
