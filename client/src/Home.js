import React from "react";

function Home(props) {
  const modal = props.homeModal;

  return (
    <div>
      {modal ? (
        <div className="main" id="homePage">
          <div id="main-col1">
            <div className="three-box-main"></div>
            <div className="three-box-main">
              <h1>
                Hi, I'm <span className="cap-shadow">S</span>ean,
              </h1>
              <h1>Full Stack Web Developer.</h1>
            </div>
            <div className="three-box-main"></div>
            <div></div>
          </div>
          <div id="main-col2">
            <div id="largeS">S</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Home;
