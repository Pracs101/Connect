import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavItem.css';

const nav = (props) => {
  let itemStyle = props.right ? [classes.NavItem, classes.righty] : [classes.NavItem]; 
  return (
    <li className={itemStyle.join(' ')} >
      <NavLink
        to={props.link}
        activeClassName={classes.active}
        exact={props.exact}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default nav;