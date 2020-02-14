import React, { Component } from "react";
import "./Footer.css";


class Footer extends Component {
  constructor() {
      super();
      this.state = { message: "" };
    }

  componentDidMount() {
      const Message = "Hecho con cariño por los alumnos de Cyber, Data y Full Stack del puente";
      Message.split("").map( (item, i) => {
        setTimeout(() => {
          this.setState({ message : this.state.message + item });
        }, i*200);
      });
}

  render() {
    return (
      <div class="Footer">
          <h3 class="copyright">Todos los derechos reservados© 2020</h3>
          <div class="letras"></div>
        <span class="Footer1"></span>
          <div class="heart"></div>
        <span class="Footer1"></span>
        <div class="letras">{this.state.message}</div>
      </div>
    );
  }
}

export default Footer;
