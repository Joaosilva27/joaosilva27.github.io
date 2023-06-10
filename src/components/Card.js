import React, { Component } from "react";
import ProfilePicture from "../images/Me.jpg";
import Footer from "./Footer";
import Mail from "../images/Mail.png";
import Linkedin from "../images/linkedin.png";
import { Link } from "react-router-dom";

class BusinessCard extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", height: "100vh" }}>
          <img style={{ width: "230px", height: "250px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }} src={ProfilePicture} />
          <div className='card-container'>
            <h4 style={{ textAlign: "center", color: "white", fontFamily: "Inter", marginBottom: 0 }}>João Silva</h4>
            <h6 style={{ textAlign: "center", color: "#F3BF99", fontFamily: "Inter", margin: 0 }}>Frontend Engineer</h6>
            <p style={{ fontSize: "8px", color: "white", textAlign: "center", fontFamily: "Inter" }}>joaosilva7875@gmail.com</p>
            <div style={{ display: "flex", justifyContent: "space-evenly", paddingTop: "5px" }}>
              <Link to='mailto:joaosilva7875@gmail.com'>
                <button
                  href={"https://www.linkedin.com/in/jo%C3%A3o-silva-8992b4221"}
                  style={{ border: "none", borderRadius: "4px", width: "75px", height: "25px", fontSize: "10px" }}
                >
                  <img style={{ width: "9px", position: "relative", top: "1px", right: "1px" }} src={Mail} />
                  <a href={"https://www.linkedin.com/in/jo%C3%A3o-silva-8992b4221/"} />
                  Email
                </button>
              </Link>

              <Link to='https://www.linkedin.com/in/jo%C3%A3o-silva-8992b4221/'>
                <button
                  style={{
                    border: "none",
                    borderRadius: "4px",
                    width: "75px",
                    fontSize: "10px",
                    backgroundColor: "#5093E2",
                    color: "white",
                    height: "25px",
                  }}
                >
                  <img style={{ width: "9px", position: "relative", top: "1px", right: "1px" }} src={Linkedin} />
                  LinkedIn
                </button>
              </Link>
            </div>
            <div style={{ padding: "0 25px 0 25px" }}>
              <h4 style={{ color: "white", fontFamily: "Inter", marginBottom: 0 }}>About</h4>
              <p style={{ color: "white", fontFamily: "Inter", fontSize: "7px" }}>
                I am a frontend engineer with a particular interest in making things simple and automating daily tasks. I try to keep up with security
                and best practices, and am always looking fowards for new things to learn.
              </p>
              <h4 style={{ color: "white", fontFamily: "Inter", marginBottom: 0 }}>Interests</h4>
              <p style={{ color: "white", fontFamily: "Inter", fontSize: "7px" }}>
                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Hip-Hop culture and Coffee fanatic.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default BusinessCard;
