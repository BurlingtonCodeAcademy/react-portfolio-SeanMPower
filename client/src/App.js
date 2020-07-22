import React from "react";
import "./App.css";
import NavBar from "./Nav.js";
import Home from "./Home.js";
import About from "./About.js";
import Projects from "./Projects.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeModal: false,
      aboutModal: false,
      projectsModal: true,
    };
  }

  goHome = (evt) => {
    evt.preventDefault()

    this.setState = ({
      homeModal: true,
      aboutModal: false,
      projectsModal: false
    })
  }

  goAbout = (evt) => {
    evt.preventDefault()

    this.setState = ({
      homeModal: false,
      aboutModal: true,
      projectsModal: false
    })
  }

  goProjects = (evt) => {
    evt.preventDefault()

    this.setState = ({
      homeModal: false,
      aboutModal: false,
      projectsModal: true
    })
  }

  render() {
    return (
      <>
        <NavBar
          homeModal={this.state.homeModal}
          aboutModal={this.state.aboutModal}
          projectsModal={this.state.projectsModal}
          goHome={this.goHome}
          goAbout={this.goAbout}
          goProjects={this.goProjects}
        />
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
