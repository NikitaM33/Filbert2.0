import React from 'react';

import city from '@assets/NewYork.jpg';

const NewsHeader = () => {
  return (
    <div className='newsBlock__header newsHeader'>
      <div className="newsHeader__text">
        <h2 className="h2HeaderWhite">Новости</h2>
        <h1 className="h1Header">Новости компании, а также новости Collection</h1>
      </div>
      <div className="newsHeader__image newsImage">
        <img src={city} alt="City" />
      </div>
    </div>
  )
}

export default NewsHeader;
