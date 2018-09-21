import React from 'react';
import Aside from '../../UI/Aside/Aside';
import NavItem from './NavItem';

import './Sidebar.css'

class Sidebar extends React.Component {
  render () {
    const { path } = this.props;

    return (
      <Aside border="right">
        <ul className="nav">
          <NavItem path={`${path}`} name='Home' />
          <NavItem path={`${path}/products/new`} name='Choices' />
          <NavItem path={`${path}/products/new`} name='Menu' />
        </ul>
      </Aside>
    )
  }
}

export default Sidebar;