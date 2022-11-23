import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Catelog from '../pages/Catelog';
import Details from '../pages/Details';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
//Creact url router
const Routes = () => {
  return (
    <Switch>

      
        <Route 
              path='/:category/search/:keyword'
              component={Catelog}
        />
        <Route 
              path='/:category/:id'
              component={Details}
        />
   
        <Route 
              path='/:category'      /* catelog film */
              component={Catelog}
        />
        {/* <Route 
              path='/login'
              exact
              component={Login}
        />
        <Route 
              path='/signup'
              exact
              component={Signup}
        /> */}
        <Route 
              path='/'
              exact
              component={Home}
        />
    </Switch>
  );
}

export default Routes