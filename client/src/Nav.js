import React from "react";

function NavBar(props) {
  return (
    <div id="nav-container">
      <div className="initialsBox" id="capitalS">
        S
      </div>
      <div className="initialsBox" id="small-name">
        Sean
      </div>
      <div className="links" id="internal-links">
        <div className="icon" id="home">
          <i class="fas fa-home" onClick={props.goHome}></i>
        </div>
        <div className="icon" id="about">
          <i class="far fa-user" onClick={props.goAbout}></i>
        </div>
        <div className="icon" id="works">
          <i class="far fa-eye" onClick={props.goProjects}></i>
        </div>
        <div className="icon">
          <i class="far fa-envelope" id="contact" ></i>
        </div>
      </div>
      <div className="links" id="outgoing-links">
        <div className="icon" id="linkedIn">
          <a href="https://www.linkedin.com/in/sean-power-99777115a/"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <div className="icon" id="github">
          <a href="https://github.com/SeanMPower"><i class="fab fa-github"></i></a>
        </div>
        <div className="icon" id="twitter">
        <a href="https://twitter.com/seanpower22"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
