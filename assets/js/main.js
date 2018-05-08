import React, { Component } from "react";
import ReactDOM from "react-dom";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <h1>Hello World</h1>
      </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Main />, app);
