import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchBar.js'

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      queryRecords: ""
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/records")
    .then(res => res.json())
    .then(data => {
      this.setState({
        queryRecords: data[0]
      })
      })
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
