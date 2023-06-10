import React, { Component } from "react";
import Twitter from "../images/Twitter.png";
import Facebook from "../images/Facebook Icon.png";
import Instagram from "../images/Instagram Icon.png";
import Github from "../images/GitHub Icon.png";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#161619",
          width: "230px",
          height: "50px",
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img alt='Twitter Icon' className='icon' src={Twitter} />
        <img alt='Facebook Icon' className='icon' src={Facebook} />
        <img alt='Instagram Icon' className='icon' src={Instagram} />
        <Link to='https://github.com/Joaosilva27'>
          <img alt='Github Icon' className='icon' src={Github} />
        </Link>
      </div>
    );
  }
}

export default Footer;
