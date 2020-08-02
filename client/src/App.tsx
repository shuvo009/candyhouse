import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import { Routes } from "./helpers/routs"


function App() {
  return (
    <div className="App">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
