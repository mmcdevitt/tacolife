import React from 'react';
import { Grid } from '../Grid';
import { Navbar } from '../index'

class Layout extends React.Component {
  render () {
    return (
      <Grid gap={0}>
        <Navbar />
        {this.props.children}
      </Grid>
    )
  }
}

export default Layout;