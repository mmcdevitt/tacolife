import React from 'react';
import Aside from '../Aside/Aside';
import Button from '../Button/Button';
import Slider from '../RangeSlider/Slider';
import Checkbox from '../Checkbox/Checkbox';

import './Filters.css';


class FilterSidebar extends React.Component {
  render () {
    return (
      <Aside border="right">
        <div className="wrapper">
          <div className="filters">

            <div className="filters-group">
              <div className="filters-header">
                <h4>Filters</h4>
              </div>
            </div>

            <div className="filters-group">
              <div className="filters-order-method">
                <div className="filters-order-method-title">
                  <h6>I want</h6>
                </div>
                <div className="filters">
                  <div className="btn-group btn-group-block">
                    <Button block primary className="active">Delivery</Button>
                    <Button block primary>Pickup</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="filters-group">
              <div className="filters-price">
                <div className="filters-price-title">
                  <h6>Features</h6>
                </div>
                <Checkbox label="Free Shipping" />
              </div>
            </div>

            <div className="filters-group">
              <div className="filters-price">
                <div className="filters-price-title">
                  <h6>Price</h6>
                </div>
                <Slider min={0} max={5} />
              </div>
            </div>

            <div className="filters-group">
              <div className="filters-rating">
                <div className="filters-rating-title">
                  <h6>Rating</h6>
                </div>
                <Slider min={0} max={5} />
              </div>
            </div>

          </div>
        </div>
      </Aside>
    )
  }
}

export default FilterSidebar;