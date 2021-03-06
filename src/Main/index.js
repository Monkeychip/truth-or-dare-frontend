import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
// import { Security, ImplicitCallback, SecureRoute } from '@okta/okta-react';
import { ImplicitCallback } from '@okta/okta-react';

import Login from '../Login'
import Home from '../Home'

class Main extends Component {
 render() {
   return (
     <Router>
       
         <Switch>
           <Route exact path="/" component={Login} />
           <Route path="/implicit/callback" component={ImplicitCallback} />
           <Route path="/home" component={Home} />
         </Switch>

     </Router>
   );
 }
}

export default Main;