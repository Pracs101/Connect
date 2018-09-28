import React from 'react';

import NavItem from './NavItem/NavItem';
import classes from './Nav.css';

const nav = (props) => {
  return (
    <ul className={classes.Nav} >
      <NavItem link="/" >Connect</NavItem>
      <NavItem link="/" exact right >Home</NavItem>
      <NavItem link="/wall" exact right >Wall</NavItem>
      <NavItem link="/dept" exact right >Department</NavItem>
      <NavItem link="/auth" exact right >Auth</NavItem>
    </ul>
  );
}

export default nav;