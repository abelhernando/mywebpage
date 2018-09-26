import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Personal from './components/personal';
import Skills from './components/skills';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Skills />
        <Personal />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
