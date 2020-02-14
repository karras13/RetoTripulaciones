import React, { Component } from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Header from "./Header/Header";
//import Main from "./Main/Main";//
import Footer from "./Footer/Footer";
import Section from "./Sections/sections"
import Full from "./Detail/full";
import Data from "./Detail/data";
import Ciber from "./Detail/ciber";


export default class App extends Component {
  render(){
  return (

    <div>
      <Router>
        <Header />
        <div className="wrapper">
          <Switch>
            <Route exact path="/">
              <Section />
            </Route>
            <Route path="/full">
              <Full />
            </Route>
            <Route path="/data">
              <Data />
            </Route>
            <Route path="/ciber">
              <Ciber />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
    );
    }
}
