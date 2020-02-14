
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import "./data.css"
import Captura8 from "./Captura8.jpg"

export default class Data extends Component {
  render() {
    return (

      <div>
      <img class="grafico" src={Captura8}/><Link class="bot" to="/"><button class="atras">Inicio</button></Link>
      </div>
    );
  }
}
