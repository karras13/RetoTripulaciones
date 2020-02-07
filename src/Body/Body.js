import React, { Component } from "react";
import "./Body.css";
import JobModule from "./JobModule/JobModule";
// import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
class Body extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div class="Body">
        <JobModule className="Fullstack" />
        <JobModule clasName="Data" />
        <JobModule className="Cyber" />
        <JobModule className="UX UI" />
      </div>
    );
  }
}

export default Body;
