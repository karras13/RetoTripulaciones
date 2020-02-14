import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import "./sections.css"


export default class Sections extends Component {
  render() {
    return (

      <div className="contenedor">
        <Link class="bot" to="/full"><div class="shake1" ><button>Full Stack</button></div></Link>
        <Link class="bot" to="/data"><div id="data" ><button>Data Science</button></div></Link>
        <Link class="bot" to="/ciber"><div id="ciber" ><button>Cyber Security</button></div></Link>
      </div>
    );
  }
}
