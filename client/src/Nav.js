import React from "react";

function NavBar() {
  return (
    <div id="nav-container">
      <div className="initialsBox" id="capitalS">
        S
      </div>
      <div className="initialsBox" id="small-name">
        Sean
      </div>
      <div className="links">
        <div className="icon"><i class="fas fa-home"></i></div>
        <div className="icon"><i class="far fa-user"></i></div>
        <div className="icon"><i class="fas fa-cog"></i></div>
        <div className="icon"><i class="fas fa-eye"></i></div>
        <div className="icon"><i class="far fa-envelope"></i></div>
      </div>
      <div className="links">
        <div className="icon"><i class="fab fa-github"></i></div>
        <div className="icon">
          <i class="fab fa-twitter"></i>
        </div>
        <div className="icon">
          <i class="fab fa-linkedin-in"></i>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
