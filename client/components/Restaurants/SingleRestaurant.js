import React from 'react';
import axios from 'axios';
import { Grid, Column } from '../Grid';
import Aside from '../UI/Aside/Aside';

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
        console.log(res.data)
        this.setState({
          restaurant: res.data,
          menuItems: res.data.menuItems
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <Grid gap={0}>
        <Column width={9}>
          {this.state.restaurant.name}
          <ul>
            {this.state.menuItems.map(item => {
              return (
                <li key={item.id}>{item.name} - ${item.price}</li>
              )
            })}
          </ul>
        </Column>
        <Aside>
          Cart Items
        </Aside>
      </Grid>
    )
  }
}

export default SingleRestaurant;