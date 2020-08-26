import React from "react";

function NavBar(props) {
  return (
    <div id="nav-container">
      <div className="initialsBox" id="capitalS">   {/* Top left corner S */}
        S
      </div>
      <div className="initialsBox" id="small-name">
        Sean
      </div>
      <div className="links" id="internal-links">
         {props.homeModal ? (    /* If Home is current page, highlight icon in aqua */
          <div className="icon" id="home">
            <i
              class="fas fa-home"
              onClick={props.goHome}
              style={{ color: "aqua" }}
            ></i>
          </div>
        ) : (
          <div className="icon" id="home">
            <i
              class="fas fa-home"
              onClick={props.goHome}
              onMouseEnter={{ color: "aqua" }}
              onMouseLeave={{ color: "#555555" }}
            ></i>
          </div>
        )}

        {props.aboutModal ? (     /* If About is current page, highlight icon in aqua */ 
          <div className="icon" id="about">
            <i
              class="far fa-user"
              onClick={props.goAbout}
              style={{ color: "aqua" }}
            ></i>
          </div>
        ) : (
          <div className="icon" id="about">
            <i
              class="far fa-user"
              onClick={props.goAbout}
              onMouseEnter={{ color: "aqua" }}
              onMouseLeave={{ color: "#555555" }}
            ></i>
          </div>
        )}

        {props.projectsModal ? (      /* If Projects is current page, highlight icon in aqua */
          <div className="icon" id="works">
            {" "}
            <i
              class="far fa-eye"
              onClick={props.goProjects}
              style={{ color: "aqua" }}
            ></i>
          </div>
        ) : (
          <div className="icon" id="works">
            <i
              class="far fa-eye"
              onClick={props.goProjects}
              onMouseEnter={{ color: "aqua" }}
              onMouseLeave={{ color: "#555555" }}
            ></i>
          </div>
        )}

        <div className="icon">
          <i class="far fa-envelope" id="contact"></i>
        </div>
      </div>
      <div className="links" id="outgoing-links">
        <div className="icon" id="linkedIn">
          <a href="https://www.linkedin.com/in/seanpower22/">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="icon" id="github">
          <a href="https://github.com/SeanMPower">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <div className="icon" id="twitter">
          <a href="https://twitter.com/seanpower22">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
