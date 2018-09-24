import React from 'react';

import './Checkbox.css';

class Checkbox extends React.Component {
  render () {
    return (
      <div className="checkbox">
        <label className="md-check">
          <input type="checkbox" /> 
          <i className="indigo"></i> {this.props.label}
        </label>
      </div>
    )
  }
}

export default Checkbox;