import React from 'react'
import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const Router = () => {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

const App:React.FC = () => {
  return (
    <div>
      <Router />
    </div>
  )
}

export default App