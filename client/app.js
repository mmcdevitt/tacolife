import React from 'react'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import Routes from './routes'
import Layout from './components/Layout/Layout';
import {setCart, requestCart, setLocalCart} from './store/cartReducer'
import { me, requestUser } from './store'
import {fetchRestaurants, requestRestaurants} from './actions/restaurants/actions'

class App extends React.Component {
  componentDidMount () {
    const {currentUser} = this.props
    const token = localStorage.getItem('token')

    if (token) {
      this.props.requestUser()
      this.props.me()
    }

    this.props.requestRestaurants()
    this.props.fetchRestaurants()

    this.props.requestCart();

    if (!currentUser.authenticated) {
      this.props.setLocalCart()
    } 

    this.props.setCart(currentUser.id, token)
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
    currentUser: state.auth.currentUser,
    isUserLoading: state.auth.isLoading,
  }
}

export default withRouter(
  connect(mapStateToProps, {
    requestCart,
    setLocalCart,
    me,
    setCart,
    requestUser,
    fetchRestaurants,
    requestRestaurants,
  })(App)
)