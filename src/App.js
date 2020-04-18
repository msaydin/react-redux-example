import React, { Component } from 'react';
import NavBar from './components/Navbar';
import UserList from './components/UserList';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <UserList />
      </div>
    )
  }
}

export default App