import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { IRouteConfig } from "routes/types";



const routes : Array<IRouteConfig> = [
  {
    key:"root",
    path: "/",
    component: () => <div/>,
    exact: true
  },
];

export const MainRouter = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route: IRouteConfig, i) => (
          <Route key={`${route.key}-${i}`} path={route.path} render={(props) => (
            <route.component {...props}/>
          )} />
        ))}
      </Switch>
    </Router>
  );
};

