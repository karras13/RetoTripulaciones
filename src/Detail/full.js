import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import "./full.css"
import Captura7 from "./Captura7.jpg"


export default class Full extends Component {
  render() {
    return (
      <div>
          <img class="grafico" src={Captura7}/><Link class="bot" to="/"><button class="atras">Inicio</button></Link>
      </div>
    );
  }
}
