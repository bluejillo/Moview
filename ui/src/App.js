import React, { Component } from 'react';
import { Container, Row, Col } from './assets/bootstrapImports';
import MovieList from './components/MovieList/MovieList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieList />
      </div>
    );
  }
}

export default App;
