import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import ContentBody from './Components/ContentBody/ContentBody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <ContentBody />

      </div>
    );
  }
}

export default App;
