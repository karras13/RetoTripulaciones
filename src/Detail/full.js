import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import "./full.css"

export default class Full extends Component {
  render() {
    return (
      <div>
        <img class="img" src="https://miro.medium.com/max/960/1*YfEOtukQSNXUOBcgZjuKLg.png"/><Link class="bot" to="/"><button>Atras</button></Link>
      </div>
    );
  }
}
