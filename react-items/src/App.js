import React, { Component } from 'react';
import './App.css';

import AddItem from './components/AddItem';
import ListItem from './components/ListItem';

class App extends Component {
  render() {
    return (
      <div className="app-root">
        <div className="app-comps">
          <AddItem />
          <ListItem />
        </div>
      </div>
    );
  }
}

export default App;
