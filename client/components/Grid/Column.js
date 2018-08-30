import React from "react";
import _ from "lodash";

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
  constructor() {
    super();

    this.state = {
      classNames: []
    };
  }

  width() {
    const { width } = this.props;

    return typeof width === "number" ? nums[width] : width;
  }

  classNames() {
    const { mergeRows, className } = this.props;
    const { classNames } = this.state;

    if (className) {
      classNames.push(className)
    }

    classNames.push(`${this.width()}-cols`);

    if (mergeRows) {
      classNames.push(`merge-${nums[mergeRows]}-rows`);
    }

    return classNames.join(" ");
  }

  render() {
    return <div className={this.classNames()}>{this.props.children}</div>;
  }
}

_.times(12, i => {
  Column[_.upperFirst(nums[i])] = props => (
    <div className={`${nums[i]}-cols`}>{props.children}</div>
  );
});

export default Column;
