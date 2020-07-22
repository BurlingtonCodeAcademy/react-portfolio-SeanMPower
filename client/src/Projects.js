import React from "react"

function Projects(props) {
  const modal = props.projectsModal;

  return(
  <div>
      {modal ? (
      <div className="main" id="projectsPage">
          <div id='project-header'><h1><span id="S">P</span>roject <span id="S">P</span>ortfolio</h1></div>
      </div>
      ) : null}
      </div>
  )
}

export default Projects;