import React from "react";

import './grid.css';

class Grid extends React.Component {
  styles() {
    const { gap } = this.props;

    return {
      gridGap: gap
    };
  }

  render() {
    return (
      <div className="grid" style={this.styles()}>
        {this.props.children}
      </div>
    );
  }
}

export default Grid;
