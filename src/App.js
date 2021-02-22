import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignPage from './containers/Sign/SignPage';

function App() {
  return (
    <div>
      <Switch>
        {/* <Route exact path="/" component={Login} /> */}
        <Route exact path="/" component={SignPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
