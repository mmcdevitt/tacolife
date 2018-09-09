import React from 'react';
import { Grid, Column, Nested } from '../Grid';
import { Navbar } from '../index'

class DefaultLayout extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Navbar />
        <Grid gap={0}>
          {this.props.children}
        </Grid>
      </React.Fragment>
    )
  }
}

export default DefaultLayout;