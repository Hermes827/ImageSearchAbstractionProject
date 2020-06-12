import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchBar.js'

class App extends React.Component {

  constructor(){
    super()
  }

  render(){
  return (
    <div className="App">
      <div className="mainDiv">
        <h1>Get image search API data</h1>
        <SearchBar/>
      </div>
    </div>
  );
}
}

export default App;
