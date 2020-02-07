import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <iframe
        id="igraph"
        scrolling="no"
        style={{ border: "none" }}
        seamless="seamless"
        src="https://plot.ly/~chris/1638.embed"
        height={525}
        width="100%"
      />
      <Body class="cuerpo" />
      <Footer />
    </div>
  );
}

export default App;
