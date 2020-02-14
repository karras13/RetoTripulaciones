import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import "./full.css"
import Captura6 from "./Captura6.JPG"


export default class Full extends Component {
  render() {
    return (
      <div>
          <img class="grafico" src={Captura6}/><Link class="bot" to="/"><button>Atras</button></Link>
      </div>
    );
  }
}
