import React, { Component } from 'react';
import Chat from './Chat';
import UserMenu from './UserMenu';

class App extends Component {
  render() {
    return (
      <div className="app">
        <UserMenu />
        <Chat />
      </div>
    );
  }
}

export default App;
