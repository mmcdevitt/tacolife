import React from 'react'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

import {Navbar} from './components'
import Routes from './routes'
import Layout from './components/Layout/Layout';
import {setCart, requestCart, setLocalCart} from './store/cartReducer'

class App extends React.Component {
  componentDidMount () {
    const {currentUser} = this.props

    this.props.requestCart();

    if (!currentUser) {
      this.props.setLocalCart()
    }
  }

  render () {
    return (
      <Layout>
        <Routes />
      </Layout>
    ) 
  }
}

function mapStateToProps (state) {
  return {
    currentUser: null
  }
}

export default withRouter(
  connect(mapStateToProps, {
    requestCart,
    setLocalCart,
  })(App)
)