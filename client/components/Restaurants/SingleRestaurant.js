import React from 'react';
import axios from 'axios';
import { Grid, Column } from '../Grid';
import Aside from '../UI/Aside/Aside';
import Button from '../UI/Button/Button';

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
    return (
      <React.Fragment>
        <Column className="content" width={9}>
          {this.state.restaurant.name}
          <ul>
            {this.state.menuItems.map(item => {
              return (
                <li key={item.id}>
                  {item.name} - ${item.price}
                  <Button primary>Add to Cart</Button>
                </li>
              )
            })}
          </ul>
        </Column>
        <Aside>
          Cart Items
        </Aside>
      </React.Fragment>
    )
  }
}

export default SingleRestaurant;