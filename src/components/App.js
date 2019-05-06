import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PreLogin from './PreLogin';
import SignIn from './SignIn';
import SignUp from './SignUp';
import NotFound from './NotFound';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/"  exact={true} component={PreLogin}/>
        <Route path="/sign-in" component={SignIn}/>
        <Route path="/sign-up" component={SignUp}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
