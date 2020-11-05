import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const list = ["siddhu", "siddarth", "sai"];
    return (
      <div id="main">
        <ol key="relativeList">
          {list.map((ele, index) => (
            <li key={`relativeListItem${index + 1}`}>{ele}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
