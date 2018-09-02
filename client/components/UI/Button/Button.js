import React from 'react';
import cs from 'classnames';

import './Button.css';

const Button = props => {
  const { 
    border, 
    primary,
    color,
    double,
    block,
    className 
  } = props;

  const classNames = cs(
    'btn',
    border ? 'btn-border' : null,
    color ? `b-${color}` : null,
    double ? 'b-2x' : null,
    { primary },
    { block },
    className
  )

  return (
    <button className={classNames}>
      {props.children}
    </button>
  )
}

export default Button;