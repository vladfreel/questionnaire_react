import React, { Component } from 'react';
import './App.css';
import QuestionsContainer from './components/QuestionsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuestionsContainer />
      </div>
    );
  }
}

export default App;
