import React from 'react';
import './App.css';
import NavBar from './Nav.js'
import Home from './Home.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      aboutModal: false,
      projectsModal: false
    }
  }
  
  render() {
  return (
    <>
    <NavBar />
    <Home />
    </>
  );
  }
}

export default App;
