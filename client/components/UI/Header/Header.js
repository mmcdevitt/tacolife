import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../../../store'
import { Grid, Column, Nested } from "../../Grid";

import './Header.css';
import Button from '../Button/Button';

const Header = ({handleClick, isLoggedIn}) => (
  <header className="header nested">
    <Column flex width={1}>
      <div className="logo align-self-center">
        Taco Life
      </div>
    </Column>
    <Column width={10}></Column>
    <Column flex className="justify-content-end" width={1}>
      <Button border double color="red">Login</Button>
    </Column>
  </header>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.User.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Header)

/**
 * PROP TYPES
 */
Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
