import React from 'react';
import cn from 'classnames';

function YellowButton({
  name,
  onPush,
  theme='solid', // solid or bordered
  disable,
  ...props
}) {
  return (
    <button onClick={onPush} name={name} className={cn(
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
