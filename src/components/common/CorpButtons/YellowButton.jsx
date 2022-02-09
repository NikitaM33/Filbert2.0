import React from 'react';
import cn from 'classnames';

function YellowButton({
  onPush,
  theme='solid',
  disable,
  ...props
}) {
  return (
    <button onClick={onPush} className={cn(
      'solidYellowButton',
      [theme],
      {
        'disable': disable
      }
    )}
    disabled={disable}
    >
      {props.children}
    </button>
  )
}

export default YellowButton;
