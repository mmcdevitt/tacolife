import React from "react";
import cs from 'classnames';

import './Aside.css';

class Aside extends React.Component {
  classes () {
    const { border, className } = this.props;

    const classNames = cs(
      'aside',
      'three-cols',
      border ? `border-${border}` : null,
      className
    )

    return classNames
  }
  render() {
    return (
      <aside className={this.classes()}>
        {this.props.children}
      </aside>
    );
  }
}

export default Aside;
