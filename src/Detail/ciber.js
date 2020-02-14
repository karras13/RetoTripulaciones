import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import "./ciber.css"
import Captura1 from "./Captura1.JPG"


export default class Ciber extends Component {
  render() {
    return (

      <div>
      <img class="img" src={Captura1}/><Link class="bot" to="/"><button>Atras</button></Link>
      </div>
    );
  }
}
