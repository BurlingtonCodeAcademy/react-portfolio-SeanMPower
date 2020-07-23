import React from "react"

function Projects(props) {
  const modal = props.projectsModal;

  return(
  <div>
      {modal ? (
      <div className="main" id="projectsPage">
          <div id='project-header'><h1><span id="S">P</span>roject <span id="S">P</span>ortfolio</h1></div>
          <div className="project-thumb"><h2>Tic-Tac-Toe</h2><br /><img src="/img/tic-tac-thumb.png" style={{width: '200px', height: '200px' }} /><br></br><br />A collaborative effort with Christian Dow. We created a functional tic-tac-toe game that can be played with two players or one player vs. CPU. It taught us about DOM manipulation, working with timers, and lots of work with arrays.</div>
          <div className="project-thumb"><h2>Yelpington</h2><br /><img src="/img/yelpington-thumb.png" style={{width: '200px', height: '200px'}} /><br /><br />A simple mock-up of a Yelp-inspired site for local Burlington restaurants that pulls in lat/long data from an API and places markers using a map API. In this case, MapBox.</div>
          <div className="project-thumb"> </div>
          <div className="project-thumb"> </div>
          <div className="project-thumb"> </div>
          <div className="project-thumb"> </div>
      </div>
      
      ) : null}
      </div>
  )
}

export default Projects;