import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Navbar/Layout";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import MySkills from "../pages/MySkills";
import MyWork from "../pages/MyWork";
import ContactMe from "../pages/ContactMe";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About Me" component={AboutMe} />
          <Route exact path="/My Skills" component={MySkills} />
          <Route exact path="/Contact Me" component={ContactMe} />
          <Route exact path="/My Work" component={MyWork} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
