import React from "react";

function About(props) {
  const modal = props.aboutModal;

  return (
    <div>
      {modal ? (
        <div className="main" id="aboutPage">
            <div id="main-col1">
                <h1>About Me</h1>
                <h5>I'm an aspiring web developer living in South Burlington, VT. </h5>
            </div>
          <div id="profile-pic main-col2">
            <img src="/img/circle-cropped.png" style={{width: "500px"}} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default About;
