import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.scss';
import { Routes } from "./helpers/routs"
import { ConnectedRouter } from 'connected-react-router'
import { history } from "./helpers/rootStore"

function App() {
  return (
    <div>
      <ConnectedRouter history={history} >
        <Switch>
          {new Routes().GetRoutes.map((route, i) =>
            <Route key={i} exact={route.subRoutes.some(r => r.exact)} path={route.subRoutes.map(r => r.path)}>
              <route.layout>
                {route.subRoutes.map((subRoute, i) =>
                  <Route key={i} {...subRoute} />
                )}
              </route.layout>
            </Route>
          )}
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;
