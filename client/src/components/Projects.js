import React from "react";

function Projects(props) {
  const modal = props.projectsModal;

  return (
    <div>
      {modal ? (
        <div className="main" id="projectsPage">
          <div id="project-header">
            <h1>
              <span className="cap-shadow">P</span>roject{" "}
              <span className="cap-shadow">P</span>ortfolio
            </h1>
          </div>
          <div className="project-thumb">
            <h2>VSAC Capstone Project</h2>
            <a href="https://github.com/SeanMPower/BCA-VSAC-Capstone">
              <i class="fab fa-github"></i>
            </a>
            <br />
            <img
              src="/img/capstone.png"
              alt="Capstone Thumb"
              style={{ width: "280px", height: "200px" }}
            />
            <br />
            <br />
            VSAC desired a database application that could serve as a central
            access point for VSAC counselors and prospective students seeking
            information about certificate and training programs available to
            Vermonters. Full stack MERN application. Project teammates: Mila
            Carranza and Gabe Sequeira-Bacher
          </div>
          <div className="project-thumb">
            <h2>Tic-Tac-Toe</h2>
            <a href="https://github.com/BurlingtonCodeAcademy/tic-tac-toe-sean-christian">
              <i class="fab fa-github"></i>
            </a>
            <br />
            <img
              src="/img/tic-tac-thumb.png"
              alt="Tic-Tac-Toe Thumb"
              style={{ width: "280px", height: "200px" }}
            />
            <br></br>
            <br />A collaborative effort with Christian Dow. We created a
            functional tic-tac-toe game that can be played with two players or
            one player vs. CPU. It taught us about DOM manipulation, working
            with timers, and lots of work with arrays.
          </div>
          <div className="project-thumb">
            <h2>Yelpington</h2>
            <a href="https://github.com/BurlingtonCodeAcademy/yelpington-SeanMPower">
              <i class="fab fa-github"></i>
            </a>
            <br />
            <img
              src="/img/yelpington-thumb.png"
              alt="Yelpington Thumb"
              style={{ width: "280px", height: "200px" }}
            />
            <br />
            <br />A simple mock-up of a Yelp-inspired site for local Burlington
            restaurants that pulls in lat/long data from an API and places
            markers using a map API; In this case, MapBox.
          </div>
          <div className="project-thumb">
            <h2>Zorkington</h2>
            <a href="https://github.com/BurlingtonCodeAcademy/zorkington-sean-josh">
              <i class="fab fa-github"></i>
            </a>
            <br />
            <img
              src="/img/zorkington-thumb.png"
              alt="Zorkington Thumb"
              style={{ width: "280px", height: "200px" }}
            />
            <br />
            <br />
            This project was inspired by the old school text adventure game,
            Zork. This collaborative effort with Josh Dudley was our take on a
            Zork-style game of Clue. This was early in our development and
            taught us LOTS about Node.js, working with objects and arrays and
            coding for the terminal.
          </div>

          <div className="project-thumb"> </div>
          <div className="project-thumb"> </div>
        </div>
      ) : null}
    </div>
  );
}

export default Projects;
