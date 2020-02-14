
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import "./data.css"
import Captura2 from "./Captura2.JPG"

export default class Data extends Component {
  render() {
    return (

      <div>
      <img class="grafico" src={Captura2}/><Link class="bot" to="/"><button>Atras</button></Link>
      </div>
    );
  }
}
