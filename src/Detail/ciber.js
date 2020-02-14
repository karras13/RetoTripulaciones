import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import "./ciber.css"
import Captura9 from "./Captura9.jpg"


export default class Ciber extends Component {
  render() {
    return (

      <div>
      <img class="grafico" src={Captura9}/>

      <Link class="bot" to="/"><button class="atras">Inicio</button></Link>
      </div>

    );
  }
}
