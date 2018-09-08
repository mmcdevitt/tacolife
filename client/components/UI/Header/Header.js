import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../../../store'
import { Grid, Column, Nested } from "../../Grid";
import {resetCart} from '../../../store/cartReducer'

import './Header.css';
import Button from '../Button/Button';

class Header extends React.Component {
  handleLogOut = () => {
    // const {logout} = this.props

    this.props.logout()
    this.props.resetCart()
  }

  renderAdminLinks () {
    const { currentUser } = this.props;

    if (currentUser.superAdmin) {
      return <Link to="/admin">Super Admin</Link>
    }
  }

  renderSessionLinks() {
    const {isLoggedIn} = this.props

    if (isLoggedIn) {
      return [
        <a onClick={this.handleLogOut} key={1}>
          <Button border double color="red">Logout</Button>
        </a>
      ]
    } else {
      return [
        <Link key={1} to="/login"><Button border double color="red" key={1}>Login</Button></Link>
      ]
    }
  }

  render () {
    return (
      <header className="header twelve-cols">
        <Nested>
          <Column flex width={1}>
            <div className="logo align-self-center">
              <Link to="/">Taco Life</Link>
            </div>
          </Column>
          <Column width={10}></Column>
          <Column flex className="justify-content-end" width={1}>
            {this.renderAdminLinks()}
            {this.renderSessionLinks()}
          </Column>
        </Nested>
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.authenticated,
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps, {
  logout,
  resetCart,
})(Header)


Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
