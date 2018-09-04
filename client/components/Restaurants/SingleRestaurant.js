import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Grid, Column, Nested } from '../Grid';
import Aside from '../UI/Aside/Aside';
import Button from '../UI/Button/Button';

import {addToCart} from '../../store/cartReducer';
import SidebarCart from '../Cart/SidebarCart';
import MenuItems from './MenuItems';
import Container from '../UI/Container/Container'

import './SingleRestaurant.css';

class SingleRestaurant extends React.Component {
  constructor () {
    super();

    this.state = {
      restaurant: {},
      menuItems: [],
      selectedItem: {},
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
    const { restaurant, menuItems } = this.state;
    
    return (
      <React.Fragment>
        <Column className="content" width={9}>
          <Container>
            <div className="restaurant-detail">
              <Button success>Open</Button>
              <div className="flex space-between">
                <h3>{restaurant.name}</h3>
                <p>Hours: 8:00AM - 12:00AM</p>
              </div>
              <div className="text-small text-muted">590 Madison Ave</div>
              <div className="text-small text-muted">Delivery: 30 - 40 min</div>
              <div>
                4.5 / 5 125 Ratings
              </div>
            </div>
            <MenuItems click={this.handleClick} menuItems={menuItems} />
          </Container>
        </Column>
        <SidebarCart cartItems={cartItems} />
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