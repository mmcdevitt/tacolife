import React from 'react';
import cs from 'classnames';

import './Button.css';

const Button = props => {
  const { 
    border, 
    primary,
    color,
    double,
    className 
  } = props;

  const classNames = cs(
    'btn',
    border ? 'btn-border' : null,
    color ? `b-${color}` : null,
    double ? 'b-2x' : null,
    { primary },
    className
  )

  return (
    <button className={classNames}>
      {props.children}
    </button>
  )
}

export default Button;