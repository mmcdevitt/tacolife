import React from "react";
import cs from 'classnames';

const nums = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve"
};

class Column extends React.Component {
  width() {
    const { width } = this.props;

    return typeof width === "number" ? nums[width] : width;
  }

  classNames() {
    const { 
      mergeRows, 
      className, 
      flex,
      width,
    } = this.props;

    const classNames = cs(
      width ? `${this.width()}-cols` : null,
      mergeRows ? `merge-${nums[mergeRows]}-rows` : null,
      { flex },
      className
    );

    return classNames;
  }

  render() {
    return <div id={this.props.id} className={this.classNames()}>{this.props.children}</div>;
  }
}

export default Column;