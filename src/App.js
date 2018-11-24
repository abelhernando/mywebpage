import React, { Component } from 'react';
import './App.css';
import './styles/main.css'
import MyNavbar from './components/MyNavbar/mynavbar';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Personal from './components/Personal/personal';
import Skills from './components/Skills/skills';
import Header from './components/Header/header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { phone } from '@fortawesome/free-solid-svg-icons'

library.add()

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
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
