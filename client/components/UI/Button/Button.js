import React from 'react';
import cs from 'classnames';

import './Button.css';

const Button = props => {
  const { 
    border, 
    primary,
    success,
    color,
    double,
    block,
    large,
    className 
  } = props;

  const classNames = cs(
    'btn',
    border ? 'btn-border' : null,
    color ? `b-${color}` : null,
    double ? 'b-2x' : null,
    { primary },
    { success },
    { block },
    { large },
    className
  )

  return (
    <button className={classNames} onClick={props.onClick} action={props.action}>
      {props.children}
    </button>
  )
}

export default Button;