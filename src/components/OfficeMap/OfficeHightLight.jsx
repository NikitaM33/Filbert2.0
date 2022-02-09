import React from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';

const OfficeHightLight = ({ mapDataFloor, activeOffice }) => {
  return (
    <div
      className="map__container container"
    >
      <svg viewBox="0 0 1505 760">
        {
          mapDataFloor &&
          mapDataFloor.map((data, index) => {
            return (
              <Link
                key={index}
                to={data.href}
                data-toggle="tooltip"
                title={data.title}
                data-tip={data.tip}
                data-dep={data.id}
              >
                <path id={data.id} d={data.d} className={cn(
                  'part',
                  {
                    'active': activeOffice === index
                  }
                )}
                >
                </path>
              </Link>
            )
          }
          )
        }
      </svg>
    </div>
  )
}

export default OfficeHightLight;

