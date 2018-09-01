import React from 'react';

import './Button.css';

const Button = props => {
  const classNames = ['btn'];

  if (props.className) {
    classNames.push(props.className)
  }

  return (
    <button className={classNames.join(' ')}>
      {props.children}
    </button>
  )
}

export default Button;