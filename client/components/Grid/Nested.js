import React from "react";

class Nested extends React.Component {
  styles() {
    const { gap } = this.props;

    return {
      gridGap: gap
    };
  }

  render() {
    return (
      <div className="nested" style={this.styles()}>
        {this.props.children}
      </div>
    );
  }
}

export default Nested;
