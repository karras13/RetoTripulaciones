import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import "./ciber.css"
import Captura1 from "./Captura1.JPG"
import Captura2 from "./Captura2.JPG"
import Captura3 from "./Captura3.JPG"
import Captura4 from "./Captura4.JPG"
import Captura5 from "./Captura5.JPG"
import Captura6 from "./Captura6.JPG"

export default class Ciber extends Component {
  render() {
    return (

      <div>
      <img class="grafico" src={Captura1}/>
      <img class="grafico" src={Captura2}/>
      <img class="grafico" src={Captura3}/>
      <img class="grafico" src={Captura4}/>
      <img class="grafico" src={Captura5}/>
      <img class="grafico" src={Captura6}/>
      <Link class="bot" to="/"><button>Atras</button></Link>
      </div>

    );
  }
}
