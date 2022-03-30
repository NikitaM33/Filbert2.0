import React from 'react';

const HeaderText = ({ h2Header, h1Header, pHeader }) => {
  return (
    <div className="headerText">
      <h2 className="h2Header headerText__text">{h2Header}</h2>
      <h1 className="h1Header headerText__text">{h1Header}</h1>
      {
        pHeader && <p className="headerText__text">
          {pHeader}
        </p>
      }
    </div>
  )
}

export default HeaderText;
