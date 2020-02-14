
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import "./data.css"

export default class Data extends Component {
  render() {
    return (

      <div>
      <img class="img" src="https://www.palermo.edu/Archivos_content/2019/cursos/ingenieria/datascience/programa-fundamentos-data-science-up.jpg"/><Link class="bot" to="/"><button>Atras</button></Link>
      </div>
    );
  }
}
