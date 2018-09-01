import React from "react";

import './Aside.css';

class Aside extends React.Component {
  render() {
    return (
      <aside className="aside three-cols">
        {this.props.children}
      </aside>
    );
  }
}

export default Aside;
