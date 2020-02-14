import React, { Component } from 'react';


//import MyProvider from "/Users/juanroyo/Documents/projects/PlataformaHackaton/my-app/src/provider.js"

export default class Main extends Component {
  constructor() {
      super();
      this.state = { message: "" };
    }

  componentDidMount() {
      const Message = "12345";
      Message.split("").map( (item, i) => {
        setTimeout(() => {
          this.setState({ message : this.state.message + item });
        }, i*200);
      });
}

      render(){
      return (
      <div class="letras">{this.state.message}</div>
      )
    }
}
