import React from 'react'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

import {Navbar} from './components'
import Routes from './routes'
import Layout from './components/Layout/Layout';
import {setCart, requestCart, setLocalCart} from './store/cartReducer'
import {me} from './store'

const token = localStorage.getItem('token')

class App extends React.Component {
  componentDidMount () {
    const {currentUser} = this.props

    if (token) {
      this.props.me()
    }
      
    this.props.requestCart();

    if (!currentUser.authenticated) {
      this.props.setLocalCart()
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {currentUser} = this.props
    const token = localStorage.getItem('token')
 
    if (nextProps.currentUser.id !== currentUser.id) {
      this.props.setCart(nextProps.currentUser.id, token)
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
    currentUser: state.Auth.currentUser
  }
}

export default withRouter(
  connect(mapStateToProps, {
    requestCart,
    setLocalCart,
    me,
    setCart,
  })(App)
)