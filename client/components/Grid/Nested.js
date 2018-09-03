import React from "react";
import cs from 'classnames';

class Nested extends React.Component {
  styles() {
    const { gap } = this.props;

    return {
      gridGap: gap
    };
  }

  classes () {
    const { className } = this.props;

    const classNames = cs(
      'nested',
      className
    )

    return classNames;
  }

  render() {
    return (
      <div className={this.classes()} style={this.styles()}>
        {this.props.children}
      </div>
    );
  }
}

export default Nested;
