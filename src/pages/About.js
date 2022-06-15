import React, { Component } from 'react';
import "./About.css";
import headshot from "../assets/headshot.png";
  
export default class About extends Component {
  render() {
    return (
      <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          // Image goes here
          src = {headshot}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Serafin Patino Jr</div>
        <div className="brief_description">
          Hi there, my name is Serafin and I'm a rising Junior at Carleton College studying
          Computer Science, Cognitive Science and Neuroscience. Outside of school, I like to play volleyball 
          and read books.
        </div>
      </div>
    </div>
  </div>
    )
  }
}