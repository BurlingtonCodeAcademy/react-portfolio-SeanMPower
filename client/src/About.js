import React from "react";

function About(props) {
  const modal = props.aboutModal;

  return (
    <div>
      {modal ? (
        <div className="main" id="aboutPage">
          <div id="main-col1">
            <div id="about-top-left">
              <h1>
                <span className="cap-shadow">A</span>bout <span className="cap-shadow">M</span>e
              </h1>
              <h5>
                Hello there! My name is Sean Power. I'm an aspiring web developer living in South Burlington, VT. I have a passion for technology and learning which led me to pursue a career in web development. The idea that there is always more to learn and technologies always changing excites me as it provides limitless challenge and growth opportunities!
              </h5>
            </div>
          </div>
          <div id="main-col2">
            <img
              src="/img/circle-cropped.png"
              alt="Profile Pic"
              style={{ width: "500px" }}
              id="profile-pic"
            />
            <h5>When I'm not at my computer, you can find me spending time with my girlfriend and my dog, taking advantage of all the amazing outdoor activities that Vermont has to offer; hiking, kayaking, camping</h5>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default About;
