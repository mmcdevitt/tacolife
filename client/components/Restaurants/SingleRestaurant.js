import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Grid, Column } from '../Grid';
import Aside from '../UI/Aside/Aside';
import Button from '../UI/Button/Button';

import {addToCart} from '../../store/cartReducer';

class SingleRestaurant extends React.Component {
  constructor () {
    super();

    this.state = {
      restaurant: {},
      menuItems: []
    }
  }

  componentDidMount () {
    axios
      .get(`/api/restaurants/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          restaurant: res.data,
          menuItems: res.data.menuItems
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    const { cartItems } = this.props;
    console.log(cartItems)
    return (
      <React.Fragment>
        <Column className="content" width={9}>
          {this.state.restaurant.name}
          <ul>
            {this.state.menuItems.map(item => {
              return (
                <li key={item.id}>
                  {item.name} - ${item.price}
                  <button onClick={() => this.props.addToCart(item.id, null, 1, this.state.restaurant)}>Add to Cart</button>
                </li>
              )
            })}
          </ul>
        </Column>
        <Aside>
          Cart Items
          {cartItems.map(item => {
            return (
              <div key={item.id}>
                {item.menuItem.name}
              </div>
            )
          })}
        </Aside>
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  const { cartItems, totalPrice } = state.Cart

  return {
    cartItems,
    totalPrice,
  }
}

export default connect(mapStateToProps, {
  addToCart,
})(SingleRestaurant);