import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Catelog from '../pages/Catelog';
import Details from '../pages/detail/Details';
import ProfileScreen from '../components/screens/ProfileScreen';
import Watch from '../pages/watch/Watch';

//Creact url router 
const Routes = () => {
      return (
            <Switch>
                  <Route
                        path='/profile'
                        component={ProfileScreen}
                  />

                  <Route
                        path='/:category/:id/watch'
                        component={Watch}
                  />
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
                  <Route
                        path='/'
                        exact
                        component={Home}
                  />
            </Switch>
      );
}

export default Routes