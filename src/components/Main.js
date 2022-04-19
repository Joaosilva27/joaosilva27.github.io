import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div className='main-container'>
        <br />
        <h1 style={{ fontFamily: "Inter", weight: "bold", color: "white", paddingLeft: "20px" }}>Fun facts about React</h1>
        <ul className='facts-container'>
          <li>Was first released in 2013</li>
          <li>Was originally created by Juan Silva</li>
          <li>Has well over 100k stars on Stack overflow</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterpruised mobile apps</li>
        </ul>
      </div>
    );
  }
}

export default Main;
