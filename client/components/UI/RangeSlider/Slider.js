import React from 'react';

import './Slider.css'

class Slider extends React.Component {
  constructor () {
    super();

    this.state = {
      value: 0,
    }
  }

  handleOnChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  render () {
    const {
      min,
      max
    } = this.props;

    return (
      <div className="range-slider">
        <input 
          onChange={this.handleOnChange} 
          type="range" 
          min={min} 
          max={max} 
          value={this.state.value} 
          className="slider"
        />
      </div>
    )
  }
}

export default Slider;