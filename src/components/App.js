//Dependencies
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Layout
import Layout from "../components/Navbar/Layout";
//Pages for routes
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About Me" component={AboutMe} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
