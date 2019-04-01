import React, { Component } from 'react';
import {Row, Col } from './assets/bootstrapImports';
import MovieList from './components/MovieList/MovieList';
import Footer from './components/Footer/Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col>
            <h1 className='App__hero'>MOVIEW</h1>
          </Col>
        </Row>
        <MovieList />
        <Footer />
      </div>
    );
  }
}

export default App;
