import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './index';
import Edit from './Edit';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index}/>
      <Route exact path="/edit/:id" component={Edit}/>
    </Switch>
  );
}
 
export default Routes;