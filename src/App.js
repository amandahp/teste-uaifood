import React from 'react';
import routes from './routes/Router'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PageNotFound from "./pages/notfound/notfound"

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/homepage-uaifood" />} />
        {routes.map(route => (
              <Route path={route.path} component={route.component} key={route.path} exact />
            ))}
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;