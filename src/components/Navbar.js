import ReactLogo from "../images/logo.png";
import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className='nav-container'>
        <img style={{ width: "158px", height: "29px", paddingLeft: "20px", marginRight: "auto" }} src={ReactLogo} />
        <h4 style={{ paddingRight: "20px", color: "white", fontFamily: "Inter", fontSize: "13px" }}>React Course - Project 1</h4>
      </div>
    );
  }
}

export default Navbar;
