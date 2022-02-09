import React from 'react';

function BluButton({
  onPush,
  ...props
}) {
  return (
    <button onClick={onPush} className="corButton">
      {props.children}
    </button>
  )
}

export default BluButton;
