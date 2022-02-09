import React from 'react';

function MainSideBox({ bg, ...props }) {
  return (
    <div className="sideBox" style={{ background: bg }}>
      {props.children}
    </div>
  )
}

export default MainSideBox;
