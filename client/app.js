import React from 'react'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

import {Navbar} from './components'
import Routes from './routes'
import Layout from './components/Layout/Layout';
import {setCart, requestCart, setLocalCart} from './store/cartReducer'
import {me} from './store'

class App extends React.Component {
  componentDidMount () {
    const {currentUser} = this.props

    this.props.me()
    this.props.requestCart();

    if (!currentUser) {
      this.props.setLocalCart()
    }
  }

  // renderTest () {
  //   if (!this.props.currentUser.id) {
  //     return 'Loading'
  //   } else {
  //     return (
        
  //     )
  //   }
  // }

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
    currentUser: !!state.User.id
  }
}

export default withRouter(
  connect(mapStateToProps, {
    requestCart,
    setLocalCart,
    me,
  })(App)
)