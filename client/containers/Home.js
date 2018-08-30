import React from 'react';
import { Grid, Column, Nested } from "../components/Grid";

import Restaurants from '../components/Restaurants/Restaurants';

class Home extends React.Component {
  constructor () {
    super();

    this.state = {
      restaurants: [
        {id: 1, name: 'taco bros'},
        {id: 2, name: 'chipotle'},
        {id: 3, name: 'taco stand'}
      ]
    }
  }

  render () {
    return (
      <Grid gap={0}>
        <Column width={3}>hello</Column>
        <Column width={9}>
          <Nested>
            <Restaurants restaurants={this.state.restaurants} />
          </Nested>
        </Column>
      </Grid>
    )
  }
}

export default Home;