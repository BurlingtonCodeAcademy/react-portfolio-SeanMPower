import React from "react";
import "./styles/App.css";
import NavBar from "./components/Nav.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Stars from "./components/Stars.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {        /* Manages viewable component through modals */
      homeModal: true,
      aboutModal: false,
      projectsModal: false,
    };
  }

  goHome = (evt) => {     /* Makes Home the active modal */
    evt.preventDefault()

    this.setState  ({
      homeModal: true,
      aboutModal: false,
      projectsModal: false
    })
  }

  goAbout = (evt) => {   /* Makes About the active modal */
    evt.preventDefault()

    this.setState  ({
      homeModal: false,
      aboutModal: true,
      projectsModal: false
    })
  }

  goProjects = (evt) => { /* Makes Projects the active modal */
    evt.preventDefault()

    this.setState  ({
      homeModal: false,
      aboutModal: false,
      projectsModal: true
    })
  }

  render() {
    return (
      <>
        <NavBar             /* NavBar has access to state for changing all modals through parent methods */
          homeModal={this.state.homeModal}
          aboutModal={this.state.aboutModal}
          projectsModal={this.state.projectsModal}
          goHome={this.goHome}
          goAbout={this.goAbout}
          goProjects={this.goProjects}
        />
        <Stars />
        <Home
          homeModal={this.state.homeModal}
        />
        <About
          aboutModal={this.state.aboutModal}
        />
        <Projects
          projectsModal={this.state.projectsModal}
        />
      </>
    );
  }
}

export default App;
