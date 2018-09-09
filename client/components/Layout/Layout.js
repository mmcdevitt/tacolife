import React from 'react';
import {
  DefaultLayout,
  RestaurantLayout,
} from './'

const subdomain = window.location.host.split('.')

class Layout extends React.Component {
  renderLayout () {
    if (subdomain.length >= 3 && subdomain[0] !== 'www') {
      return (
        <RestaurantLayout>
          {this.props.children}
        </RestaurantLayout>
      )
    } else {
      return (
        <DefaultLayout>
          {this.props.children}
        </DefaultLayout>
      )
    }
  }

  render () {
    return (
      <React.Fragment>
        {this.renderLayout()}
      </React.Fragment>
    )
  }
}

export default Layout;