import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import "./sections.css"
import Captura1 from "./Captura1.JPG"
import Captura2 from "./Captura2.JPG"
import Captura3 from "./Captura3.JPG"
import Captura4 from "./Captura4.JPG"
import Captura5 from "./Captura5.JPG"
import Captura6 from "./Captura6.JPG"



export default class Sections extends Component {


  render() {
    return (
    <div>
      <div className="contenedor">
        <Link class="bot" to="/full"><div class="shake1" ><button>Full Stack</button></div></Link>
        <Link class="bot" to="/data"><div id="data" ><button>Data Science</button></div></Link>
        <Link class="bot" to="/ciber"><div id="ciber" ><button>Cyber Security</button></div></Link>
      </div>
      <div>
      <img class="grafico" src={Captura1}/>
      <img class="grafico" src={Captura2}/>
      <img class="grafico" src={Captura3}/>
      <img class="grafico" src={Captura4}/>
      <img class="grafico" src={Captura5}/>
      <img class="grafico" src={Captura6}/>

      </div>
    </div>
    );
  }
}
