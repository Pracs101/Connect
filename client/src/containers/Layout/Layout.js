import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Auth from '../Auth/Auth';
import Dept from '../Dept/Dept';
import Wall from '../Wall/Wall';
import Home from '../Home/Home';
import Signup from '../Auth/Signup/Signup';
import Signin from '../Auth/Signin/Signin';

class Layout extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/auth/signup" exact component={Signup} />
          <Route path="/auth/signin" exact component={Signin} />
          <Route path="/auth/" component={Signup} />
          <Route path="/dept" component={Dept} />
          <Route path="/wall" component={Wall} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Layout;