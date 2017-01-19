import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chat from './Chat';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Redux Chat</h1>
        <Chat />
      </div>
    );
  }
}

export default connect(null)(App);
